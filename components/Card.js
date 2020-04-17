import React from "react";
import Link from "next/link";
import CustomControlledCarousel from "./CustomControlledCarousel";

function Card({ images, title, group, id }) {
  return (
    <>
      <div className="card m-2 mb-3 m-sm-0 mb-sm-3">
        <CustomControlledCarousel items={images}/>
        <div className="card-body">
          <h3>{title}</h3>
          <span className="badge badge-success mb-3">{group.title}</span>
          <Link href="/exercises/[pid]" as={`/exercises/${id}`}>
            <a className="btn-block btn btn-sm btn-light mt-3">Подробнее</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
