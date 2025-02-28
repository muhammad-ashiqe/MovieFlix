import React, { useState } from "react";
import { img_url } from "../Api";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const [liked, setliked] = useState(false);
  return (
    <div className="movie-card">
      <img
        src={
          movie?.poster_path
            ? img_url + movie.poster_path
            : "https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie-768x1129.jpg"
        }
        alt="Movie Poster"
        width={200}
      />

      <h4>{movie?.title}</h4>
      <p>released : {movie?.release_date}</p>
      <div className="save-div">
        <p>Rating : {movie?.vote_average} ⭐</p>
        <div className="" onClick={() => setliked(!liked)}>
          {liked ? (
            <i style={{ color: "#05ff05" }} className="fa-solid fa-heart"></i>
          ) : (
            <i className="fa-solid fa-heart"></i>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
