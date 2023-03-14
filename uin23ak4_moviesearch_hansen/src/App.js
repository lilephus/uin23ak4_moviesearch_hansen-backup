import './styles.css';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [movieData, setMovieData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (searchTerm.length < 3) {
      return;
    }

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=684ca942&s=${searchTerm}`
    );
    const data = await response.json();

    if (data.Search) {
      setMovieData(data.Search);
    } else {
      setMovieData([]);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const renderMovies = () => {
    if (movieData === null) {
      return null;
    }

    if (movieData.length === 0) {
      return <p>No movies found.</p>;
    }

    return movieData.map((movie) => (
      <div key={movie.imdbID}>
        <img src={movie.Poster} alt={movie.Title} />
        <h3>{movie.Title}</h3>
        <p>
          <strong>År:</strong> {movie.Year}
        </p>
        {movie.Price && (
          <p>
            <strong>Price:</strong> {movie.Price}
          </p>
        )}
      </div>
    ));
  };

  return (
    <div className="App">
      <h1>Søk Film</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchTerm} onChange={handleChange} />
        <button type="submit"><i className="fa fa-search" aria-hidden="true"></i></button>

      </form>
      {renderMovies()}
    </div>
  );
}

export default App;
