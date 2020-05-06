import React, { useMemo } from "react";
import I18n from "../utils/i18n";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Link from "next/link";
import Footer from "../components/Footer";

function HomePage({}) {
  const lang = useMemo(() => I18n({}).currentLocale(), []);
  const { query } = useRouter();
  const { secret_token } = query;

  return (
    <div className="mainWrapper">
      <Header secret_token={secret_token} showAuthBtn={false} />
      <br />
      <div className="container wrapper d-flex align-items-center">
        <div className="row">
          <div className="col">
            <div className="jumbotron text-center bg-dark text-white">
              <h1 className="display">
                Hey! Welcome to a world of inspiration for your exercises
              </h1>
              <p className="lead">
                Build muscle, loose weight and get toned with VirtualGym at home
              </p>
              <Link href="/[lang]" as={`/${lang}`}>
                <a
                  className="btn btn-primary btn-lg mt-4"
                  href="#"
                  role="button"
                >
                  Go to website
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style jsx>{`
        .wrapper {
          height: calc(100vh - 152px);
        }
        .mainWrapper {
          background-color: aquamarine;
        }
      `}</style>
    </div>
  );
}

export default HomePage;
