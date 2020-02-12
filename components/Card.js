import React from "react";
import { UncontrolledCarousel } from "reactstrap";

function Card({ images, title, desc, exercise_group }) {
  return (
    <div className="col-md-6">
      <div>
        <div className="card mb-3">
          <UncontrolledCarousel
            interval={false}
            autoPlay={false}
            items={images.map(image => ({
              src: `https://imgproxy.casply.com/unsafe/s:700:700/plain/${image.url}`,
              altText: title,
              caption: "",
              header: "",
              key: image.id
            }))}
          />
          <div className="card-body">
            <h3>{title}</h3>
            <span className="badge badge-success ">
              {exercise_group.name_ru}
            </span>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
