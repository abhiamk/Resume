import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  activeRoute = 'Home';
  routeData = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'About' },
    { id: 4, name: 'Experience' },
    { id: 5, name: 'Skills' },
    { id: 6, name: 'Resume' },
    { id: 3, name: 'Education' },
    { id: 7, name: 'Contact' }
  ];

  ngOnInit(): void {
    const isActive = sessionStorage.getItem('active');
    if (isActive) {
      this.activeRoute = isActive;
    }
  }

  routeChange(value: string) {
    this.activeRoute = value;
    sessionStorage.setItem('active', value);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateActiveRouteBasedOnScroll();
  }

  updateActiveRouteBasedOnScroll() {
    for (let item of this.routeData) {
      const section = document.getElementById(item.name);
      if (section) {
        const rect = section.getBoundingClientRect();
        // If the top is in the upper third of the screen
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          if (this.activeRoute !== item.name) {
            this.activeRoute = item.name;
            sessionStorage.setItem('active', item.name);
          }
          break; // Exit loop once the first match is found
        }
      }
    }
  }
}
