import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db, useAuth } from "../firebase";
import { BsFillChatLeftFill } from "react-icons/bs";
function AddMessage() {
  const [msg, setMsg] = useState("");
  //const [age, setAge] = useState("");
  const currentUser = useAuth();
  const submitHandler = (e) => {
    e.preventDefault();

    if (msg === "") {
      return;
    }
    const dataCollectionRef = collection(db, "users");
    addDoc(dataCollectionRef, {
      message: msg,
      displayName: currentUser.displayName,
      displayImage: currentUser.photoURL,
      uid: currentUser.uid,
      timestamp: serverTimestamp(),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
    //alert(name);
    console.log(msg);
    setMsg("");
  };
  return (
    <div className="mt-4">
      <form
        onSubmit={submitHandler}
        className="flex flex-row items-center gap-4"
      >
        <label htmlFor="name">
          <BsFillChatLeftFill size={24} />
        </label>
        <input
          id="name"
          type="text"
          value={msg}
          placeholder="Chat"
          onChange={(e) => setMsg(e.target.value)}
          autoComplete="off"
          className="flex-1 p-2 rounded-md outline-none text-black"
        />

        <button type="submit" className="font-bold">
          Send
        </button>
      </form>
    </div>
  );
}

export default AddMessage;
