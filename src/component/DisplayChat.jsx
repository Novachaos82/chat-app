import React, { useState } from "react";
import {
  collection,
  deleteDoc,
  onSnapshot,
  doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db, useAuth } from "../firebase";
import { useEffect } from "react";

function RealtimeDatas() {
  const currentUser = useAuth();
  const [data, setData] = useState([]);

  const deleteHandler = (id) => {
    const docRef = doc(db, "users", id);
    deleteDoc(docRef);
  };

  useEffect(() => {
    const collectionRef = collection(db, "users");

    const unsubscribe = onSnapshot(
      query(collectionRef, orderBy("timestamp", "asc")),
      (snap) => {
        setData(snap.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);
  console.log(data);
  //data.map((items) => {
  //  console.log(items.data.displayImage + " display url");
  //});
  return (
    <div>
      <div className="flex justify-center items-center">
        <img
          className="w-8 h-8 rounded-full "
          src={currentUser?.photoURL}
          alt=""
        />

        <div>{currentUser?.displayName}</div>
      </div>
      <ul>
        {data.map((datas) => {
          return (
            <div key={datas.id}>
              <img
                className="w-8 h-8 rounded-full "
                src={datas.data.displayImage}
                alt=""
              />

              <div>{datas.data.displayName}</div>
              <li>{datas.data.message}</li>

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
