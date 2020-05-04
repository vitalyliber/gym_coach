import React, { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import I18n from "../utils/i18n";

const ExercisesPackages = ({ exercisePackages }) => {
  const router = useRouter();
  const { lang } = router.query;
  const i18n = useMemo(() => I18n({ force: true, lang: lang }), []);
  return (
    <>
      <div className="container">
        <div className="row">
          {exercisePackages.map(el => {
            return (
              <div key={el.id} className="col-md-6 mb-3">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{el.title}</h5>
                    {el.exercise_groups.map(group => (
                      <Link
                        href="/[lang]/exercises_group/[pid]"
                        as={`/${lang}/exercises_group/${el.id}`}
                      >
                        <a key={group.id} className="badge badge-info mr-2">
                          {group.title}
                        </a>
                      </Link>
                    ))}
                    <Link
                      href="/[lang]/packages/[pid]"
                      as={`/${lang}/packages/${el.id}`}
                    >
                      <a className="btn btn-primary d-block mt-3 btn-sm">
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

export default ExercisesPackages;
