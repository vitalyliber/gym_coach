import useSWR from "swr";
import Header from "../../components/Header";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { fetchExercise } from "../../api/exercises";
import { UncontrolledCarousel } from "reactstrap";

function Packages({ query }) {
  const { pid } = query;
  const { data, error } = useSWR(`/api/exercise/${pid}`, () =>
    fetchExercise({ id: pid })
  );
  if (error) return <Error />;
  return (
    <div>
      <Header />
      <br />
      {!data ? (
        <Loading />
      ) : (
        <>
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
                  <UncontrolledCarousel
                    interval={false}
                    autoPlay={false}
                    items={data.images.map(image => ({
                      src: image.url,
                      altText: data.title,
                      caption: "",
                      header: "",
                      key: image.id
                    }))}
                  />
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
        </>
      )}
    </div>
  );
}

export default Packages;

Packages.getInitialProps = async ({ query }) => {
  return { query };
};
