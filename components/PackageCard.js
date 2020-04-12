import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import Link from "next/link";

const restSecondsTranslate = "Отдыхаем";
const activeSecondsTranslate = "Выполняем";
const weightTranslate = "Вес";

function PackageCard({
  exercise: { images, title, id, group },
  repetitions,
  executions,
  weight,
  rest_seconds,
  active_seconds
}) {
  const formatValue = (label, value) => {
    if ([restSecondsTranslate, activeSecondsTranslate].includes(label)) {
      if (value > 60) {
        return `${value / 60} мин`;
      }
      return `${value} сек`;
    }
    if (weightTranslate === label) {
      return `${value} кг`
    }
    return value;
  };
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
            <h4 className="mb-3">{title}</h4>
            <span className="badge badge-success mb-3">{group.title}</span>
            {[
              { label: "Подходов", value: repetitions },
              { label: "Повторений", value: executions },
              { label: weightTranslate, value: weight },
              { label: restSecondsTranslate, value: rest_seconds },
              { label: activeSecondsTranslate, value: active_seconds }
            ]
              .filter(({ value }) => value > 0)
              .map(({ label, value }) => (
                <div className="d-flex justify-content-between border-bottom border-info mb-2">
                  <h6 className="mb-1">{label}</h6>
                  <h6 className="mb-1 text-muted">
                    {formatValue(label, value)}
                  </h6>
                </div>
              ))}
            <Link href="/exercises/[pid]" as={`/exercises/${id}`}>
              <a className="btn-block btn btn-sm btn-light mt-3">Подробнее</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;