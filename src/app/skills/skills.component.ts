import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {

  skills = [
    {
      title: 'Angular (v10 to 18) & React',
      description: 'Expertise in building dynamic single page applications with components, services, modules, and routes',
      icon: 'fab fa-angular'
    },
    {
      title: 'TypeScript',
      description: 'Understanding of type safety and interfaces',
      icon: 'fas fa-code'
    },
    {
      title: 'JavaScript',
      description: 'Asynchronous programming and DOM manipulation',
      icon: 'fab fa-js'
    },
    {
      title: 'Git',
      description: 'Experience with version control and branching using GitHub',
      icon: 'fab fa-git-alt'
    },
    {
      title: 'Angular Material',
      description: 'Proficient in implementing UI components, theming, and form control',
      icon: 'fas fa-palette'
    },
    {
      title: 'Bootstrap',
      description: 'Proficient in responsive design and UI customization',
      icon: 'fab fa-bootstrap'
    },
    {
      title: 'Node.js & .NET',
      description: 'Experienced in building RESTful APIs, handling authentication, and integrating databases',
      icon: 'fas fa-server'
    }
  ];
}


