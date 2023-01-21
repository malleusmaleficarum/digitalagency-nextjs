import Image from "next/image";
import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.left}>
        <h1 className={styles.title}>Have Some Questions?</h1>
        <p className={styles.subheading}>Our team will handle it.</p>
        <form className={styles.form}>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email' />
          <textarea className={styles.textarea} placeholder='Message' />
          <button className={styles.button}>Submit</button>
        </form>
        <p className={styles.email}>
          Or direct email to our team: admin@test.com
        </p>
      </div>
      <div className={styles.right}>
        <Image src='/img/contact.jpg' width={800} height={500} alt='contact' />
      </div>
    </div>
  );
};

export default Contact;
