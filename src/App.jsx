import React, { useState } from "react";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {

const [movies, setMovies] = useState([
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "Interstellar", year: 2014 },
  { id: 3, title: "Avengers Endgame", year: 2019 }
]);

const [newMovie, setNewMovie] = useState("");

const addMovie = () => {
  if(newMovie.trim() === "") return;

  const movie = {
    id: Date.now(),
    title: newMovie,
  };

  setMovies([...movies, movie]);
  setNewMovie("");
};

const deleteMovie = (id) => {
  setMovies(movies.filter(movie => movie.id !== id));
};

return (
  <div className="app">
    <h1>Movie List</h1>

    <input
      type="text"
      placeholder="Add movie..."
      value={newMovie}
      onChange={(e) => setNewMovie(e.target.value)}
    />

    <button onClick={addMovie}>Add Movie</button>

    <MovieList movies={movies} deleteMovie={deleteMovie} />
  </div>
);

}

export default App;