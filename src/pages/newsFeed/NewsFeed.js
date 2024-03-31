import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NewsFeed.scss";
import { useNavigate } from "react-router-dom";

function NewsFeed() {

  const [news, setNews] = useState([]);
  const navigate = useNavigate();

  // function to fetch news
  async function fetch() {
    const res = await axios.get(
      "https://newsapi.org/v2/everything?q=bitcoin&apiKey=767b05107fa142acb2b2e64a6a30ae68"
    );
    setNews([...res.data.articles]);
  }

  // calls the fetch function on page load
  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <div className="news-feed">
        {news.map((data, idx) => (
          // navigate to description page to show news in description
          <div key={idx} onClick={() => navigate(`/newsDesc/${idx}`)}>
            <h2>{data?.title}</h2>
            <div className="img-container">
              <img src={data?.urlToImage} alt={data?.id} id="img" />
            </div>
            <p>{data?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsFeed;
