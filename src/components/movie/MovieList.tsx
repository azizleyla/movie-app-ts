import React from 'react'
import { IBoolean } from '../Trending/TrendinMovies'
import MovieItem from './MovieItem'



const MovieList = ({isAbsolute,movies}:IBoolean) => {
  return (
    <div className='grid'>
      {movies?.map((movie:any) =>(
      <MovieItem movie={movie} isAbsolute={isAbsolute}/>
      ))}
     

    </div>
  )
}

export default MovieList