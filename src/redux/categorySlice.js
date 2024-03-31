import { createSlice } from "@reduxjs/toolkit"

const categorySlice = createSlice({
  name: "categorySlice",
  initialState: {
    categories: [],
  },
  reducers: {
    addNews: (state, action) => {
      // In this slice we can store all the news according to categories which are stored in database
      state.categories = action.payload;
    },
  },
});

export default categorySlice.reducer;

export const { addNews } = categorySlice.actions;
