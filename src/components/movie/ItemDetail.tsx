import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar'
import { Link, useParams } from 'react-router-dom'
import { MovieApi } from '../../api/movieApi'
import { ApiQueryKeys } from '../../constants/api.constants'

const ItemDetail = () => {

    const {id} = useParams()
    const {data} = useQuery({
    queryKey:[ApiQueryKeys.movies,id],
    queryFn: ({queryKey}:any) => MovieApi.getMovieById(queryKey[1])
    })
    const movieItem = data
const tags=movieItem?.genres?.map(item => item.name)
const runtime = `${Math.trunc(movieItem?.runtime / 60)}h ${movieItem?.runtime % 60}m`
console.log(runtime)

  return (
    <div>
<div className='flex flex-col md:flex-row items-center  gap-10'>
<div className=" relative">
        <img
          className=" h-[500px]  rounded-md"
          src={`https://image.tmdb.org/t/p/w500/${movieItem?.poster_path}`}
          alt=""
        />
        </div>
        <div className='mt-3 flex-[2]'>
        <div className='text-white text-2xl '>
            <h2>
            <Link to="" className='font-bold'>{movieItem?.original_title}</Link>
            <span className='font-normal opacity-80'> ({movieItem?.release_date.slice(0,4)})</span>
            </h2>
            </div>
            <div className='flex items-center gap-2'>
            <div className='my-6 w-16 h-16'>
  <CircularProgressbar styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '27px',
    pathColor: `rgba(38, 194, 129, ${movieItem?.vote_average * 10})`,
    // How long animation takes to go from one percentage to another, in seconds
   

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    textColor: '#fff',
    trailColor: '#333',
    backgroundColor: '#21d07a',

  })} value={movieItem?.vote_average*10} text={`${Math.trunc(movieItem?.vote_average*10)}%`} />
</div>
<span className='text-white'>User score</span>
            </div>
      
            
            <div className='flex text-white text-sm gap-[20px]'>
            <span className='text-white'>{movieItem?.release_date} ({movieItem?.original_language.toUpperCase()})</span>
<div className='before:w-1 before:h-1 ml-4 before:rounded-full before:bg-[#ccc] before:absolute relative before:top-[50%] before:-left-[10px]'>
{tags?.map((name, index) => <span>{index > 0 && ', '}{name}</span>)}
</div>
<span className='before:w-1 before:h-1 before:rounded-full before:bg-[#ccc] before:absolute ml-4 before:top-[50%] before:-left-[17px] relative'>{runtime}</span>
</div>
<div className='my-5 text-white'>
<span className='text-white opacity-70 italic mt-5'>{movieItem?.tagline}</span>
<h4 className='mt-3  text-lg'>Overview</h4>
 <p className='text-sm leading-6 text-white opacity-80'>{movieItem?.overview}</p>
</div>



            



</div>
</div>

    </div>
  )
}

export default ItemDetail