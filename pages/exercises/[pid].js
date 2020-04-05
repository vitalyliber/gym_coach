import useSWR from "swr";
import Header from "../../components/Header";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { fetchExercise } from "../../api/exercises";
import Card from "../../components/Card";

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
              <div className="col">
                <h3 className="mb-3">Упражнение</h3>
              </div>
            </div>
          </div>
          <Card {...data} />
        </>
      )}
    </div>
  );
}

export default Packages;

Packages.getInitialProps = async ({ query }) => {
  return { query };
};
