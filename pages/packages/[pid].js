import useSWR from "swr";
import Header from "../../components/Header";
import { fetchExercisePackage } from "../../api/exercises_packages";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import PackageExercisesList from "../../components/PackageExercisesList";

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
                <h3>{exercisesData.package.title}</h3>
                <p>{exercisesData.package.desc}</p>
              </div>
            </div>
          </div>
          <PackageExercisesList exercises={exercisesData.exercises} />
        </>
      )}
    </div>
  );
}

export default Packages;

Packages.getInitialProps = async ({ query }) => {
  return { query };
};
