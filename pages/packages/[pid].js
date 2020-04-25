import React from "react";
import {useRouter} from "next/router";
import Header from "../../components/Header";
import { fetchExercisePackage } from "../../api/exercises_packages";
import Loading from "../../components/Loading";
import PackageExercisesList from "../../components/PackageExercisesList";

function Packages({ exercisesData }) {
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
            <h3 className="mb-4">{exercisesData.package.title}</h3>
          </div>
        </div>
      </div>
      <PackageExercisesList exercises={exercisesData.exercises} />
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
  const { pid } = params;
  const exercisesData = await fetchExercisePackage({ id: pid });
  return { revalidate: 1, props: { exercisesData } };
}
