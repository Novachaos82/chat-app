import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebase-config";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};
export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  return signOut(auth);
};

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsub;
  }, []);
  return currentUser;
};
