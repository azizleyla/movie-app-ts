import React from 'react'
import Title from '../common/Title'
import MovieItem from '../movie/MovieItem'
import MovieList from '../movie/MovieList'
import SearchInput from '../SearchInput'
import { MdLocalMovies, MdMovie } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";

export type IBoolean={
    isAbsolute:boolean,
    movies?:any,
    movie?:any
}
const AllMovies = ({isAbsolute,movies}:IBoolean) => {
  return (
    <>
      <div className="flex gap-0 md:gap-10">
        <div className="px-2  md:h-[800px] md:w-[120px] w-full fixed md:static bottom-0 z-10 left-0 bg-[#151d2f] flex flex-col  md:items-center justify-between   rounded-xl">
          <ul className="text-white h-[80px] md:h-0 text-3xl group mt-0 md:mt-10 gap-7 flex items-center justify-evenly md:justify-normal md:flex-col flex-row">
            <li className="mb-0 md:mb-7 cursor-pointer">
              <MdMovie className="text-red-500 " />
            </li>
            <li className="cursor-pointer">
              <MdLocalMovies className="text-[#5b698e] hover:text-white" />
            </li>
            <li className="cursor-pointer">
              <SlScreenDesktop className="text-[#5b698e] hover:text-white" />
            </li>
            <li className="cursor-pointer">
              <BsFillBookmarkFill className="text-[#5b698e] hover:text-white" />
            </li>
          </ul>
          <div className="w-12 h-12 mb-10 hidden md:block">
            <img
              className="rounded-full"
              src="https://www.w3schools.com/howto/img_avatar.png"
              alt="avatar"
            />
          </div>
        </div>
        <div className="w-full pb-20">
          <SearchInput />

          <Title text="All Movies" />
          <MovieList movies={movies} isAbsolute={true} />
        </div>
     
      </div>
      
   
  </>
  )
}

export default AllMovies