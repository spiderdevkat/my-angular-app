import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  activities = [
    {
      title: 'CURAXO HEALTHCARE LLP',
      location: 'Bhilai, Chattisgarh',
      role: 'Software Engineer Intern',
      duration: 'Jan 2023 – June 2023',
      details: [
        'Developed a dynamic analytics dashboard for optimizing the company website experience, featuring quick access to clients, donations, settings, and hep desk.',
        'Integrated data visualisation charts and external libraries like Font Awesome and Chart.js for enhanced functionality. '
      ],
      showDetails: false
    },
    {
      title: 'ENGLISH LITERARY AND DEBATING CLUB',
      location: 'NIT Kurukshetra, Haryana',
      role: 'Active Member',
      duration: 'Sep 2021 – June 2024',
      details: [
        'Designed Posts on social media and published personal Blogs.',
        'Organized and advertised Confluence 2022 with 300+ participants in NIT Kurukshetra.'
      ],
      showDetails: false
    },
    {
      title: 'ELECTRORECK',
      location: 'NIT Kurukshetra, Haryana',
      role: 'Committee Member',
      duration: 'Dec 2021 – June 2024',
      details: [
        'Managed the launch of TechSpradha and worked towards improvement in organization of events.'
      ],
      showDetails: false
    }
  ];

  toggleDetails(activity: any) {
    activity.showDetails = !activity.showDetails;
  }
}
