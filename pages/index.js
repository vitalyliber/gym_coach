import { fetchExercises } from "../api/exercises";
import Header from "../components/Header";
import ExercisesList from "../components/ExercisesList";
import TrainerInfo from "../components/TrainerInfo";

function HomePage({ exercises }) {
  return (
    <div>
      <Header />
      <br />
      <h1 className="text-center">Виртуальный тренер</h1>
      <h5 className="text-center text-black-50">
        Автоматический подбор тренировок
      </h5>
      <br />
      <ExercisesList exercises={exercises.exercises.list} />
      <TrainerInfo />
    </div>
  );
}

export default HomePage;

HomePage.getInitialProps = async () => {
  let exercises = [];
  try {
    exercises = await fetchExercises();
  } catch (e) {
    console.log(e.response);
  }

  return { exercises };
};
