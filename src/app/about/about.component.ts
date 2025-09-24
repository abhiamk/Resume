import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements AfterViewInit {
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  ngAfterViewInit() {
    const options = {
      strings: ['Abhishek', 'Developer'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true
    };

    new Typed(this.typedElement.nativeElement, options);
  }
}
