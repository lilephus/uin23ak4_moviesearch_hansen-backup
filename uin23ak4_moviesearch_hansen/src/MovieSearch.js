import React, { useState } from 'react';
import MovieList from './MovieList';
import { searchMovies } from './api';

function MovieSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    if (searchTerm.length < 3) {
      return;
    }

    const results = await searchMovies(searchTerm);
    setSearchResults(results);
  };

  return (
    <div>
      <input type="text" placeholder="Search for a movie" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      {searchResults.length > 0 ? <MovieList movies={searchResults} /> : (
        <ul>
          <li>Movie 1</li>
          <li>Movie 2</li>
          <li>Movie 3</li>
          <li>Movie 4</li>
          <li>Movie 5</li>
          <li>Movie 6</li>
          <li>Movie 7</li>
          <li>Movie 8</li>
          <li>Movie 9</li>
      <li>Movie 10</li>
    </ul>
  )}
</div>
  );
}
function Search(props) {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Søk for en film..."
          value={props.value}
          onChange={(event) => props.setSearchValue(event.target.value)}
        />
        <button type="submit">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    );
  }

export default MovieSearch;
