import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyD7QVjWumI_XZMLj-NBJyn15uTuraKUlIg',
  authDomain: 'posts-9d0f3.firebaseapp.com',
  databaseURL: 'https://posts-9d0f3.firebaseio.com',
  projectId: 'posts-9d0f3',
  storageBucket: 'posts-9d0f3.appspot.com',
  messagingSenderId: '1098182767392',
  appId: '1:1098182767392:ios:25b13f70d57f75ae6b9d45',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
