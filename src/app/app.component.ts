import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { HeaderComponent } from './header/header.component';
import { ProfilePictureComponent } from './profile-picture/profile-picture.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { ProjectsComponent } from './projects/projects.component';
import { AchievementsComponent } from './achievements/achievements.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { BranchesMapComponent } from './branches-map-component/branches-map-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule,BranchesMapComponent,CommonModule,HeaderComponent,ProfilePictureComponent,ExperienceComponent,SkillsComponent,ContactComponent,EducationComponent,HobbiesComponent,ProjectsComponent,AchievementsComponent,ContactFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'resume-project';

  showEducation = true;
  showProjects = true;
  showExperience = true;
  showSkills = true;
  showAchievements = true;
  showHobbies = true;
  showContact = true;
  showContactForm=true
  showMap=true;

  toggleSection(section: string) {
    (this as any)[section] = !(this as any)[section];
  }

  getToggleLabel(section: string): string {
    return (this as any)[section] ? '-' : '+';
  }

  downloadPDF() {
    const data = document.getElementById('resume-content');
    if (data) {
      html2canvas(data).then(canvas => {
        const imgWidth = 208;
        const pageHeight = 295;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        let heightLeft = imgHeight;

        const doc = new jsPDF('p', 'mm', 'a4');
        let position = 0;

        doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          doc.addPage();
          doc.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
          heightLeft -= pageHeight;
        }

        doc.save('resume.pdf');
      });
    }
  }
}
