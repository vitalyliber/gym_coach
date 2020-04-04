import useSWR from "swr";
import Header from "../../components/Header";
import ExercisesList from "../../components/ExercisesList";
import { fetchExercisePackage } from "../../api/exercises_packages";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

function Packages({ query }) {
  const { pid } = query;
  const {
    data: exercisesData,
    error: exercisesError
  } = useSWR(`/api/exercisesPackage/${pid}`, () =>
    fetchExercisePackage({ id: pid })
  );
  if (exercisesError) return <Error />;
  return (
    <div>
      <Header />
      <br />
      {!exercisesData ? (
        <Loading />
      ) : (
        <>
          <div className="container">
            <div className="row">
              <div className="col">
                <h1>{exercisesData.package.title}</h1>
                <p>{exercisesData.package.desc}</p>
              </div>
            </div>
          </div>
          <br />
          <ExercisesList exercises={exercisesData.exercises} />
        </>
      )}
    </div>
  );
}

export default Packages;

Packages.getInitialProps = async ({ query }) => {
  return { query };
};
