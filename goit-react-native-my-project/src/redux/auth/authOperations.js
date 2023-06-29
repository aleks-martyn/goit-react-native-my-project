import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { createAsyncThunk } from '@reduxjs/toolkit';

const auth = getAuth();

export const register = createAsyncThunk(
  'auth/register',
  async ({ username, email, password }, thunkAPI) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, { displayName: username });

      return {
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        uid: auth.currentUser.uid,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async ({ email, password }, thunkAPI) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      return {
        displayName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        uid: auth.currentUser.uid,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await signOut(auth);
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
