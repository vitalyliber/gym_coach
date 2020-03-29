import Header from "../../components/Header";
import ExercisesList from "../../components/ExercisesList";
import {fetchExercises} from "../../api/exercises";
import {fetchExerciseGroup} from "../../api/exercises_groups";

function ExercisesGroup({ exercises, exerciseGroup }) {
  return (
    <div>
      <Header />
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>{exerciseGroup.title}</h1>
          </div>
        </div>
      </div>
      <br />
      <ExercisesList exercises={exercises} />
    </div>
  );
}

export default ExercisesGroup;

ExercisesGroup.getInitialProps = async ({ query }) => {
  const { pid } = query;
  let exercises = [];
  let exerciseGroup = {};
  try {
    const exerciseGroupResponse = await fetchExerciseGroup({ id: pid });
    const exercisesResponse = await fetchExercises({ exercise_group_id: pid });
    exercises = exercisesResponse.exercises.list;
    exerciseGroup = exerciseGroupResponse;
  } catch (e) {
    console.log(e.response);
  }

  return { exercises, exerciseGroup, query };
};
