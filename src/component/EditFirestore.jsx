import React from "react";
import { useState } from "react";
import { collection, updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { db } from "../firebase";

function EditFirestore() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [id, setID] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();

    if (name === "" || id === "") {
      return;
    }
    //const dataCollectionRef = collection(db, "users");
    const docRef = doc(db, "users", id);
    updateDoc(docRef, { name, age })
      .then((Response) => {
        console.log(Response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>Edit Name</div>
      <form onSubmit={submitHandler}>
        <label htmlFor="edit">Edit ID</label>
        <input
          id="edit"
          type="text"
          value={id}
          onChange={(e) => setID(e.target.value)}
        />
        <label htmlFor="name">Add name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="age">Add age</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default EditFirestore;
