import React from "react";

const Categories = () => {
  const catrgoryList = [
    "Trending",
    "Top Rated",
    "Netflix Originals",
    "Action Movies",
    "Comedy Movies",
    "Documentaries",
    "Horror Movies",
    "Romance Movies",
  ];
  return <div className="category">
    {catrgoryList.map((items)=>{
      <div className="category-items"><h4>{items}</h4></div>
    })}
  </div>;
};

export default Categories;
