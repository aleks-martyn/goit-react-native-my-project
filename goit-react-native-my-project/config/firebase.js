import { initializeApp } from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBStyeAXxbTLrYnVtaDTHDFr1FVDMPQpJI",
  authDomain: "posts3.firebaseapp.com",
  projectId: "posts3",
  storageBucket: "posts3.appspot.com",
  messagingSenderId: "646789174786",
  appId: "1:646789174786:web:2408c9f86a001e94f7791b"
};

const app = initializeApp(firebaseConfig);

export default app;
