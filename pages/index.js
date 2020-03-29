import { useEffect } from "react";
import Cookies from "js-cookie";
import { fetchExercises } from "../api/exercises";
import Header from "../components/Header";
import ExercisesPackages from "../components/ExercisesPackages";
import { fetchExercisePackages } from "../api/exercises_packages";
import { fetchExerciseGroups } from "../api/exercises_groups";
import ExercisesGroups from "../components/ExercisesGroups";
import Link from "next/link";

function HomePage({ exercisePackages, exerciseGroups, query }) {
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
      <ExercisesPackages exercisePackages={exercisePackages} />
      <ExercisesGroups exerciseGroups={exerciseGroups} />
      <div className="container">
        <div className="row">
          <div className="col">
            <Link href="/trainers" as={"/trainers"}>
              <a className="mt-4 mb-4 btn btn-info btn-block">Онлайн сопровождение</a>
            </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default HomePage;

HomePage.getInitialProps = async ({ query }) => {
  let exercises = [];
  let exercisePackages = [];
  let exerciseGroups = [];
  try {
    exercises = await fetchExercises();
    exercisePackages = await fetchExercisePackages();
    exerciseGroups = await fetchExerciseGroups();
  } catch (e) {
    console.log(e.response);
  }

  return { exercises, exercisePackages, query, exerciseGroups };
};
