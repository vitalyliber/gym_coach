import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Header from "../components/Header";
import { fetchExerciseGroups } from "../api/exercises_groups";
import ExercisesGroups from "../components/ExercisesGroups";
import Link from "next/link";
import { fetchCollections } from "../api/collections";
import Collections from "../components/Collections";

function HomePage({ groupData, collectionData }) {
  const { query } = useRouter();
  console.log(query);
  const { secret_token } = query;
  useEffect(() => {
    if (process.browser && secret_token) {
      Cookies.set("secret_token", secret_token, { expires: 365 * 3 });
      window.history.pushState({}, document.title, "/");
    }
  }, [secret_token]);

  return (
    <div>
      <Header secret_token={secret_token} />
      <br />
      <Collections list={collectionData} />
      <ExercisesGroups exerciseGroups={groupData} />
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

export async function getStaticProps({ params }) {
  const groupData = await fetchExerciseGroups();
  const collectionData = await fetchCollections();
  return { revalidate: 1, props: { groupData, collectionData } };
}
