import React from "react";
import PackageCard from "./PackageCard";

function PackageExercisesList({ exercises }) {
  return (
    <div className="container">
      <div className="row">
        {exercises.map(el => (
          <PackageCard key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
}

export default PackageExercisesList;
