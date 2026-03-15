import React from "react";
import MovieItem from "./MovieItem";

function MovieList({ movies, deleteMovie }) {

return (
  <div>

    {movies.map((movie) => (
      <MovieItem
        key={movie.id}
        movie={movie}
        deleteMovie={deleteMovie}
      />
    ))}

  </div>
);

}

export default MovieList;