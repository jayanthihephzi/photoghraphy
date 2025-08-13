import { Component } from '@angular/core';

@Component({
  selector: 'app-video-portfolio',
  templateUrl: './video-portfolio.component.html',
  styleUrls: ['./video-portfolio.component.css']
})
export class VideoPortfolioComponent {
  videos = [
    {
      url: 'https://www.youtube.com/embed/VIDEO_ID1',
      title: 'Wedding Highlights Edit',
      description: 'A compelling highlight reel for a wedding ceremony.'
    },
    {
      url: 'https://www.youtube.com/embed/VIDEO_ID2',
      title: 'Travel Documentary Snippet',
      description: 'A short clip showcasing cinematic travel footage.'
    }
  ];
}
