import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  imports: [CommonModule]
})
export class SkillsComponent {
  skills = [
    { name: 'C++', rating: 'Expert', showRating: false },
    { name: 'JavaScript', rating: 'Advanced', showRating: false },
    { name: 'Python', rating: 'Expert', showRating: false },
    { name: 'HTML/CSS', rating: 'Advanced', showRating: false },
    { name: 'MongoDB', rating: 'Intermediate', showRating: false },
    { name: 'Node', rating: 'Intermediate', showRating: false },
    { name: 'React', rating: 'Intermediate', showRating: false },
    { name: 'Angular', rating: 'Intermediate', showRating: false },
    { name: 'TypeScript', rating: 'Intermediate', showRating: false },
    { name: 'Express', rating: 'Intermediate', showRating: false },
    { name: 'Socket.io', rating: 'Intermediate', showRating: false },
    { name: 'SQL', rating: 'Advanced', showRating: false },
    { name: 'Data Structures And Algorithms', rating: 'Advanced', showRating: false },
    { name: 'DBMS', rating: 'Advanced', showRating: false },
    { name: 'Machine Learning', rating: 'Intermediate', showRating: false },
    { name: 'Deep Learning', rating: 'Beginner', showRating: false },
    { name: 'APIs', rating: 'Advanced', showRating: false },
    { name: 'Git', rating: 'Advanced', showRating: false },
    { name: 'System Design', rating: 'Intermediate', showRating: false },
    { name: 'Object Oriented Programming (OOPs)', rating: 'Advanced', showRating: false }
  ];

  showRating(skill: any) {
    skill.showRating = true;
  }

  hideRating() {
    this.skills.forEach(skill => skill.showRating = false);
  }
}
