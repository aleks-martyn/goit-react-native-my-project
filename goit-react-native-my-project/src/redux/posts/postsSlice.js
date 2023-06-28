import { createSlice } from '@reduxjs/toolkit';
import { addPost, getAllPosts } from './postsOperations';

const initialState = {
  posts: [],
};

const handleFulfilledGetAllPosts = (state, { payload }) => {
  state.posts = payload;
};

const handleFulfilledAddPost = (state, { payload }) => {
  state.posts = [payload, ...state.posts];
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllPosts.fulfilled, handleFulfilledGetAllPosts)
      .addCase(addPost.fulfilled, handleFulfilledAddPost);
  },
});

export const postsReducer = postsSlice.reducer;