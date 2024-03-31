import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./NewsDesc.scss"

function NewsDesc() {

  const params = useParams();
  const [news, setNews] = useState([]);

  // fetch the news
  async function fetch() {
    const res = await axios.get(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=767b05107fa142acb2b2e64a6a30ae68"
    );
    setNews([...res.data.articles]);
  }

  // call the fetch function on page load
  useEffect(() => {
    fetch();
  }, []);

  const curNews = news[params.newsId];

  return (
    <div>
      <h2>{curNews?.title}</h2>
      <div className="img-container">
        <img id="img" src={curNews?.urlToImage} alt="img"  />
      </div>
      <p>{curNews?.content}</p>
    </div>
  );
}

export default NewsDesc;
