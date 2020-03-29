import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Cookies from "js-cookie";
import { vkAuthEndpoint } from "../api/enpoint";

const Header = ({ secret_token }) => {
  const [authorized, setAuthorized] = useState(false);
  useEffect(() => {
    if (process.browser && (Cookies.get("secret_token") || secret_token)) {
      setAuthorized(true);
    }
  }, []);
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        />
        <title>VirtualGym</title>
      </Head>


      <nav className="navbar navbar-light bg-light ">
        <div className="container justify-content-between">
        <Link href="/">
          <a className="navbar-brand">
            <span>Virtual</span>Gym
          </a>
        </Link>

        {authorized ? (
          <a
            style={{ cursor: "pointer" }}
            onClick={e => {
              e.preventDefault();
              Cookies.remove("secret_token");
              setAuthorized(false);
            }}
          >
            Выйти
          </a>
        ) : (
          <a href={vkAuthEndpoint} style={{ cursor: "pointer" }}>
            Войти
          </a>
        )}
        </div>
      </nav>
      <style jsx>{`
        span {
          color: #f74c6a;
        }
      `}</style>
    </>
  );
};

export default Header;
