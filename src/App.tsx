import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

import TrendinMovies from "./components/movies/AllMovies";
import Title from "./components/common/Title";
import SearchInput from "./components/SearchInput";
import RecommenedMovies from "./components/recommended/RecommenedMovies";
import { useQuery } from "@tanstack/react-query";
import { MovieApi } from "./api/movieApi";
import { ApiQueryKeys } from "./constants/api.constants";
import AllMovies from "./components/movies/AllMovies";
import { Navigate, Route, Routes } from "react-router-dom";
import MovieList from "./components/movie/MovieList";
import ItemDetail from "./components/movie/ItemDetail";
//https://image.tmdb.org/t/p/w500/3CxUndGhUcZdt1Zggjdb2HkLLQX.jpg
function App() {
  const [movies, setMovies] = useState();

  const { data } = useQuery({
    queryKey: [ApiQueryKeys.movies],
    queryFn: ({ queryKey }) => MovieApi.getAllMovies(),
  });

  const moviesData = data?.results;

  return (
    <div className="container m-auto mt-10 px-4 md:p-2">
    
      <Routes>
        <Route  path="/" element={<Navigate to="/movies"/>}/>
        <Route path="/movies" element={<AllMovies movies={moviesData} isAbsolute={true}/>}/>
        <Route path="/movie/:id" element={<ItemDetail/>}/>
      </Routes>
    </div>
  );
}

export default App;
