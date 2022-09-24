import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth, registerWithEmailAndPassword } from "../firebase";
import { motion } from "framer-motion";
import containerVariant from "../component/framerVariants/ContainerVariant";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };
  useEffect(() => {
    if (loading) return;
    if (user) return navigate("/Chats");
  }, [user, loading, navigate]);
  return (
    <div className="flex justify-center flex-col items-center h-screen bg-slate-900">
      <motion.div
        id="container"
        className="flex flex-col bg-black items-center w-[30%] h-3/6 justify-center max-h-fit rounded-xl gap-4"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <div className="font-semibold text-3xl text-white font-sans mb-4">
          Register
        </div>
        <input
          type="text"
          className="inputs"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="text"
          className="inputs"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <input
          type="password"
          className="inputs"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button className="button" onClick={register}>
          Register
        </button>

        <div className="text-white">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500">
            Login
          </Link>{" "}
        </div>
      </motion.div>
    </div>
  );
}
export default Register;
