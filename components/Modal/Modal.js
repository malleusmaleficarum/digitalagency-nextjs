import Link from "next/link";
import React from "react";
import styles from "./Modal.module.scss";

const Modal = ({ showModal }) => {
  return (
    <div
      className={styles.modal}
      style={{
        transform: showModal ? "translateX(0)" : "translateX(-100%)",
      }}
    >
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/contact'>About</Link>
        </li>
        <li>
          <Link href='/news'>News</Link>
        </li>
        <li>
          <Link href='/contact'>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default Modal;
