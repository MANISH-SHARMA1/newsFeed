import { createSlice } from "@reduxjs/toolkit";

const createNewsSlice = createSlice({
  name: "newsSlice",
  initialState: {
    news: [],
  },
  reducers: {
    addNews: (state, action) => {
      const news = action.payload.attributes;
      const curNews = news
        ? {
            id: news.id,
            title: news.title,
            content: news.content,
            category: news.category,
            date: news.date
          }
        : action.payload;
      state.news.push(curNews);
    },
    editNews: (state, action) => {
      const news = action.payload.attributes;
      const curNews = news
        ? {
            id: news.id,
            title: news.title,
            content: news.content,
            category: news.category,
          }
        : action.payload;

      const idx = state.news.findIndex(
        (newsData) => newsData.id === curNews.id
      );

      if (idx !== -1) {
        state.news[idx] = { ...state.news[idx], ...curNews };
        console.log("DONE");
      }
    },
    deleteNews: (state, action) => {
      const news = action.payload;
      state.news = state.news.filter((newsData) => newsData.id !== news);
    },
  },
});

export default createNewsSlice.reducer;

export const { addNews, editNews, deleteNews } = createNewsSlice.actions;
