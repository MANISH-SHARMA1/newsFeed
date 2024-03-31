import React, { useState } from "react";
import "./CreateNews.scss";
import { BsCardImage } from "react-icons/bs";
import { FaPhotoVideo } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addNews } from "../../redux/createNewsSlice";
import { v4 as uuidv4 } from "uuid";

function CreateNews() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const [vdo, setVdo] = useState(null);
  const [mobileView, setMobileView] = useState(false);

  const dispatch = useDispatch();

  // function to handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setImg(fileReader.result);
      }
    };
  };

  // function to handle video change
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    console.log("vdo: ", vdo);
    const fileReader = new FileReader();
    console.log("fileReader", fileReader);
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === fileReader.DONE) {
        setVdo(fileReader.result);
      }
    };
  };

  //function to publish news
  function publish(e) {
    e.preventDefault();

    // create a unique id for every different news
    const id = uuidv4();
    const date = new Date().toLocaleDateString("en-US");

    dispatch(addNews({ id, title, content, category, date }));

    setTitle("");
    setContent("");
    setCategory("");
    setMobileView(false);
  }

  return (
    <>
      {" "}
      <div className="formPage">
        <div className="form-container">
          <div className="form">
            <form onSubmit={publish}>
              <h2>Create News</h2>
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

              <div className="multimedia">
                <div className="label">
                  <label htmlFor="image" id="card">
                    {" "}
                    <BsCardImage />
                  </label>
                  <div>
                    <input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>

                <div className="label">
                  <label htmlFor="video" id="card">
                    <FaPhotoVideo />
                  </label>
                  <div>
                    <input
                      id="video"
                      type="file"
                      accept="video/*"
                      onChange={handleVideoChange}
                    />
                  </div>
                </div>
              </div>

              <button type="submit">Publish</button>
            </form>

            {/* click to show mobile view and hide mobile view */}
            <button onClick={() => setMobileView(!mobileView)}>
              {mobileView ? "Hide Mobile View" : "Show Mobile View"}
            </button>
          </div>
        </div>

        {/* Admin can see mobile view of the news before publishing */}
        {mobileView && (
          <div className="mobile-view-container">
            <div className="mobileView">
              <div className="content">
                <h2>{title}</h2>
                {img && (
                  <div className="img-container">
                    <img className="news-img" src={img} alt="img" />
                  </div>
                )}

                {vdo && (
                  <div className="img-container">
                    <video className="news-img" src={vdo}></video>
                  </div>
                )}

                <p>
                  <span id="category">Category: </span>
                  {category}
                </p>

                <p id="news-content">{content}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default CreateNews;
