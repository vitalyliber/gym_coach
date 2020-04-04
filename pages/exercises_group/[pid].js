import useSWR from "swr";
import Header from "../../components/Header";
import ExercisesList from "../../components/ExercisesList";
import { fetchExercises } from "../../api/exercises";
import { fetchExerciseGroup } from "../../api/exercises_groups";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

function ExercisesGroup({ query }) {
  const { pid } = query;
  const {
    data: exerciseGroupData,
    error: exerciseGroupError
  } = useSWR(`/api/exerciseGroup/${pid}`, () =>
    fetchExerciseGroup({ id: pid })
  );
  const {
    data: groupedExercisesData,
    error: groupedExercisesError
  } = useSWR(`/api/groupedExercises/${pid}`, () =>
    fetchExercises({ exercise_group_id: pid })
  );
  if (exerciseGroupError || groupedExercisesError) return <Error />;

  return (
    <div>
      <Header />
      <br />
      {!exerciseGroupData || !groupedExercisesData ? (
        <Loading />
      ) : (
        <>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>{exerciseGroupData.title}</h1>
              </div>
            </div>
          </div>
          <br />
          <ExercisesList exercises={groupedExercisesData.exercises.list} />
        </>
      )}
    </div>
  );
}

export default ExercisesGroup;

ExercisesGroup.getInitialProps = async ({ query }) => {
  return { query };
};
