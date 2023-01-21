import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import styles from "./HomeContent.module.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const HomeContent = () => {
  gsap.registerPlugin(ScrollTrigger);
  const homeContRef = useRef(null);
  const homeWrapperRef = useRef(null);
  const homeWrapperRef2 = useRef(null);

  useEffect(() => {
    let animation = gsap.context(() => {
      gsap.from(homeWrapperRef.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: homeWrapperRef.current,
        },
      });
      gsap.from(homeWrapperRef2.current, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
          trigger: homeWrapperRef2.current,
        },
      });
    }, homeContRef); //<- IMPORTANT! Scopes selector text (ROOT ELEMENT)
    return () => animation.revert(); // cleanup
  }, []);

  return (
    <main className={styles.content} ref={homeContRef}>
      {/* title */}
      <div className={styles.title}>
        <p>Our Philosophy</p>
        <h1>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad,
          corporis.
        </h1>
      </div>

      {/* Who we are */}
      <div className={styles.wrapper} ref={homeWrapperRef}>
        <div className={styles.text}>
          <h1>who we are</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            pariatur dignissimos eveniet aliquam et quibusdam deserunt totam,
            ipsa, at quaerat facilis error culpa facere, autem illum voluptatem
            temporibus tempore ratione. Magnam adipisci dolores quis ipsa
            perferendis dolor consequatur iusto enim.
          </p>
          <Link href='/contact'>
            <button>Learn More</button>
          </Link>
        </div>
        <div className={styles.image}>
          <Image
            src='/img/banner-1.jpg'
            width={1080}
            height={1080}
            alt='banner-2'
          />
        </div>
      </div>

      {/* What we do */}
      <div className={styles.wrapper} ref={homeWrapperRef2}>
        <div className={styles.image}>
          <Image
            src='/img/banner-3.jpg'
            width={1080}
            height={1080}
            alt='banner-2'
          />
        </div>
        <div className={styles.text}>
          <h1>what we do</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit
            pariatur dignissimos eveniet aliquam et quibusdam deserunt totam,
            ipsa, at quaerat facilis error culpa facere, autem illum voluptatem
            temporibus tempore ratione. Magnam adipisci dolores quis ipsa
            perferendis dolor consequatur iusto enim.
          </p>
          <Link href='/contact'>
            <button>Learn More</button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default HomeContent;
