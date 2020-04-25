import { useRouter } from "next/router";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { fetchExercisePackages } from "../../api/exercises_packages";
import ExercisesPackages from "../../components/ExercisesPackages";
import { fetchCollection } from "../../api/collections";
import React from "react";

function ExercisesGroup({ data, collectionData }) {
  const router = useRouter();
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
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <h3 className="mb-3">{collectionData.collection.title_ru}</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-black-50 mb-3">
              Тренировки для{" "}
              {collectionData.collection.gender === "male"
                ? "мужчин"
                : "женщин"}
            </h5>
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
