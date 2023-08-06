import { createSlice } from '@reduxjs/toolkit';
import { getAllPosts } from './postsOperations';

const initialState = {
  posts: [],
};

const handleFulfilledGetAllPosts = (state, { payload }) => {
    state.posts = payload;
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: builder => {
    builder.addCase(getAllPosts.fulfilled, handleFulfilledGetAllPosts);
  },
});

export const postsReducer = postsSlice.reducer;
