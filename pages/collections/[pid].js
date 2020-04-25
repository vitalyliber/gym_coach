import { useRouter } from "next/router";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { fetchExercisePackages } from "../../api/exercises_packages";
import ExercisesPackages from "../../components/ExercisesPackages";
import { fetchCollection } from "../../api/collections";
import React, { useMemo } from "react";
import Head from "next/head";
import getGenderName from "../../utils/getGenderName";

function ExercisesGroup({ data, collectionData }) {
  const router = useRouter();
  const {
    collection: { title_ru, gender, desc_ru }
  } = collectionData || { collection: {} };
  const title = useMemo(() => {
    return `Тренировки для ${getGenderName(gender)}`;
  }, [title_ru, gender]);
  const seoTitle = useMemo(() => {
    return `${title} (${(title_ru || "").toLowerCase()})`;
  }, [title]);
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
        <meta name="Description" content={desc_ru} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={desc_ru} />
      </Head>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="mb-3">{title_ru}</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-black-50 mb-3">{title}</h5>
          </div>
        </div>
      </div>
      <ExercisesPackages exercisePackages={data} />
    </div>
  );
}

export default ExercisesGroup;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}
export async function getStaticProps({ params }) {
  const { pid } = params;
  const data = await fetchExercisePackages({ collection_id: pid });
  const collectionData = await fetchCollection({ id: pid });
  return { revalidate: 1, props: { data, collectionData } };
}
