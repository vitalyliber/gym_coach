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
        <title>VirtualGym</title>
        <meta name="Description" content="The best gym exercises to do at home" />
        <link rel="shortcut icon" type="image/x-icon" href="https://gym.casply.com/favicon.ico" />
        <link rel="apple-touch-icon" type="image/png" href="https://gym.casply.com/favicon.png" />
        <meta name="twitter:title" content="VirtualGym" />
        <meta
          name="twitter:description"
          content="The best gym exercises to do at home"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://ahegao.casply.com/twitter-card.jpg" />
      </Head>


      <nav className="navbar navbar-light bg-light">
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
