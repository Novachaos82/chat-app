//import { collection, getDoc, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { login, logout, useAuth, signup, signInWithGoogle } from "../firebase";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion";
import containerVariant from "./framerVariants/ContainerVariant";
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
    <div className="flex justify-center flex-col items-center h-screen bg-slate-900">
      <motion.div
        id="container"
        className="flex flex-col bg-black items-center w-[30%] h-3/6 justify-center max-h-fit rounded-xl"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="text-white items-center ">
          <button
            onClick={signInWithGoogle}
            className="flex px-8 py-2  items-center border border-gray-800 rounded-xl mt-4 gap-6"
          >
            <FcGoogle size={22} />
            <div>Sign in with google</div>
          </button>
        </div>
        <div className="w-4/6 flex justify-between items-center m-4">
          <div className="w-[40%] h-[2px] bg-gray-500"></div>
          <div className="text-white font-semibold italic">Or</div>
          <div className="w-[40%] h-[2px] bg-gray-500"></div>
        </div>
        <div className="flex justify-center items-center flex-col w-full text-center gap-2">
          <input className="inputs" ref={emailRef} placeholder="Email"></input>
          <input
            className="inputs"
            ref={passwordRef}
            type="password"
            placeholder="password"
          ></input>
        </div>

        <div className="my-4 flex flex-col w-full items-center gap-4 ">
          <button onClick={handleLogin} className="button">
            Login
          </button>
        </div>
        <div className="text-white italic mb-2  text-center w-2/6">
          new user?{" "}
          <button onClick={handleSignup} className="text-blue-300">
            Signup
          </button>
        </div>
        {/*<div className="rounded-xl w-52 h-64 mx-auto  mt-10 bg-gradient-to-r p-[6px] from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]">
          <div className="flex flex-col justify-between h-full bg-white text-white rounded-lg p-4"></div>
        </div>*/}
      </motion.div>
    </div>
  );
}

export default Login;
