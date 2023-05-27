import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { ApiQueryKeys } from "../../constants/api.constants";
import { MovieApi } from "../../api/movieApi";
import { useParams } from "react-router-dom";
import moment from "moment";
import { IMoviePart } from "../../types/types";

const CollectionDetail = () => {
  const { id } = useParams<{ id?: string }>();
  const [activeFilterQuery, setActiveFilterQuery] = useState<string>("");
  const [parts, setParts] = useState<IMoviePart[]>([]);
  const { data } = useQuery({
    queryKey: [ApiQueryKeys.movies, id],
    queryFn: ({ queryKey }) =>
      MovieApi.getMovieByCollectionId(queryKey[1] || ""),
  });

  useEffect(() => {
    if (data?.parts) {
      if (activeFilterQuery === "") {
        setParts(data.parts);
      } else {
        const filterMovies = sortMovies(data.parts, activeFilterQuery);
        setParts(filterMovies);
      }
    }
  }, [data, activeFilterQuery]);

  const sortMovies = (movies: IMoviePart[], filter: string) => {
    switch (filter) {
      case "popularity":
        return [...movies].sort(
          (a: IMoviePart, b: IMoviePart) => a.popularity - b.popularity,
        );
      case "rating":
        return [...movies].sort(
          (a: IMoviePart, b: IMoviePart) =>
            a.vote_average - b.vote_average,
        );
      case "date":
        return [...movies].sort(
          (a, b) =>
            new Date(a.release_date).getTime() -
            new Date(b.release_date).getTime(),
        );
      default:
        return movies;
    }
  };
  const handleChange = (filterQuery: string) => {
    setActiveFilterQuery(filterQuery);
  };
  return (
    <div className="container m-auto">
      <section>
        <div className="flex justify-between">
          <h3 className="text-white font-bold text-2xl">3 movies</h3>
          <select
            onChange={(e) => {
              handleChange(e.target.value);
            }}
            placeholder="Sort"
          >
            <option value="">Sort</option>
            <option value="popularity">Popularity</option>
            <option value="rating">Rating</option>
            <option value="date">Release date</option>
          </select>
        </div>
        <div className="my-4">
          {parts?.map((part: IMoviePart) => (
            <div className="text-white mb-10 border-[#999] border-[1px] bg-[#20205e] gap-3 overflow-hidden flex-row flex rounded-md">
              <div className="w-24 h-36 min-w-24">
                <img
                  alt="movieImg"
                  className="w-full h-full"
                  src={`https://image.tmdb.org/t/p/w188_and_h282_bestv2${part?.poster_path}`}
                />
              </div>
              <div className="w-full flex  flex-wrap gap-2 py-3 px-3 flex-col">
                <div>
                  <h2 className="font-bold text-lg">
                    {part?.original_title}
                  </h2>
                  <span className="text-sm text-[#999]">
                    {moment(part?.release_date).format("MMMM D, YYYY")}
                  </span>
                </div>
                <div>
                  <p className="text-sm">{part?.overview}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CollectionDetail;
