export const fetchSearchResults = async (
  searchTerm: string,
  searchPage: number
) => {
  const data = await fetch(
    `/search?searchTerm=${searchTerm}&page=${searchPage}`
  );
  const converted = await data.json();
  return converted.docs;
};

export const fetchNews = async (category: string) => {
  const data = await fetch(`/news/${category}`);
  const converted = await data.json();
  return converted;
};

export const fetchBooks = async () => {
  const data = await fetch(`/books`);
  const converted = await data.json();
  return converted;
};
