export interface PopupContent {
  alt: string,
  imgUrl: string,
  title: Lang,
  description?: Lang;
}

interface Lang {
  [key: string]: string;
  en: string,
  es: string,
}
