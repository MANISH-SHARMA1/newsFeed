import React from "react";
import "./ManageNews.scss";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteNews } from "../../redux/createNewsSlice";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { GrFormView } from "react-icons/gr";

function ManageNews() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const news = useSelector((state) => state.newsReducer.news);

  console.log("Selector News: ", news.length);

  return (
    <>
      <h2>Manage News Feeds</h2>
      <div className="table">
        {news.length == 0 ? (
          <p>No News Available</p>
        ) : (
          <table>
            <thead>
              <tr>
                <td>Title</td>
                <td>Category</td>
                <td>Creation Date</td>
                <td>Status</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {news.map((data) => (
                <tr key={data.id}>
                  <td>{data.title}</td>
                  <td>{data.category}</td>
                  <td>{data.date}</td>
                  <td>Published</td>
                  <td>
                    <button onClick={() => navigate(`/editNews/${data.id}`)}>
                      <MdModeEdit />
                    </button>
                    <button onClick={() => dispatch(deleteNews(data.id))}>
                      <MdDelete />
                    </button>
                    <button onClick={() => navigate(`/viewNews/${data.id}`)}>
                      <GrFormView />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default ManageNews;
