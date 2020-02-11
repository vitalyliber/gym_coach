import React from "react";
import Card from "./Card";

function ExercisesList({ exercises }) {
  return (
    <div className="container">
      <div className="row">
        {exercises.map(el => (
          <Card key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}

export default ExercisesList;
