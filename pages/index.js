import { useEffect } from "react";
import Cookies from "js-cookie";
import { fetchExercises } from "../api/exercises";
import Header from "../components/Header";
import ExercisesList from "../components/ExercisesList";
import TrainerInfo from "../components/TrainerInfo";

function HomePage({ exercises, query }) {
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

HomePage.getInitialProps = async ({ query }) => {
  let exercises = [];
  try {
    exercises = await fetchExercises();
  } catch (e) {
    console.log(e.response);
  }

  return { exercises, query };
};
