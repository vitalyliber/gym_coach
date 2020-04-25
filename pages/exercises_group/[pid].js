import { useRouter } from "next/router";
import Header from "../../components/Header";
import ExercisesList from "../../components/ExercisesList";
import { fetchExercises } from "../../api/exercises";
import { fetchExerciseGroup } from "../../api/exercises_groups";
import Loading from "../../components/Loading";
import React from "react";

function ExercisesGroup({ exerciseGroupData, groupedExercisesData }) {
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
            <h1>{exerciseGroupData.title}</h1>
          </div>
        </div>
      </div>
      <br />
      <ExercisesList exercises={groupedExercisesData.exercises.list} />
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
  const exerciseGroupData = await fetchExerciseGroup({ id: pid });
  const groupedExercisesData = await fetchExercises({ exercise_group_id: pid });
  return { revalidate: 1, props: { exerciseGroupData, groupedExercisesData } };
}
