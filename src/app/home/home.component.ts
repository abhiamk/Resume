import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';
import * as Prism from 'prismjs';
import hljs from 'highlight.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  greeting: string = 'Hi';
  code: string = `
  const coder = {
    name: 'Abhishek M',
    skills: ['Angular','Angular Material', 'React', 'TS&JS', 'Nodejs', 'Express', 
            'MongoDB', 'bootstrap','PrimeNG', 'JSON', 'RESTAPI', 'Git'],
    problemSolver: true,
  };
  `;

  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  ngOnInit() {
    this.setGreeting();
  }

  ngAfterViewInit() {
    // Prism.highlightAll();
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block as HTMLElement);
    });
    const options = {
      strings: [this.greeting],
      typeSpeed: 60,
      // backSpeed: 40,
      backDelay: 3000,
      loop: false
    };

    new Typed(this.typedElement.nativeElement, options);
  }

  setGreeting() {
    const currentHour = new Date().getHours();

    if (currentHour < 12) {
      this.greeting = 'Good Morning';
    } else if (currentHour < 18) {
      this.greeting = 'Good Afternoon';
    } else {
      this.greeting = 'Hi';
    }
  }
}
