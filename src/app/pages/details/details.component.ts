import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  Renderer2,
  ViewChild,
  computed,
  inject,
} from '@angular/core';
import { PopupService } from '../../services/point.service';
import { LangService } from '../../services/lang.service';
import { CustomGalleryComponent } from '../../components/galllery/gallery.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'details-view',
  standalone: true,
  imports: [CustomGalleryComponent, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Output() close = new EventEmitter<void>();

  @ViewChild('content') contentElement!: ElementRef;
  @ViewChild('title') titleElement!: ElementRef;

  public pointContentService = inject(PopupService);
  public langService = inject(LangService);

  public photoTitle = computed(
    () => this.pointContentService.pointContent?.title[this.langService.lang()]
  );
  public place = computed(() => {
    if (!this.pointContentService.pointContent.place) return;
    return this.pointContentService.pointContent.place[this.langService.lang()];
  });
  public description = computed(
    () =>
      this.pointContentService.pointContent?.description?.[
        this.langService.lang()
      ]
  );
  public imgUrl = computed(() => this.pointContentService.pointContent?.imgUrl);
  public alt = computed(() => this.pointContentService.pointContent?.alt);

  constructor() {}

  ngOnInit() {}

  isDesktop() {
    return window.screen.width > 1200;
  }
}
