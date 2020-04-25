import React from "react";
import Link from "next/link";
import getGenderName from "../utils/getGenderName";

const Collections = ({ list }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h5 className="text-muted mb-4">Пакеты тренировок</h5>
          <div className="card-columns">
            {list.map(({ title_ru, desc_ru, gender, id }) => (
              <div key={id} className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {title_ru} для {getGenderName(gender)}
                  </h5>
                  <p className="card-text">{desc_ru}</p>
                  <Link href="/collections/[pid]" as={`/collections/${id}`}>
                    <a href="#" className="btn btn-primary">
                      Открыть список
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
