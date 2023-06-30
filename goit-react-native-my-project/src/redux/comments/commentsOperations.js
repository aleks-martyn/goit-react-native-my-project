import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import app from '../../../config/firebase';

const db = getFirestore(app);

export const addComment = createAsyncThunk(
  'comments/addComment',
  async (newComment, thunkAPI) => {
    try {
      const docRef = await addDoc(collection(db, 'comments'), newComment);
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

