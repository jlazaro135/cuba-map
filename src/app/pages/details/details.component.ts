import { Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild, computed, inject } from '@angular/core';
import { PopupService } from '../../services/popup.service';
import { LangService } from '../../services/lang.service';
import { CustomGalleryComponent } from '../../components/galllery/gallery.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'details-view',
  standalone: true,
  imports: [CustomGalleryComponent, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Output() close = new EventEmitter<void>();

  @ViewChild('content') contentElement!: ElementRef;
  @ViewChild('title') titleElement!: ElementRef;

  public popupContentService = inject(PopupService)
  public langService = inject(LangService)

  public photoTitle = computed(() => this.popupContentService.popupContent?.title[this.langService.lang()])
  public description = computed(() => this.popupContentService.popupContent?.description?.[this.langService.lang()])
  public imgUrl = computed(() => this.popupContentService.popupContent?.imgUrl)
  public alt = computed(() => this.popupContentService.popupContent?.alt)

  constructor(private renderer: Renderer2){}

  closePopup(): void {
    this.close.emit();
  }

  ngOnInit() {}

  isDesktop(){
    return window.screen.width > 1200
  }

}
