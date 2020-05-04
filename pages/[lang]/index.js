import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Header from "../../components/Header";
import { fetchExerciseGroups } from "../../api/exercises_groups";
import ExercisesGroups from "../../components/ExercisesGroups";
import Link from "next/link";
import { fetchCollections } from "../../api/collections";
import Collections from "../../components/Collections";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";

function MainPage({ groupData, collectionData }) {
  const router = useRouter();
  const { lang } = router.query;
  if (router.isFallback) {
    return (
      <>
        <Header />
        <br />
        <Loading />
      </>
    );
  }
  const { query } = useRouter();
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
            <Link href="/[lang]/trainers" as={`/${lang}/trainers`}>
              <a className="mt-4 mb-4 btn btn-outline-dark btn-block">
                Онлайн сопровождение
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}
export async function getStaticProps({ params }) {
  const { lang } = params;
  const groupData = await fetchExerciseGroups({ lang });
  const collectionData = await fetchCollections({ lang });
  return { revalidate: 1, props: { groupData, collectionData } };
}
