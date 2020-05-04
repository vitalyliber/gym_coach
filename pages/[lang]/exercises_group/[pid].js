import { useRouter } from "next/router";
import Header from "../../../components/Header";
import ExercisesList from "../../../components/ExercisesList";
import { fetchExercises } from "../../../api/exercises";
import { fetchExerciseGroup } from "../../../api/exercises_groups";
import Loading from "../../../components/Loading";
import React from "react";
import Head from "next/head";
import Footer from "../../../components/Footer";

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

  const { title, image } = exerciseGroupData;
  const desc = `Список упражнений для категории ${title}`;

  return (
    <div>
      <Header />
      <Head>
        <title>{title}</title>
        <meta name="Description" content={desc} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:image" content={image.url} />
      </Head>
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
  const exerciseGroupData = await fetchExerciseGroup({ id: pid, lang });
  const groupedExercisesData = await fetchExercises({
    exercise_group_id: pid,
    lang
  });
  return { revalidate: 1, props: { exerciseGroupData, groupedExercisesData } };
}
