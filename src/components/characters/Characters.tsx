import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { IDirector } from '../../types/types'

const Characters = ({director}:any) => {
  return (
   
   
    <div className='min-w-[140px] w-[140px] shadow-lg rounded-[10px] cursor-pointer'>
      <div>
        <img className='w-full h-full rounded-tl-md rounded-tr-md' src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${director.profile_path}`}/>
      </div>
      <div className='bg-[#151d2f] min-h-[100px] max-h-[150px] text-white  p-3'>
      <p className='font-semibold'>{director?.name}</p>
      <p>{director?.job}</p>
      </div>
    </div>
 
  )
}

export default Characters