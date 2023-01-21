import Link from "next/link";
import styles from "./Header.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useRef, useEffect } from "react";
import MenuIcon from "../../public/menu-icon.svg";

const Header = ({ showModal, setShowModal }) => {
  gsap.registerPlugin(ScrollTrigger);
  const headerRef = useRef(null);

  useEffect(() => {
    let animation = gsap.context(() => {
      gsap.from(headerRef.current, { opacity: 0, duration: 1.5 });
      let tl = gsap.timeline();

      gsap.to(headerRef.current, {
        ease: "power1",
        scrollTrigger: {
          trigger: headerRef.current,
          // markers: true,
          start: "80px 60px",
          onLeaveBack: () =>
            tl
              .to(headerRef.current, {
                backgroundColor: "transparent",
                autoAlpha: 1,
              })
              .to(
                headerRef.current.children[0],
                { color: "#24242a", autoAlpha: 1 },
                "-=1"
              ),
          onEnter: () =>
            tl
              .to(headerRef.current, {
                backgroundColor: "#24242a",
                autoAlpha: 1,
              })
              .to(
                headerRef.current.children[0],
                { color: "white", autoAlpha: 1 },
                "-=1"
              ),
        },
      });
    }, headerRef); //<- IMPORTANT! Scopes selector text (ROOT ELEMENT)
    return () => animation.revert(); // cleanup
  }, [showModal]);

  return (
    <header className={styles.header} ref={headerRef}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href='/' style={{ color: showModal ? "white" : "inherit" }}>
            Digital Agency
          </Link>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href='/contact'>About</Link>
            </li>
            <li>
              <Link href='/news'>News</Link>
            </li>
            <li>
              <Link href='/contact'>Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div
          className={styles.hamburger}
          onClick={() => setShowModal(!showModal)}
          style={{ color: showModal ? "white" : "inherit" }}
        >
          {showModal ? "X" : <MenuIcon />}
        </div>
      </div>
    </header>
  );
};

export default Header;
