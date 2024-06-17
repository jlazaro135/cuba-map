import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LangService {
  public lang = signal('en')
  public isSet: boolean = false;

  setLanguageFromBrowser() {
    if(this.isSet)return
    let browserLang = navigator.language || navigator.languages[0];

    if(browserLang !== 'es')browserLang = 'en'
    this.lang.set(browserLang);
    this.isSet = true;
  }

}
