import { useRouter } from "next/router";
import Header from "../../../components/Header";
import Loading from "../../../components/Loading";
import { fetchExercisePackages } from "../../../api/exercises_packages";
import ExercisesPackages from "../../../components/ExercisesPackages";
import { fetchCollection } from "../../../api/collections";
import React, { useMemo } from "react";
import Head from "next/head";
import Footer from "../../../components/Footer";

function ExercisesGroup({ data, collectionData }) {
  const router = useRouter();
  const {
    collection: { title_ru, gender, desc_ru }
  } = collectionData || { collection: {} };
  const seoTitle = useMemo(() => {
    return `(${(title_ru || "").toLowerCase()})`;
  }, []);
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
            <p className="text-black-50 mb-3">{desc_ru}</p>
          </div>
        </div>
      </div>
      <ExercisesPackages exercisePackages={data} />
      <Footer />
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
  const { pid, lang } = params;
  const data = await fetchExercisePackages({ collection_id: pid, lang });
  const collectionData = await fetchCollection({ id: pid, lang });
  return { revalidate: 1, props: { data, collectionData } };
}
