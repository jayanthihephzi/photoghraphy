import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio-showcase',
  templateUrl: './portfolio-showcase.component.html',
  styleUrls: ['./portfolio-showcase.component.css']
})
export class PortfolioShowcaseComponent {
  cards = [
    { img: 'assets/images/featured1.jpeg', title: 'Golden Hour Bliss', badge: '+20 Pages' },
    { img: 'assets/images/featured2.jpeg', title: 'Urban Shadows', badge: null },
    { img: 'assets/images/featured3.jpeg', title: 'Nature’s Embrace', badge: null }
  ];

  openDemo() {
    // Open a modal or route to full demo!
  }

  openScreens() {
    // Open modal/gallery of screenshots.
  }
}
