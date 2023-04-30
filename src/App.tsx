import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import MovieList from "./components/MovieList";

function App() {
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/4/list/1?page=1&api_key=4faf715e4beccd69d65cf8aa0f91cc5a",
      )
      .then((res) => console.log(res.data.results));
  }, []);
  return (
    <div className="App">
      <MovieList />
    </div>
  );
}

export default App;
