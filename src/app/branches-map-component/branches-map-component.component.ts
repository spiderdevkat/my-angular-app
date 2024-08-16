import { Component, ViewChild, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule, MapInfoWindow, MapMarker } from '@angular/google-maps';
import { RouterModule } from '@angular/router';

declare var google: any;

interface Branch {
  id: number;
  name: string;
  address: string;
  lat: number;
  lng: number;
}

interface BranchMapMarker {
  branch: Branch;
  position: {
    lat: number;
    lng: number;
  };
  title: string;
  options: {
    animation: google.maps.Animation;
  };
  label: string;
  click?: () => void;
}

@Component({
  selector: 'app-branches-map',
  standalone: true,
  imports: [
    CommonModule,
    GoogleMapsModule,
    RouterModule,
  ],
  templateUrl: './branches-map-component.component.html',
  styleUrls: ['./branches-map-component.component.scss'],
})
export class BranchesMapComponent {
  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;

  branches = signal<Branch[]>([]);
  center: google.maps.LatLngLiteral = { lat: 46.8182, lng: 8.2275 }; // Center of Switzerland
  zoom = 8;
  markers: BranchMapMarker[] = [];
  selectedBranch = signal<Branch | null>(null);

  constructor() {
    this.loadBranches();
    effect(
      () => {
        // Assign markers to data
        this.markers = this.getMarkers();
      },
      { allowSignalWrites: true }
    );
  }

  loadBranches() {
    this.branches.set([
      { id: 1, name: 'Branch 1', address: 'Address 1', lat: 28.6139, lng: 77.2090 },
      { id: 2, name: 'Branch 2', address: 'Address 2', lat: 28.7041, lng: 77.1025 }
    ]);
  }

  getMarkers() {
    return this.branches()
      .map((branch) => {
        const marker: BranchMapMarker = {
          label: '',
          position: { lat: branch.lat, lng: branch.lng },
          title: branch.name,
          options: { animation: google.maps.Animation.DROP },
          branch: branch,
        };
        return marker;
      })
      .filter(
        (marker) => !isNaN(marker.position.lat) && !isNaN(marker.position.lng)
      );
  }

  openInfoWindow(branch: Branch, marker: MapMarker) {
    this.selectedBranch.set(branch);
    this.infoWindow?.open(marker);
  }
}