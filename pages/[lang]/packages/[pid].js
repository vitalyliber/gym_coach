import React, { useMemo } from "react";
import { useRouter } from "next/router";
import Header from "../../../components/Header";
import { fetchExercisePackage } from "../../../api/exercises_packages";
import Loading from "../../../components/Loading";
import PackageExercisesList from "../../../components/PackageExercisesList";
import Head from "next/head";
import Footer from "../../../components/Footer";

function Packages({ exercisesData }) {
  const router = useRouter();
  const {
    package: { title },
    exercises
  } = exercisesData || { package: {}, exercises: [] };
  const desc = useMemo(() => {
    let arrayOfTitles = [];
    exercises.forEach(el => {
      arrayOfTitles = [...arrayOfTitles, el.exercise.title.toLowerCase()];
    });
    const string = arrayOfTitles.join(", ");
    return `Тренировка состоит из: ${string}`;
  }, [exercises, title]);
  const seoTitle = useMemo(() => `Тренировка "${title}"`, [title]);
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
