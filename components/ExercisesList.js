import React from "react";
import Masonry from "react-masonry-css";
import Card from "./Card";

function ExercisesList({ exercises }) {
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
        {exercises.map(el => (
          <Card key={el.id} {...el} />
        ))}
        </Masonry>
      </div>
    </div>
  );
}

export default ExercisesList;
