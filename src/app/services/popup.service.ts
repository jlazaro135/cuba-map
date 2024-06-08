import { Injectable, signal } from '@angular/core';
import { PopupContent } from '../interfaces/popContent.interface';

@Injectable({
  providedIn: 'root'
})


export class PopupService {

  constructor() { }

  popupContent: PopupContent = {title: {es:'Un titulo', en:'A title'}, description: {es:'Una descripcion', en:' A description'},alt: '',imgUrl: ''}
}
