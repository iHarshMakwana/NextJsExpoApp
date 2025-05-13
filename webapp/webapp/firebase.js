import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCvdrjeIdMwnKOeFPKz56COoaBoRxtodQ4",
  authDomain: "webapp-961b3.firebaseapp.com",
  projectId: "webapp-961b3",
  storageBucket: "webapp-961b3.firebasestorage.app",
  messagingSenderId: "441659774874",
  appId: "1:441659774874:web:94e89fbce4ca83aded0c23",
  measurementId: "G-2QWL48NHB2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
