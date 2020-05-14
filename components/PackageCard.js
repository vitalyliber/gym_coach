import React, { useMemo } from "react";
import Link from "next/link";
import CustomControlledCarousel from "./CustomControlledCarousel";
import { useRouter } from "next/router";
import I18n from "../utils/i18n";
import colors from "../utils/colors";

function PackageCard({
  exercise: { images, title, id, group },
  repetitions,
  executions,
  weight,
  rest_seconds,
  active_seconds,
  number
}) {
  const router = useRouter();
  const { lang } = router.query;
  const i18n = useMemo(() => I18n({ force: true, lang: lang }), []);
  const formatValue = (label, value) => {
    if ([i18n.t("rest"), i18n.t("active")].includes(label)) {
      if (value > 60) {
        return `${value / 60} мин`;
      }
      return `${value} сек`;
    }
    if (i18n.t("weight") === label) {
      return `${value} кг`;
    }
    return value;
  };
  return (
    <>
      <div className="card m-2 mb-3 m-sm-0 mb-sm-3">
        <CustomControlledCarousel items={images} />
        <div className="card-body position-relative">
          <div className="counter">{number}</div>
          <h4 className="mb-3">{title}</h4>
          <Link
            href="/[lang]/exercises_group/[pid]"
            as={`/${lang}/exercises_group/${group.id}`}
          >
            <a className="badge badge-info mb-3">{group.title}</a>
          </Link>
          {[
            { label: i18n.t("sets"), value: repetitions },
            { label: i18n.t("repetitions"), value: executions },
            { label: i18n.t("weight"), value: weight },
            { label: i18n.t("rest"), value: rest_seconds },
            { label: i18n.t("active"), value: active_seconds }
          ]
            .filter(({ value }) => value > 0)
            .map(({ label, value }) => (
              <div
                key={label}
                className="d-flex justify-content-between border-bottom border-info mb-2"
              >
                <h6 className="mb-1">{label}</h6>
                <h6 className="mb-1 text-muted">{formatValue(label, value)}</h6>
              </div>
            ))}
          <Link href="/[lang]/exercises/[pid]" as={`/${lang}/exercises/${id}`}>
            <a className="btn-block btn btn-sm btn-light mt-3">
              {i18n.t("details")}
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .counter {
          position: absolute;
          top: -20px;
          right: 10px;
          background-color: ${colors.main};
          color: white;
          border-radius: 20px;
          width: 35px;
          height: 35px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: white;
          border-style: solid;
          font-weight: bold;
        }
      `}</style>
    </>
  );
}

export default PackageCard;
