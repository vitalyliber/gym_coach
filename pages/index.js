import { useEffect } from "react";
import Cookies from "js-cookie";
import useSWR from "swr";
import Header from "../components/Header";
import ExercisesPackages from "../components/ExercisesPackages";
import { fetchExercisePackages } from "../api/exercises_packages";
import { fetchExerciseGroups } from "../api/exercises_groups";
import ExercisesGroups from "../components/ExercisesGroups";
import Link from "next/link";
import Error from "../components/Error";
import Loading from "../components/Loading";

function HomePage({ query }) {
  const { data: packagesData, error: packagesError } = useSWR(
    "/api/packages/all",
    fetchExercisePackages
  );
  const { data: groupData, error: groupError } = useSWR(
    "/api/groups/all",
    fetchExerciseGroups
  );
  const { secret_token } = query;
  useEffect(() => {
    if (process.browser && secret_token) {
      Cookies.set("secret_token", secret_token, { expires: 365 * 3 });
      window.history.pushState({}, document.title, "/");
    }
  }, []);

  if (packagesError || groupError) return <Error />;

  return (
    <div>
      <Header secret_token={secret_token} />
      <br />
      {!groupData || !packagesData ? (
        <Loading />
      ) : (
        <>
          <ExercisesPackages exercisePackages={packagesData} />
          <ExercisesGroups exerciseGroups={groupData} />
        </>
      )}
      <div className="container">
        <div className="row">
          <div className="col">
            <Link href="/trainers" as={"/trainers"}>
              <a className="mt-4 mb-4 btn btn-info btn-block">
                Онлайн сопровождение
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

HomePage.getInitialProps = async ({ query }) => {
  return { query };
};
