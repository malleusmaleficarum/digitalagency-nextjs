import Link from "next/link";
import React from "react";
import styles from "./Newsletter.module.scss";

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
      <p>Dont hesitate to contact us if you have any question.</p>
      <form className={styles.input}>
        <Link href='/contact'>
          <button>Contact us</button>
        </Link>
      </form>
    </div>
  );
};

export default Newsletter;
