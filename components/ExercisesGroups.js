import React from "react";
import Link from "next/link";

const ExercisesGroups = ({ exerciseGroups }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-black-50 mb-3 mt-3">Категории</h5>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {exerciseGroups.map(el => {
            return (
              <div className="col-md-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{el.title}</h5>
                    <Link href="/exercises_group/[pid]" as={`/exercises_group/${el.id}`}>
                      <a className="btn btn-primary">Открыть</a>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExercisesGroups;
