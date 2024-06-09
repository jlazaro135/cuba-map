export interface PopupContent {
  alt: string,
  imgUrl: string
  galleryData?: GalleryData;
  title: Lang,
  description?: Lang;
}

interface Lang {
  [key: string]: string;
  en: string,
  es: string,
}

interface GalleryData {
  media: Media[],
}

interface Media {
  controls?: boolean,
  src: string,
  type: string,
  mute?: true
}
