import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  currentSection: string = 'home';
  sections = ['home', 'about', 'portfolio', 'contact'];

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPos = window.scrollY + 150;
    for (const id of this.sections) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
        this.currentSection = id;
        break;
      }
    }
  }
}
