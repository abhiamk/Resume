import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  windowScrolled: boolean | undefined;
  @ViewChild('scrollContainer')
  scrollContainer!: ElementRef;

  constructor(@Inject(DOCUMENT) private document: Document) { }
  ngOnInit() {
    AOS.init({
      duration: 1200,  // Animation duration
      once: true,      // Whether animation should happen only once while scrolling
      offset: 200,     // Offset (in pixels) from the original trigger point
    });
  }

  onWindowScroll() {
    window.scrollTo(0, 0)
  }

}
