import Header from "../../components/Header";
import { fetchExercise } from "../../api/exercises";
import CustomControlledCarousel from "../../components/CustomControlledCarousel";
import React from "react";

function Packages({ data }) {
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

export async function getServerSideProps({ query }) {
  const { pid } = query;
  const data = await fetchExercise({ id: pid });
  // Pass data to the page via props
  return { props: { data } };
}
