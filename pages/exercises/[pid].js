import { useRouter } from "next/router";
import Header from "../../components/Header";
import { fetchExercise } from "../../api/exercises";
import CustomControlledCarousel from "../../components/CustomControlledCarousel";
import React from "react";
import Loading from "../../components/Loading";
import Head from "next/head";

function Packages({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return (
      <>
        <Header />
        <br />
        <Loading />
      </>
    );
  }
  const {
    title,
    desc,
    images,
    group: { title: groupTitle }
  } = data;
  return (
    <div>
      <Header />
      <Head>
        <title>{title}</title>
        <meta name="Description" content={desc} />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="https://gym.casply.com/favicon.ico"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="https://gym.casply.com/favicon.png"
        />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={images[0] && images[0].url} />
      </Head>
      <br />
      <div className="container">
        <div className="row">
          <div className="col d-lg-flex justify-content-lg-center">
            <h3 className="mb-3">{title}</h3>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-sm-12 col-md-12 col-lg-8">
            <div className="card mb-3">
              <CustomControlledCarousel items={images} />
              <div className="card-body">
                <span className="badge badge-success mb-3">{groupTitle}</span>
                <p>{desc}</p>
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
