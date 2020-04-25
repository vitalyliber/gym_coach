import { useRouter } from "next/router";
import Header from "../../components/Header";
import { fetchExercise } from "../../api/exercises";
import CustomControlledCarousel from "../../components/CustomControlledCarousel";
import React from "react";
import Loading from "../../components/Loading";

function Packages({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <>
        <Header />
        <Loading />
      </>
    );
  }
  return (
    <div>
      <Header />
      <br />
      <div className="container">
        <div className="row">
          <div className="col d-lg-flex justify-content-lg-center">
            <h3 className="mb-3">{data.title}</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-8">
            <div className="card mb-3">
              <CustomControlledCarousel items={data.images} />
              <div className="card-body">
                <span className="badge badge-success mb-3">
                  {data.group.title}
                </span>
                <p>{data.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Packages;

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}
export async function getStaticProps({ params }) {
  const { pid } = params;
  const data = await fetchExercise({ id: pid });
  return { revalidate: 1, props: { data } };
}
