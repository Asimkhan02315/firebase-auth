import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAVVRwCll83_XGiqYeDGhdJnymdnlw5IyI",
  authDomain: "react-auth-e6ef8.firebaseapp.com",
  projectId: "react-auth-e6ef8",
  storageBucket: "react-auth-e6ef8.appspot.com",
  messagingSenderId: "548639206929",
  appId: "1:548639206929:web:b64a258e269cefcc108bb0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
