import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
skills = [
  { name: 'Adobe Premiere Pro', icon: '🎞️' },
  { name: 'After Effects', icon: '✨' },
  { name: 'DaVinci Resolve', icon: '🎬' },
  { name: 'CapCut', icon: '✂️' },
  { name: 'Color Correction & Grading', icon: '🎨' },
  { name: 'Sound Design & Sync', icon: '🔊' },
  { name: 'Visual Storytelling', icon: '📽️' },
  { name: 'Cinematic Editing Styles', icon: '🌟' },
  { name: 'Script-to-Screen Workflow', icon: '📝' },
  { name: 'Timeline & Asset Management', icon: '🗂️' },
  { name: 'Lighting & Framing Techniques', icon: '💡' }
];
}
