import React from "react";
import Link from "next/link";

const ExercisesPackages = ({ exercisePackages }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-black-50 mb-3">Тренировки</h5>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {exercisePackages.map(el => {
            return (
              <div key={el.id} className="col-md-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{el.title}</h5>
                    {el.exercise_groups.map(group => (
                      <span key={group.id} className="badge badge-info mr-2">
                        {group.title}
                      </span>
                    ))}
                    <Link href="/packages/[pid]" as={`/packages/${el.id}`}>
                      <a className="stretched-link btn btn-primary d-block mt-3 btn-sm">
                        Тренироваться
                      </a>
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

export default ExercisesPackages;
