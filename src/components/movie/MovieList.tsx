import React from "react";
import { IBoolean } from "../movies/AllMovies";
import MovieItem from "./MovieItem";

const MovieList = ({ isAbsolute, movies }: IBoolean) => {
  return (
    <div className="grid">
      {movies?.map((movie: any) => (
        <MovieItem movie={movie} isAbsolute={isAbsolute} />
      ))}
    </div>
  );
};

export default MovieList;
