import React, { useEffect, useState } from "react";
import axiosInstence from "../instance";
import { img_url } from "../Api";
import "./Banner.css";

const Banner = ({ fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     let random = Math.floor(Math.random() * 19);
  //     // console.log(random);
  //     setCount(random);
      
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, []);

  const fetchData = async () => {
    const result = await axiosInstence.get(fetchUrl);
    // console.log(result.data.results);
    setMovies(result.data.results[count]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="banner">
      {movies && (
        <div className="img-container">
          <img
            src={img_url + movies?.backdrop_path}
            alt={movies?.title || "Movie Banner"}
          />
          <div className="movie-details">
            <h2>{movies?.title}</h2>
            <button className="btn">
              Play<i className="fa-solid fa-play"></i>
            </button>{" "}
            <button className="btn btn-outline">Read more <i className="fa-solid fa-caret-down"></i></button>
            <p>{movies?.overview?.slice(0,188)}...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
