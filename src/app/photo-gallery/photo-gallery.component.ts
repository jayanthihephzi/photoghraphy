import { Component } from '@angular/core';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent {
  categories = ['All', 'Nature', 'People', 'Events']; // Use your own categories
  selectedCategory = 'All';

galleryItems = [
  { id: 1, src: 'assets/images/gallery/image1.jpg', alt: 'Walk in the Forest', title: 'Walk in the Forest', category: 'Nature' },
  { id: 2, src: 'assets/images/gallery/image2.jpg', alt: 'In Action', title: 'In Action', category: 'People' },
  { id: 3, src: 'assets/images/gallery/image3.jpg', alt: 'Sunset', title: 'Sunset', category: 'Nature' },
  { id: 4, src: 'assets/images/gallery/image4.jpg', alt: 'On Location', title: 'On Location', category: 'Events' },
  { id: 5, src: 'assets/images/gallery/image5.jpg', alt: 'Portrait', title: 'Portrait', category: 'People' },
  { id: 6, src: 'assets/images/gallery/image6.jpg', alt: 'Golden Hour', title: 'Golden Hour', category: 'Nature' }
];

  get filteredGalleryItems() {
    if (this.selectedCategory === 'All') {
      return this.galleryItems;
    }
    return this.galleryItems.filter(i => i.category === this.selectedCategory);
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
  }
}
