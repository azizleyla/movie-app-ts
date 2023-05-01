import React from 'react'
import MovieItem from '../movie/MovieItem'
import MovieList from '../movie/MovieList'

export type IBoolean={
    isAbsolute:boolean,
    movies?:any,
    movie?:any
}
const TrendinMovies = ({isAbsolute,movies}:IBoolean) => {
  return (
    <>
    <MovieList movies={movies} isAbsolute={isAbsolute}/>
   
  </>
  )
}

export default TrendinMovies