import { useEffect, useRef } from "react";
import Card from "../Card/Card";
import styles from "./HomeCards.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const HomeCards = ({ content }) => {
  gsap.registerPlugin(ScrollTrigger);
  const homeCardRef = useRef(null);
  const homeCardWrapperRef = useRef(null);

  useEffect(() => {
    let animation = gsap.context(() => {
      gsap.from(homeCardWrapperRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: homeCardWrapperRef.current,
        },
      });
    }, homeCardRef); //<- IMPORTANT! Scopes selector text (ROOT ELEMENT)
    return () => animation.revert(); // cleanup
  }, []);
  return (
    <div className={styles.homecards} ref={homeCardRef}>
      <h1 className={styles.title}>Company News</h1>
      <div className={styles.wrapper} ref={homeCardWrapperRef}>
        {content.map((cont) => (
          <Card content={cont} key={cont.publishedAt} />
        ))}
      </div>
    </div>
  );
};

export default HomeCards;
