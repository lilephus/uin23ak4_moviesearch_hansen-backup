import React from 'react';
function Movie(props) {
  const { title, year, genre, director, actors, poster } = props;

  return (
  <div>
  <img src={poster} alt={title} />
  <h3>{title}</h3>
  <p>Year: {year}</p>
  <p>Genre: {genre}</p>
  <p>Director: {director}</p>
  <p>Actors: {actors}</p>
  </div>
  );
  }
  
  export default Movie;
