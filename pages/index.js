import { useEffect } from "react";
import Cookies from "js-cookie";
import useSWR from "swr";
import Header from "../components/Header";
import { fetchExerciseGroups } from "../api/exercises_groups";
import ExercisesGroups from "../components/ExercisesGroups";
import Link from "next/link";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { fetchCollections } from "../api/collections";
import Collections from "../components/Collections";

function HomePage({ query }) {
  const { data: groupData, error: groupError } = useSWR(
    "/api/groups/all",
    fetchExerciseGroups
  );
  const { data: collectionData, error: collectionError } = useSWR(
    "/api/collections/all",
    fetchCollections
  );
  console.log("collectionData", collectionData);
  const { secret_token } = query;
  useEffect(() => {
    if (process.browser && secret_token) {
      Cookies.set("secret_token", secret_token, { expires: 365 * 3 });
      window.history.pushState({}, document.title, "/");
    }
  }, []);

  if (groupError || collectionError) return <Error />;

  return (
    <div>
      <Header secret_token={secret_token} />
      <br />
      {!groupData || !collectionData ? (
        <Loading />
      ) : (
        <>
          <Collections list={collectionData} />
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
