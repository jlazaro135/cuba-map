import { Component, OnInit } from '@angular/core';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';

@Component({
  selector: 'custom-gallery',
  template: ` <gallery [items]="images" thumbPosition="bottom" style="height: 100%;"></gallery> `,
  standalone: true,
  imports: [GalleryModule],
})
export class CustomGalleryComponent implements OnInit {
  images!: GalleryItem[];

  ngOnInit() {
    // Set items array
    this.images = [
      new ImageItem({
        src: 'assets/pictures/ancoa.webp',
        thumb: 'assets/pictures/ancoa.webp',
      }),
      new ImageItem({
        src: 'assets/pictures/cayo.webp',
        thumb: 'assets/pictures/cayo.webp',
      }),
      new ImageItem({
        src: 'assets/pictures/cementerio.webp',
        thumb: 'assets/pictures/cementerio.webp',
      }),
      new ImageItem({
        src: 'assets/pictures/cienfuegos.webp',
        thumb: 'assets/pictures/cienfuegos.webp',
      }),
    ];
  }
}
