import React from "react";
import "./App.css";
import AllMovies from "./components/movies/AllMovies";
import { Navigate, Route, Routes } from "react-router-dom";
import ItemDetail from "./components/movie/ItemDetail";
import AllCharacters from "./components/characters/AllCharacters";
import AllReview from "./components/reviews/AllReview";

function App() {
  return (
  
      <Routes>
        <Route path="/" element={<Navigate to="/movies" />} />
        <Route
          path="/movies"
          element={<AllMovies  isAbsolute={false} />}
        />
         <Route path="/movie/:id/cast" element={<AllCharacters />}/>
         <Route path="/movie/:id/all-reviews" element={<AllReview/>}/>
        <Route path="/movie/:id" element={<ItemDetail />} />
      </Routes>
 
  );
}

export default App;
