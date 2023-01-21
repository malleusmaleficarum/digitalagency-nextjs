import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Modal from "@/components/Modal/Modal";
import News from "@/components/News/News";
import React, { useEffect, useState } from "react";

export async function getServerSideProps() {
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=technology&pageSize=8&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`
  );
  const data = await res.json();

  return {
    props: {
      news: data,
    },
  };
}

const NewsMain = ({ news }) => {
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
      <News content={news.articles} />
      <Footer />
    </>
  );
};

export default NewsMain;
