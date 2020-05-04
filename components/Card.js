import React, {useMemo} from "react";
import Link from "next/link";
import CustomControlledCarousel from "./CustomControlledCarousel";
import { useRouter } from "next/router";
import I18n from "../utils/i18n";

function Card({ images, title, group, id }) {
  const router = useRouter();
  const { lang } = router.query;
  const i18n = useMemo(() => I18n({ force: true, lang: lang }), []);
  return (
    <>
      <div className="card m-2 mb-3 m-sm-0 mb-sm-3">
        <CustomControlledCarousel items={images} />
        <div className="card-body">
          <h3>{title}</h3>
          <Link
            href="/[lang]/exercises_group/[pid]"
            as={`/${lang}/exercises_group/${group.id}`}
          >
            <a className="badge badge-info mb-3">{group.title}</a>
          </Link>
          <Link href="/[lang]/exercises/[pid]" as={`/${lang}/exercises/${id}`}>
            <a className="btn-block btn btn-sm btn-light mt-3">{i18n.t('details')}</a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
