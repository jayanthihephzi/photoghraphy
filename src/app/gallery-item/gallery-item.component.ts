import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.css']
})
export class GalleryItemComponent {
  @Input() image!: { src: string; alt: string; title: string; subtitle?: string };

  hover = false;
}
