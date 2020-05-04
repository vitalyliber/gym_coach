import React, { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import I18n from "../utils/i18n";

const Collections = ({ list }) => {
  const router = useRouter();
  const { lang } = router.query;
  const i18n = useMemo(() => I18n({ force: true, lang: lang }), []);
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h5 className="text-muted mb-4">{i18n.t("workout_programs")}</h5>
          <div className="card-columns">
            {list.map(({ title_ru, desc_ru, id }) => (
              <div key={id} className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    {title_ru}
                  </h5>
                  <p className="card-text">{desc_ru}</p>
                  <Link
                    href="/[lang]/collections/[pid]"
                    as={`/${lang}/collections/${id}`}
                  >
                    <a href="#" className="btn btn-primary">
                      {i18n.t("next")}
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
