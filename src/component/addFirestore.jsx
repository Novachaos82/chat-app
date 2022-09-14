import { collection, addDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "../firebase";

function AddFirestore() {
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (name === "") {
      return;
    }
    const dataCollectionRef = collection(db, "users");
    addDoc(dataCollectionRef, { name })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err.message);
      });
    //alert(name);
    console.log(name);
  };
  return (
    <div>
      <div>Add Name</div>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Add name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add name</button>
      </form>
    </div>
  );
}

export default AddFirestore;
