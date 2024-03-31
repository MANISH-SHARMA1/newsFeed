import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editNews } from "../../redux/createNewsSlice";
import "./EditNews.scss";

function EditNews() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const params = useParams();
  const dispatch = useDispatch();

  const id = params.newsId;

  const news = useSelector((state) => state.newsReducer.news);
  const curNews = news.find((news) => news.id === params.newsId);

  useEffect(() => {
    setTitle(curNews.title);
    setContent(curNews.content);
    setCategory(curNews.category);
  }, []);

  function update(e) {
    e.preventDefault();
    console.log(title, content, category);
    dispatch(editNews({ id, title, content, category }));
  }

  return (
    <div className="formPage">
      <form onSubmit={update} className="editForm">
        <h2>Edit News</h2>
        <div className="label">
          <label htmlFor="title">Title</label>
          <div>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>

        <div className="label">
          <label htmlFor="content">Content:</label>
          <div>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
        </div>

        <div className="label">
          <label htmlFor="category">Category:</label>
          <div>
            <input
              value={category}
              type="text"
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
        </div>

        <input id="submit" type="submit" value="Update" />
      </form>
    </div>
  );
}

export default EditNews;
