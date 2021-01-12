export interface Article {
  id: number;
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
  _id: string;
  headline: {main: string};
  abstract: string;
  snippet: string;
  web_url: string;
  lead_paragraph: string;
}

export interface Book {
  rank: number,
  weeks_on_list: number;
  book_image: string;
  title: string;
  description: string;
  author: string;
  primary_isbn10: number;
}