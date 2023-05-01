import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { MdLocalMovies, MdMovie } from "react-icons/md";
import { BsFillBookmarkFill } from "react-icons/bs";
import { SlScreenDesktop } from "react-icons/sl";
import TrendinMovies from "./components/movies/AllMovies";
import Title from "./components/common/Title";
import SearchInput from "./components/SearchInput";
import RecommenedMovies from "./components/recommended/RecommenedMovies";
import { useQuery } from "@tanstack/react-query";
import { MovieApi } from "./api/movieApi";
import { ApiQueryKeys } from "./constants/api.constants";
import AllMovies from "./components/movies/AllMovies";
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
          <AllMovies movies={moviesData} isAbsolute={true} />
        </div>
      </div>
    </div>
  );
}

export default App;
