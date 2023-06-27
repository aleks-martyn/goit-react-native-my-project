import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut } from './authOperations';

const initialState = {
  username: null,
  email: null,
  isLoggedIn: false,
};

const handleFulfilledRegister = (state, { payload }) => {
  state.username = payload.displayName;
  state.email = payload.email;
  state.isLoggedIn = true;
};

const handleFulfilledLogIn = (state, { payload }) => {
  state.username = payload.displayName;
  state.email = payload.email;
  state.isLoggedIn = true;
};

const handleFulfilledLogOut = state => {
  state.username = null;
  state.email = null;
  state.isLoggedIn = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, handleFulfilledRegister)
      .addCase(logIn.fulfilled, handleFulfilledLogIn)
      .addCase(logOut.fulfilled, handleFulfilledLogOut);
  },
});

export const authReducer = authSlice.reducer;
