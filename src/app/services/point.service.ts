import { Injectable, signal } from '@angular/core';
import { PointContent } from '../interfaces/pointContent.interface';

@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor() {}

  pointContent: PointContent = {
    title: { es: 'Un titulo', en: 'A title' },
    place: { es: 'un lugar', en: 'a place' },
    description: { es: 'Una descripcion', en: ' A description' },
    alt: '',
    imgUrl: '',
  };
}
