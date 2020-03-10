import React from "react";
import { UncontrolledCarousel } from "reactstrap";

function Card({ images, title, desc, group }) {
  return (
    <div className="col-md-6">
      <div>
        <div className="card mb-3">
          <UncontrolledCarousel
            interval={false}
            autoPlay={false}
            items={images.map(image => ({
              src: image.url,
              altText: title,
              caption: "",
              header: "",
              key: image.id
            }))}
          />
          <div className="card-body">
            <h3>{title}</h3>
            <span className="badge badge-success ">
              {group.title}
            </span>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
