//import { collection, getDoc, getDocs } from "firebase/firestore";
import { useRef, useState } from "react";

import { login, logout, useAuth, signup, signInWithGoogle } from "../firebase";
//import { useRef } from "react";

function Login() {
  //const [users, setUsers] = useState([]);
  //const userCollectionRef = collection(db, "users");
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const currentUser = useAuth();

  //useEffect(() => {
  //  const getUsers = async () => {
  //    const data = await getDocs(userCollectionRef);
  //    setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //    console.log(data.docs);
  //    //console.log(data);
  //  };

  //  getUsers();
  //}, []);

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

  const handleLogout = async () => {
    setLoading(true);
    try {
      await logout();
    } catch {
      alert("error");
    }
    setLoading(false);
  };
  return (
    <div className="App">
      <div>current user is {currentUser?.email}</div>
      <div>
        <input ref={emailRef} placeholder="Email"></input>
        <input ref={passwordRef} type="password" placeholder="password"></input>
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
      <button
        disabled={loading || !currentUser}
        onClick={handleLogout}
        className="button"
      >
        Log out
      </button>
      <div>
        <button onClick={signInWithGoogle}>Sign in with google</button>
      </div>
    </div>
  );
}

export default Login;
