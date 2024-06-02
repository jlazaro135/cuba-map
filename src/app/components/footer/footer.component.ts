import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { LangService } from '../../services/lang.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  @ViewChild('spanish') spanishElement!: ElementRef;


  public langService = inject(LangService);

  toggleLang(lang: string){
    this.langService.lang.set(lang);
  }

}
