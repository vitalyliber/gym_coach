import Header from "../../components/Header";
import ExercisesList from "../../components/ExercisesList";
import { fetchExercisePackage } from "../../api/exercises_packages";

function Packages({ exercises, exercisePackage, query }) {
  return (
    <div>
      <Header />
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <h1>{exercisePackage.title}</h1>
            <p>{exercisePackage.desc}</p>
          </div>
        </div>
      </div>
      <br />
      <ExercisesList exercises={exercises} />
    </div>
  );
}

export default Packages;

Packages.getInitialProps = async ({ query }) => {
  const { pid } = query;
  let exercises = [];
  let exercisePackage = {};
  try {
    const response = await fetchExercisePackage({ id: pid });
    exercises = response.exercises;
    exercisePackage = response.package;
  } catch (e) {
    console.log(e.response);
  }

  return { exercises, exercisePackage, query };
};
