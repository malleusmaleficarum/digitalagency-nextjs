import React from "react";
import CardHorizontal from "../CardHorizontal/CardHorizontal";
import styles from "./News.module.scss";

const News = ({ content }) => {
  return (
    <div className={styles.news}>
      <h1 className={styles.title}>Latest News</h1>
      {content.map((cont, index) => (
        <CardHorizontal content={cont} key={cont.publishedAt} index={index} />
      ))}
    </div>
  );
};

export default News;
