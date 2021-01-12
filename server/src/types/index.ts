export interface NewYorkTimesNewsApiResponse extends Response {
  data: {
    results: News[]
  }
}

export interface NewYorkTimesBookListApiResponse extends Response {
  data: {
    results: {
      books: Book[]
    };
  };
}

export interface NewYorkTimesSearchApiResponse extends Response {
  data: {
    response: SearchResults[]
  }
}


//ADD API DATA

export interface News {
  id: number
}

export interface Book {
  id: number
}

export interface SearchResults {
  id: number
}
