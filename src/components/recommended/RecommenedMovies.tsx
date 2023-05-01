import { isAbsolute } from 'path'
import React from 'react'
import MovieList from '../movie/MovieList'
import { IBoolean } from '../Trending/TrendinMovies'

const RecommenedMovies = ({isAbsolute,movies}:IBoolean) => {
  return (
    <MovieList movies={movies} isAbsolute={isAbsolute}/>
  )
}

export default RecommenedMovies