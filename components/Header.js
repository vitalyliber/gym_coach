import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Cookies from "js-cookie";
import { vkAuthEndpoint } from "../api/enpoint";
import colors from "../utils/colors";
import { useRouter } from "next/router";
import I18n from "../utils/i18n";

const Header = ({ secret_token, showAuthBtn = true }) => {
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();
  const { lang } = router.query;
  const i18n = useMemo(() => I18n({ force: true, lang: lang }), []);

  useEffect(() => {
    if (process.browser && (Cookies.get("secret_token") || secret_token)) {
      setAuthorized(true);
    }
  }, [secret_token]);
  return (
    <>
      <Head>
        <title>VirtualGym</title>
        <meta
          name="Description"
          content="The best gym exercises to do at home"
        />
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
        <meta name="twitter:title" content="VirtualGym" />
        <meta
          name="twitter:description"
          content="The best gym exercises to do at home"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://gym.casply.com/twitter-card.jpg"
        />
      </Head>

      <nav className="navbar navbar-light bg-dark">
        <div className="container justify-content-between">
          <Link href={`/${lang ? "[lang]" : ""}`} as={`/${lang || ""}`}>
            <a className="navbar-brand text-white">
              <span>Virtual</span>Gym
            </a>
          </Link>
          {showAuthBtn && (
            <>
              {authorized ? (
                <a
                  className="text-white"
                  style={{ cursor: "pointer" }}
                  onClick={e => {
                    e.preventDefault();
                    Cookies.remove("secret_token");
                    setAuthorized(false);
                  }}
                >
                  {i18n.t("logout")}
                </a>
              ) : (
                <a
                  href={vkAuthEndpoint}
                  style={{ cursor: "pointer" }}
                  className="text-white"
                >
                  {i18n.t("login")}
                </a>
              )}
            </>
          )}
        </div>
      </nav>
      <style jsx>{`
        span {
          color: ${colors.main};
        }
      `}</style>
    </>
  );
};

export default Header;
