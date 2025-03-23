import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {
  education = [
    { level: '10th', school: 'DEF High School', marks: '90%' },
    { level: '12th', school: 'ABC Senior Secondary School', marks: '85%' },
    { level: 'B.Tech', school: 'XYZ University', grade: 'A+' },
  ];

  experience = [
    {
      role: 'Frontend Developer',
      company: 'XYZ Company',
      period: '2022 - Present',
    },
    { role: 'Angular Developer', company: 'ABC Tech', period: '2020 - 2022' },
    { role: 'Intern', company: 'DEF Solutions', period: '2019 - 2020' },
  ];

  skills = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML & CSS',
    'Bootstrap',
    'REST APIs',
    'Git',
    'Firebase',
  ];
}
