import React, { useEffect, useState } from "react";
import axiosInstence from "../instance";
import MovieCard from "./MovieCard";
import "./Row.css"

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axiosInstence.get(fetchUrl);
    console.log(response.data.results);
    setMovies(response.data.results);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div>
      <h4>{title}</h4>
      <div className="movie-row"
 
>
  {movies.map((movie, index) => (
    <MovieCard key={index} movie={movie} />
  ))}
</div>

    </div>
  );
};

export default Row;
