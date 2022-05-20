import React from "react";
import "../styles/Insights.scss";

const Insights = ({ company, templates, queries }) => {
  return (
    <section className="Insights">
      <article className="Insights__sections">
        <p className="Insights__sections--num"> {company} </p>
        <p className="Insights__sections--text"> COMPANIES</p>
      </article>
      <article className="Insights__sections">
        <p className="Insights__sections--num"> {templates} </p>
        <p className="Insights__sections--text"> TEMPLATES </p>
      </article>
      <article className="Insights__sections">
        <p className="Insights__sections--num"> {queries} </p>
        <p className="Insights__sections--text"> QUERIES </p>
      </article>
    </section>
  );
};

export default Insights;
