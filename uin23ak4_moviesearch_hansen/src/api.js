const API_KEY = '684ca942';

export async function searchMovies(title) {
  const response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`);
  const data = await response.json();

  if (data.Search) {
    return data.Search;
  } else {
    return [];
  }
}
