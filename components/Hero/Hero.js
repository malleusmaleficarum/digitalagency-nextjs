import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.scss";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const herocontRef = useRef(null);
  const heroimgRef = useRef(null);

  useEffect(() => {
    let animation = gsap.context(() => {
      gsap.from(herocontRef.current, { opacity: 0, x: -100, duration: 2 });
      gsap.from(heroimgRef.current, { opacity: 0, duration: 3 });
    }, heroRef); //<- IMPORTANT! Scopes selector text (ROOT ELEMENT)
    return () => animation.revert(); // cleanup
  }, []);

  return (
    <div className={styles.hero} ref={heroRef}>
      <div className={styles.content} ref={herocontRef}>
        <h1>
          We help your business <br />
          to grow
          <br />
          In the digital age.
        </h1>
        <Link href='/contact'>
          <button>Learn More</button>
        </Link>
      </div>
      <div className={styles.image} ref={heroimgRef}>
        <Image
          src='/img/background.jpg'
          width={2000}
          height={1000}
          alt='banner-1'
          priority={true}
        />
      </div>
    </div>
  );
};

export default Hero;
