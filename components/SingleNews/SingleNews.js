import Image from "next/image";
import React from "react";
import Date from "../date";
import styles from "./SingleNews.module.scss";

const SingleNews = ({ news }) => {
  return (
    <div className={styles.single}>
      <h1 className={styles.title}>{news.title}</h1>
      <p className={styles.info}>
        Author: {news.author} | <Date dateString={news.publishedAt} />
      </p>
      <img src={news.urlToImage} alt='Single News' />
      <p className={styles.content}>
        {news.content} <br />
        <br />{" "}
        <strong style={{ textDecoration: "underline" }}>
          it's truncated from the api
        </strong>
      </p>
      <p className={styles.content}>
        Source: <a href={news.url}>{news.url}</a>
      </p>
    </div>
  );
};

export default SingleNews;
