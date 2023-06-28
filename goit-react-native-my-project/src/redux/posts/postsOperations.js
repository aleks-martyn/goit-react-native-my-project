import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import app from '../../../config/firebase';

const db = getFirestore(app);

export const addPost = createAsyncThunk(
  'posts/addPost',
  async ({ photo, location, name, nameLocation }, thunkAPI) => {
    try {
      const { uid } = getAuth().currentUser;
      const newPost = { uid, photo, location, name, nameLocation };
      const docRef = await addDoc(collection(db, 'posts'), newPost);

      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getAllPosts = createAsyncThunk(
  'posts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      querySnapshot.forEach(doc => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
