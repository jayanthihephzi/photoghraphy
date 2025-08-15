import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

 experiences = [
    {
      position: 'Video Editor & D.O.P',
      company: 'Photriya Studios, Hyderabad',
      duration: '2023 – Present',
      responsibilities: [
        'Shot and edited cinematic videos for weddings, events, and commercials.',
        'Managed color grading, sound design, and post-production workflows.',
        'Operated professional camera and lighting setups for various shoots.',
        'Delivered high-quality content under tight deadlines.'
      ]
    },
    {
      position: 'Freelance Video Editor',
      company: '',
      duration: '',
      responsibilities: [
        'Edited promotional videos for brands in various fields.',
        'Created engaging content for social media platforms like Instagram and YouTube.'
      ]
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
