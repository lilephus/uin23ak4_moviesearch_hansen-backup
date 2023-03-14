import React from 'react';
import Movie from './Movie';

function MovieList(props) {
  const { movies } = props;

  return (
    <div>
      {movies.map(movie => (
        <Movie
          key={movie.imdbID}
          title={movie.Title}
          year={movie.Year}
          genre={movie.Genre}
          director={movie.Director}
          actors={movie.Actors}
          poster={movie.Poster}
        />
      ))}
    </div>
  );
}

export default MovieList;