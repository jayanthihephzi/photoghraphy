import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  name = 'Dayakar Naika';
  profession = 'Video Editor';
  summary = `Highly skilled and creative Video Editor with 1 year of experience crafting compelling visual stories across social media, corporate, and narrative formats. Proficient in Adobe Premiere Pro, After Effects, and DaVinci Resolve, with expertise in storytelling, color correction, sound design, and visual effects. A collaborative team player known for delivering high-quality content under tight deadlines.`;
  location = 'Hyderabad';
  email = 'dayakarnaika@gmail.com';
  phone = '9347094393';
}
