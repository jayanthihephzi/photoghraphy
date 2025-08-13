import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  slides = [
    { img: 'assets/images/slide1.jpg', title: 'Capturing Moments', subtitle: 'Photography that tells stories', buttonText: 'View Portfolio' },
    { img: 'assets/images/slide2.jpg', title: 'Art in Motion', subtitle: 'Visual narratives in every frame', buttonText: 'Explore Work' },
    { img: 'assets/images/slide3.jpg', title: 'Your Story, Beautifully Told', subtitle: 'Cinematic and timeless', buttonText: 'Get in Touch' }
  ];
  currentSlide = 0;

  ngOnInit() {
    setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000);
  }
}
