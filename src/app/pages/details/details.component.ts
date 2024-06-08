import { Component, ElementRef, EventEmitter, Output, ViewChild, computed, inject } from '@angular/core';
import { PopupService } from '../../services/popup.service';
import { LangService } from '../../services/lang.service';
import { CustomGalleryComponent } from '../../components/galllery/gallery.component';

@Component({
  selector: 'details-view',
  standalone: true,
  imports: [CustomGalleryComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Output() close = new EventEmitter<void>();

  @ViewChild('content') contentElement!: ElementRef;
  @ViewChild('title') titleElement!: ElementRef;

  descriptionHeight: string = '0';

  private currentOrientation: number;

  public popupContentService = inject(PopupService)
  public langService = inject(LangService)

  public photoTitle = computed(() => this.popupContentService.popupContent?.title[this.langService.lang()])
  public description = computed(() => this.popupContentService.popupContent?.description?.[this.langService.lang()])
  public imgUrl = computed(() => this.popupContentService.popupContent?.imgUrl)
  public alt = computed(() => this.popupContentService.popupContent?.alt)

  constructor(){
    this.currentOrientation = window.screen.orientation.angle;
    this.onOrientationChange = this.onOrientationChange.bind(this);
  }

  closePopup(): void {
    this.close.emit();
  }

  ngOnInit() {
    // Add event listener when component initializes
    window.addEventListener('orientationchange', this.onOrientationChange);
    console.log(this.description())
  }

  ngOnDestroy() {
    // Remove event listener when component is destroyed to prevent memory leaks
    window.removeEventListener('orientationchange', this.onOrientationChange);
  }

  onOrientationChange(event?: Event) {
    const orientation = window.screen.orientation.angle;
    console.log(`New orientation: ${orientation}`);
    if (orientation === 0 || orientation === 180) {
      console.log('Portrait mode');
      setTimeout(() => this.setDescriptionHeight(), 100)
    } else if (orientation === 90 || orientation === -90) {
      console.log('Landscape mode');
      setTimeout(() => this.setDescriptionHeight(), 100)
    }
  }

  setDescriptionHeight() {
    const content = this.contentElement.nativeElement;
    const contentHeight = content.getBoundingClientRect().height;

    const title = this.titleElement.nativeElement;
    const titleHeight = title.getBoundingClientRect().height;
    console.log(contentHeight, titleHeight)

    this.descriptionHeight = contentHeight - titleHeight - 24 +'px'
  }

  isDesktop(){
    return window.screen.width > 1200
  }
}
