import React from "react";
import moment from "moment";
import colors from "../utils/colors";

function Footer() {
  return (
    <footer className="text-muted pb-3 pt-3 bg-dark mt-3">
      <div className="container">
        <p className="mb-0 text-center text-white">
          <span>Virtual</span>Gym, {moment().format("YYYY")}
        </p>
      </div>
      <style jsx>{`
        span {
          color: ${colors.main};
        }
      `}</style>
    </footer>
  );
}

export default Footer;
