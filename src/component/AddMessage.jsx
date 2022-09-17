import { collection, addDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "../firebase";

function AddMessage() {
  const [msg, setMsg] = useState("");
  //const [age, setAge] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    if (msg === "") {
      return;
    }
    const dataCollectionRef = collection(db, "users");
    addDoc(dataCollectionRef, { message: msg })
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
