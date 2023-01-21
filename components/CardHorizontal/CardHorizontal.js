import Link from "next/link";
import React from "react";
import Date from "../date";
import styles from "./CardHorizontal.module.scss";

const CardHorizontal = ({ content, index }) => {
  return (
    <div className={styles.cardhorizontal}>
      <img src={content.urlToImage} alt='card horizontal' />
      <div className={styles.info}>
        <div className={styles.content}>
          <Link href={`/news/${index}`}>
            <h1 className={styles.title}>{content.title}</h1>
          </Link>
          <p className={styles.body}>{content.description}</p>
        </div>
        <p className={styles.author}>
          Author: {content.author} | <Date dateString={content.publishedAt} />
        </p>
      </div>
    </div>
  );
};

export default CardHorizontal;
