import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  educationEntries = [
    {
      title: 'NIT KURUKSHETRA',
      location: 'Kurukshetra, Haryana',
      degree: 'Bachelor of Technology (B.Tech)',
      graduationDate: 'June 2024',
      major: 'Electrical Engineering',
      details: [
        'Cumulative GPA: 8.70/10.0',
        'Department Rank 2 in 3rd Sem'
      ],
      showDetails: false
    },
    {
      title: 'R.E.D SCHOOL JHAJJAR',
      location: 'Jhajjar, Haryana',
      degree: 'Class XII (CBSE)',
      graduationDate: '2020',
      details: [
        'Percentage: 94.6%'
      ],
      showDetails: false
    }
  ];

  toggleDetails(entry: any) {
    entry.showDetails = !entry.showDetails;
  }
}
