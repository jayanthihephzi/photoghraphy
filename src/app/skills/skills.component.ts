import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills = [
    { name: 'Adobe Premiere Pro', icon: '🎞️' },
    { name: 'Photoshop', icon: '🖌️' },
    { name: 'Final Cut Pro', icon: '✂️' },
    { name: 'Color Grading', icon: '🎨' },
    { name: 'Visual Storytelling', icon: '📽️' }
  ];
}
