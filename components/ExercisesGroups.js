import React, { useMemo } from "react";
import Link from "next/link";
import CustomControlledCarousel from "./CustomControlledCarousel";
import { useRouter } from "next/router";
import I18n from "../utils/i18n";

const ExercisesGroups = ({ exerciseGroups }) => {
  const router = useRouter();
  const { lang } = router.query;
  const i18n = useMemo(() => I18n({ force: true, lang: lang }), []);
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
              <div
                key={el.id}
                className="col-6 col-sm-6 col-md-4 col-lg-3 mb-3"
              >
                <div className="card">
                  {el.image && <CustomControlledCarousel items={[el.image]} />}
                  <div className="card-body">
                    <h5 className="card-title">{el.title}</h5>
                    <Link
                      href="/[lang]/exercises_group/[pid]"
                      as={`/${lang}/exercises_group/${el.id}`}
                    >
                      <a className="btn-block btn btn-sm btn-outline-secondary stretched-link">
                        {i18n.t("open")}
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

export default ExercisesGroups;
