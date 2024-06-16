import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import {
  Gallery,
  GalleryComponent,
  GalleryItem,
  ImageItem,
  VideoItem,
} from 'ng-gallery';
import { GallerizeDirective } from 'ng-gallery/lightbox';
import { PopupService } from '../../services/point.service';

@Component({
  selector: 'custom-gallery',
  templateUrl: 'gallery.component.html',
  standalone: true,
  imports: [CommonModule, GalleryComponent, GallerizeDirective],
  styles: [
    `
      gallery {
        width: 100%;
      }
    `,
  ],
})
export class CustomGalleryComponent implements OnInit {
  images: GalleryItem[] = [];
  currentImageIndex = 0;
  signal = signal<'cover' | 'contain'>('contain');
  public popupService = inject(PopupService);

  constructor(public gallery: Gallery) {
    let media = this.popupService.pointContent.galleryData!.media;
    this.images = media.map((m) =>
      m.type === 'img'
        ? new ImageItem({ src: m.src })
        : new VideoItem({ src: m.src, controls: true, mute: true })
    );
  }

  ngOnInit() {
    this.getImageSize(this.currentImageIndex);
  }

  getImageSize(index: number): any {
    const image: any = new Image();
    image.src = this.images[index].data?.src;
    console.log(image.src, index);
    image.onload = () => {
      console.log(image.width, image.height);
      let imageSize: 'cover' | 'contain' =
        image.width > image.height ? 'cover' : 'contain';
      let isLandscape = image.width > image.height;
      let isDesktop = window.innerWidth > 1024;
      if (isLandscape && isDesktop) {
        imageSize = 'cover';
        this.signal.set(imageSize);
        return;
      }
      if (!isLandscape && isDesktop) {
        imageSize = 'contain';
        this.signal.set(imageSize);
        return;
      }
      if (isLandscape && !isDesktop) {
        imageSize = 'contain';
        this.signal.set(imageSize);
        return;
      }
      if (!isLandscape && !isDesktop) {
        imageSize = 'cover';
        this.signal.set(imageSize);
        return;
      }
    };
  }

  public imageSizeComputed = computed(() => this.signal());

  handleChange(event: any) {
    this.currentImageIndex = event.currIndex;
    this.getImageSize(this.currentImageIndex);
  }
}
