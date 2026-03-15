import React from "react";

function MovieItem({ movie, deleteMovie }) {

return (
  <div className="movie-card">

    <h3>{movie.title}</h3>

    <button onClick={() => deleteMovie(movie.id)}>
      Delete
    </button>

  </div>
);

}

export default MovieItem;