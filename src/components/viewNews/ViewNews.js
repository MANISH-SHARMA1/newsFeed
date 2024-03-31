import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./ViewNews.scss";

function ViewNews() {
  const params = useParams();

  const news = useSelector((state) => state.newsReducer.news);
  const curNews = news.find((news) => news.id === params.newsId);

  return (
    <div className="viewNews">
      <h2>{curNews.title}</h2>
      <p>{curNews.content}</p>
    </div>
  );
}

export default ViewNews;
