import { useEffect } from "react";
import Cookies from "js-cookie";
import { fetchExercises } from "../api/exercises";
import Header from "../components/Header";
import ExercisesList from "../components/ExercisesList";
import TrainerInfo from "../components/TrainerInfo";
import ExercisesPackages from "../components/ExercisesPackages";
import { fetchExercisePackages } from "../api/exercises_packages";

function HomePage({ exercises, exercisePackages, query }) {
  const { secret_token } = query;
  useEffect(() => {
    if (process.browser && secret_token) {
      Cookies.set("secret_token", secret_token, { expires: 365 * 3 });
      window.history.pushState({}, document.title, "/");
    }
  }, []);

  return (
    <div>
      <Header secret_token={secret_token} />
      <br />
      <h2 className="text-center">Виртуальный тренер</h2>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-black-50 mb-3">Комплексы упражнений</h5>
          </div>
        </div>
      </div>
      <ExercisesPackages exercisePackages={exercisePackages} />
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="text-black-50 mb-3 mt-3">Все упражнения</h5>
          </div>
        </div>
      </div>
      <ExercisesList exercises={exercises.exercises.list} />
      <TrainerInfo />
    </div>
  );
}

export default HomePage;

HomePage.getInitialProps = async ({ query }) => {
  let exercises = [];
  let exercisePackages = [];
  try {
    exercises = await fetchExercises();
    exercisePackages = await fetchExercisePackages();
  } catch (e) {
    console.log(e.response);
  }

  return { exercises, exercisePackages, query };
};
