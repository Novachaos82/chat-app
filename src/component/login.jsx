//import { collection, getDoc, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { login, logout, useAuth, signup, signInWithGoogle } from "../firebase";
//import { useRef } from "react";

function Login() {
  //const [users, setUsers] = useState([]);
  //const userCollectionRef = collection(db, "users");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const currentUser = useAuth();
  const navigate = useNavigate();
  //useEffect(() => {
  //  const getUsers = async () => {
  //    const data = await getDocs(userCollectionRef);
  //    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //    console.log(data.docs);
  //    //console.log(data);
  //  };

  //  getUsers();
  //}, []);
  useEffect(() => {
    if (currentUser) {
      navigate("/Chats");
    }
    console.log(currentUser + "curr user");
  }, [currentUser, navigate]);

  const handleSignup = async () => {
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("error");
    }
    setLoading(false);
  };

  const handleLogin = async () => {
    try {
      await login(emailRef.current.value, passwordRef.current.value);
    } catch {
      alert("eror login");
    }
  };

  return (
    <div className="flex justify-center flex-col">
      <div className="flex justify-center items-center flex-col  p-4">
        <input
          className="border border-black p-2"
          ref={emailRef}
          placeholder="Email"
        ></input>
        <input
          className="border border-black p-2"
          ref={passwordRef}
          type="password"
          placeholder="password"
        ></input>
      </div>

      <button
        disabled={loading || currentUser !== null}
        onClick={handleSignup}
        className="button"
      >
        Sign up
      </button>
      <button onClick={handleLogin} className="button">
        Login
      </button>

      <div>
        <button onClick={signInWithGoogle}>Sign in with google</button>
      </div>
    </div>
  );
}

export default Login;
