import Link from "next/link";
import { useEffect } from "react";
import Date from "../date";
import styles from "./Card.module.scss";

const Card = ({ content, index }) => {
  useEffect(() => {
    console.log(content);
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img src={content.urlToImage} alt='News Banner' />

        <Link href={`/news/${index}`}>
          <h1>{content.title}</h1>
        </Link>

        <p className={styles.author}>Author: {content.author}</p>
        <p className={styles.date}>
          <Date dateString={content.publishedAt} />
        </p>
      </div>
    </div>
  );
};

export default Card;
