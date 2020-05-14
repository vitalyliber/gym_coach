import React from "react";
import PackageCard from "./PackageCard";
import Masonry from "react-masonry-css";

function PackageExercisesList({ exercises }) {
  return (
    <div className="container">
      <div className="row">
        <Masonry
          breakpointCols={{
            default: 3,
            1100: 2,
            700: 2,
            500: 1
          }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {exercises.map((el, index) => (
            <PackageCard key={el.id} {...el} number={index + 1} />
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default PackageExercisesList;
