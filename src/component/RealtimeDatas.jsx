import React, { useState } from "react";
import { collection, deleteDoc, onSnapshot, doc } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";

function RealtimeDatas() {
  const [data, setData] = useState([]);

  const deleteHandler = (id) => {
    const docRef = doc(db, "users", id);
    deleteDoc(docRef);
  };

  useEffect(() => {
    const collectionRef = collection(db, "users");
    const unsubscribe = onSnapshot(collectionRef, (snap) => {
      setData(snap.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
    });

    return () => {
      unsubscribe();
    };
  }, []);
  console.log(data);
  return (
    <div>
      <ul>
        {data.map((datas) => {
          return (
            <div key={datas.id}>
              <li>{datas.data.name}</li>
              <li>{datas.data.age}</li>
              <button
                className="button ml-5"
                onClick={() => deleteHandler(datas.id)}
              >
                delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default RealtimeDatas;
