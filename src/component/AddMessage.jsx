import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db, useAuth } from "../firebase";
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
  };
  return (
    <div>
      <div>Chat</div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Chat</label>
        <input
          id="name"
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default AddMessage;
