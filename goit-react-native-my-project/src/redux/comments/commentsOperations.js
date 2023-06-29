import { createAsyncThunk } from '@reduxjs/toolkit';
import { getFirestore } from 'firebase/firestore';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import app from '../../../config/firebase';

const db = getFirestore(app);