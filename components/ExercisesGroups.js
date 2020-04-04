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
              <div key={el.id} className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3">
                <div className="card">
                  {el.image && (
                    <img
                      className="card-img-top"
                      src={el.image.url}
                      alt="Card image cap"
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{el.title}</h5>
                    <Link
                      href="/exercises_group/[pid]"
                      as={`/exercises_group/${el.id}`}
                    >
                      <a className="btn-block btn btn-sm btn-outline-secondary stretched-link">Открыть</a>
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
