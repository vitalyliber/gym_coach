import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Header from "../../../components/Header";
import { fetchExercisePackage } from "../../../api/exercises_packages";
import Loading from "../../../components/Loading";
import PackageExercisesList from "../../../components/PackageExercisesList";
import Head from "next/head";
import Footer from "../../../components/Footer";
import I18n from "../../../utils/i18n";

function Packages({ exercisesData }) {
  const router = useRouter();
  const { lang } = router.query;
  const i18n = useMemo(() => I18n({ force: true, lang: lang }), []);
  const {
    package: { title },
    exercises
  } = exercisesData || { package: {}, exercises: [] };
  const desc = useMemo(() => {
    let arrayOfTitles = [];
    exercises.forEach(el => {
      arrayOfTitles = [
        ...arrayOfTitles,
        (el.exercise.title || "").toLowerCase()
      ];
    });
    const string = arrayOfTitles.join(", ");
    return `${i18n.t("workout_consists_of")} ${string}`;
  }, [exercises, title]);
  const seoTitle = useMemo(() => `${i18n.t("workout")} "${title}"`, [title]);
  if (router.isFallback) {
    return (
      <>
        <Header />
        <br />
        <Loading />
      </>
    );
  }
  return (
    <div>
      <Header />
      <Head>
        <title>{seoTitle}</title>
        <meta name="Description" content={desc} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={desc} />
      </Head>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="mb-4">{title}</h3>
          </div>
        </div>
      </div>
      <PackageExercisesList exercises={exercises} />
      <Footer />
    </div>
  );
}

export default Packages;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}
export async function getStaticProps({ params }) {
  const { pid, lang } = params;
  const exercisesData = await fetchExercisePackage({ id: pid, lang });
  return { revalidate: 1, props: { exercisesData } };
}
