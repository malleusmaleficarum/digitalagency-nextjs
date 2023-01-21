import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <ul>
          <li>Terms</li>
          <li>Privacy</li>
          <li>Social Media</li>
        </ul>
        <p>Copyright &copy; Digital Media Agency - 2023</p>
      </div>
    </footer>
  );
};

export default Footer;
