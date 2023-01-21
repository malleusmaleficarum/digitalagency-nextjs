import Image from "next/image";
import { useEffect } from "react";
import Date from "../date";
import styles from "./Card.module.scss";

const Card = ({ content }) => {
  useEffect(() => {
    console.log(content);
  }, []);

  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <img src={content.urlToImage} alt='News Banner' />

        <h1>{content.title}</h1>
        <p className={styles.author}>Author: {content.author}</p>
        <p className={styles.date}>
          <Date dateString={content.publishedAt} />
        </p>
      </div>
    </div>
  );
};

export default Card;
