import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Modal from "@/components/Modal/Modal";
import SingleNews from "@/components/SingleNews/SingleNews";
import React, { useEffect, useState } from "react";

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(
    `https://newsapi.org/v2/everything?q=technology&pageSize=8&apiKey=${process.env.NEXT_PUBLIC_NEWS_API}`
  );
  const data = await res.json();

  return {
    props: {
      news: data.articles[id],
    },
  };
}

const News = ({ news }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    console.log(news);
  }, []);

  useEffect(() => {
    showModal
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");
  }, [showModal]);

  return (
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} />
      <Header showModal={showModal} setShowModal={setShowModal} />
      <SingleNews news={news} />
      <Footer />
    </>
  );
};

export default News;
