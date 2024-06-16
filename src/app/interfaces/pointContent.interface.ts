export interface PointContent {
  alt: string,
  imgUrl: string
  galleryData?: GalleryData
  place?:Lang
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
