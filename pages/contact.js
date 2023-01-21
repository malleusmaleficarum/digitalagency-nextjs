import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Modal from "@/components/Modal/Modal";
import React, { useEffect, useState } from "react";

const contact = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    showModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [showModal]);

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Header showModal={showModal} setShowModal={setShowModal} />
      <Contact />
      <Footer />
    </>
  );
};

export default contact;
