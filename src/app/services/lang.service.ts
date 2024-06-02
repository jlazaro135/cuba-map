import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LangService {
  public lang = signal('en')

  setLanguageFromBrowser() {
    let browserLang = navigator.language || navigator.languages[0];

    if(browserLang !== 'es')browserLang = 'en'
    this.lang.set(browserLang);
  }

}
