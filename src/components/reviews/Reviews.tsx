import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { MovieApi } from '../../api/movieApi';
import ReviewItem from './ReviewItem';

const Reviews = () => {
    const { id } = useParams<{ id: string }>();
  const { data: reviewsData } = useQuery({
    queryKey: ["reviews", id],
    queryFn: ({ queryKey }: any) =>
      MovieApi.getReviewsByMovieId(queryKey[1]),
  });
   const results = reviewsData?.results;
   const navigate = useNavigate()
   const handleNavigate = () =>{
    navigate(`/movie/${id}/all-reviews`,{replace:true}); 
   }
  return (
    <div className='flex gap-5 flex-col my-10'>
      <h2 className='text-2xl text-white'>Review</h2>
        {results?.slice(0,2).map((result) =>(
          <ReviewItem result={result}/>
        ))}
        <button onClick={handleNavigate} className='text-white underline'>Read All Review</button>
    </div>
  )
}

export default Reviews