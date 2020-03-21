import React from "react";
import Link from "next/link";

const ExercisesPackages = ({ exercisePackages }) => {
  return (
    <div className="container">
      <div className="row">
        {exercisePackages.map(el => {
          return (
            <div className="col-md-6 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{el.title}</h5>
                  <p className="card-text">{el.desc}</p>
                  <Link href="/packages/[pid]" as={`/packages/${el.id}`}>
                    <a className="btn btn-primary">
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
  );
};

export default ExercisesPackages;
