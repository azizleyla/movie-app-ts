import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MovieApi } from "../../api/movieApi";
import { ApiQueryKeys } from "../../constants/api.constants";
import { ICharacters, IDirector, IMovie } from "../../types/types";

const AllCharacters = () => {
    const navigate = useNavigate()
  const { id } = useParams<{ id: string }>();
  const { data: directorsData } = useQuery<IDirector>({
    queryKey: ["directors", id],
    queryFn: ({ queryKey }: any) => MovieApi.getDirectorsByMovieId(queryKey[1]),
  });
  const { data: movieItem } = useQuery<IMovie>({
    queryKey: [ApiQueryKeys.movies, id],
    queryFn: ({ queryKey }) =>
      MovieApi.getMovieById(queryKey[1] as string),
  });
  const handleNavigate = () =>{
    navigate(`/movie/${id}`, { replace: true });
  }

  const castData = directorsData?.cast;
  const crewData = directorsData?.crew;

  return (
    <>
    <div className="bg-[#202060]  text-white p-5 ">
        <div className="container m-auto">
            <div className="flex items-center gap-5">
        <div>
        <img
            className=" h-[90px]  rounded-md"
            src={`https://image.tmdb.org/t/p/w500/${movieItem?.poster_path}`}
            alt=""
          />
            </div> 
 <div className="flex flex-col items-start">
    <h2 className="text-3xl">
              <Link to="" className="font-bold">
                {movieItem?.original_title}
              </Link>
              <span className="font-normal opacity-80">
                {" "}
                ({movieItem?.release_date?.slice(0, 4)})
              </span>
              </h2>
              <button onClick={handleNavigate}>Back to main</button>
              </div>
              </div>
              </div>
      </div>
    <div className="container m-auto">
        <div className="flex flex-col md:flex-row gap-10">
        <div>
      <h1 className="text-white text-2xl my-4">Cast {castData?.length}</h1>
      <div className="flex flex-col gap-5">
        {castData?.map((item:ICharacters) => (
          <div className="text-white gap-2 flex items-center">
            <div>
              <img className="w-16 h-16 object-cover rounded-sm" src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${item.profile_path}`} />
            </div>
            <div className="">
            <p className="font-bold text-md">{item.name}</p>
            <p className="opacity-90 text-sm">{item.character}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div>
      <h1 className="text-white text-2xl my-4">Crew {crewData?.length}</h1>
      <div className="flex flex-col gap-5 text-white">
      {crewData?.map((item:ICharacters) => (
        <>
          <div className="text-white gap-2 flex items-center">
            <div>
              <img className="w-16 h-16 object-cover rounded-sm" src={`https://www.themoviedb.org/t/p/w276_and_h350_face/${item.profile_path}`} />
            </div>
            <div className="">
            <p className="font-bold text-md">{item.name}</p>
            <p className="opacity-90 text-sm">{item.character}</p>
            </div>
          </div>
    
          </>
        ))}
        </div>
      </div>
      </div>
    </div>

    </>
  );
};

export default AllCharacters;
