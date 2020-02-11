import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from "reactstrap";

function Card({ images, title, desc, exercise_group }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };
  const slides = images.map(image => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={image.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img
          src={`https://imgproxy.casply.com/unsafe/s:700:700/plain/${image.url}`}
          className="card-img-top"
          alt={title}
        />
        <CarouselCaption className="text-white" />
      </CarouselItem>
    );
  });
  return (
    <div className="col-md-6">
      <div>
        <div className="card mb-3">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={images}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
          <div className="card-body">
            <h3>{title}</h3>
            <span className="badge badge-success ">
              {exercise_group.name_ru}
            </span>
            <p>{desc}</p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-tag {
          max-width: 100%;
          height: 500px;
          background: black;
        }
      `}</style>
    </div>
  );
}

export default Card;
