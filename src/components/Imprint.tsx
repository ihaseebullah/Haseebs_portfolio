import React from "react";
import { useLanguage } from "../context/language-context";
// import { Link } from "react-router-dom";

const Imprint = () => {
  const { language } = useLanguage();

  return (
    <React.Fragment>
      {language === "DE" ? (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>Impressum</h1>
        </article>
      ) : (
        <article className="flex flex-col gap-6 max-w-[70vw]">
          <h1>Site Notice</h1>
          <p style={{ fontSize: "1.2rem" }}>
            I am using this portfolio template designed by Alpay
            Ceilk.Check out his github repo.
          </p>
        </article>
      )}
    </React.Fragment>
  );
};

export default Imprint;
