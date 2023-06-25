import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCqBUoPniFFbwK17TCKYMpmhNMnVOeiLws',
  authDomain: 'posts-9d0f3.firebaseapp.com',
  projectId: 'posts-9d0f3',
  storageBucket: 'posts-9d0f3.appspot.com',
  messagingSenderId: '1098182767392',
  appId: '1:1098182767392:web:2b10c6a554b841586b9d45',
  measurementId: 'G-3C9KNLM62Q',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
