import { Injectable, signal } from '@angular/core';
import { PopupContent } from '../interfaces/popContent.interface';

@Injectable({
  providedIn: 'root'
})


export class PopupService {

  constructor() { }

  popupContent: PopupContent = {title: {es:'', en:''}, description: {es:'', en:''},alt: '',imgUrl: ''}
}
