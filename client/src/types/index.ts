export interface Article {
  url: string;
  title: string;
  abstract: string;
  media: Media[];
}

export interface Media {
  type: string;
  caption: string;
  'media-metadata': MediaMeta[];
}

export interface MediaMeta {
  url: string;
  height: number;
  width: number;
}

export interface SearchItem {
  abstract: string;
  snippet: string;
  web_url: string;
  lead_paragraph: string;
}