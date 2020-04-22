import useSWR from "swr";
import Header from "../../components/Header";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { fetchExercisePackages } from "../../api/exercises_packages";
import ExercisesPackages from "../../components/ExercisesPackages";
import { fetchCollection } from "../../api/collections";
import React from "react";

function ExercisesGroup({ query }) {
  const { pid } = query;

  const { data, error } = useSWR("/api/packages/all", () =>
    fetchExercisePackages({ collection_id: pid })
  );
  const {
    data: collectionData,
    error: collectionError
  } = useSWR("/api/collection", () => fetchCollection({ id: pid }));

  if (error || collectionError) return <Error />;

  console.log(collectionData);
  return (
    <div>
      <Header />
      <br />
      {!data || !collectionData ? (
        <Loading />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default ExercisesGroup;

ExercisesGroup.getInitialProps = async ({ query }) => {
  return { query };
};
