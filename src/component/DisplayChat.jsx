import React, { useState } from "react";
import {
  collection,
  //deleteDoc,
  onSnapshot,
  //doc,
  query,
  orderBy,
} from "firebase/firestore";
import { db, useAuth } from "../firebase";
import { useEffect } from "react";
import Logout from "./logout";
import AddMessage from "./AddMessage";
import { motion } from "framer-motion";
import TextVariant from "./framerVariants/TopTextVariant";
import ChatAppVariant from "./framerVariants/ChatTabVariant";

function RealtimeDatas() {
  const currentUser = useAuth();
  const [data, setData] = useState([]);

  //const deleteHandler = (id) => {
  //  const docRef = doc(db, "users", id);
  //  deleteDoc(docRef);
  //};

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
  //console.log(currentUser.uid);
  console.log(data);

  return (
    <div className=" p-4  bg-gradient-to-tr from-[rgb(26,25,23)] to-[rgb(17,17,44)] min-h-screen">
      <motion.div
        className="flex flex-row justify-end gap-2  items-center text-white"
        variants={TextVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex items-center gap-2">
          <div className="font-bold text-sm ">Logged In as</div>
          <img
            className="w-8 h-8 rounded-full "
            src={currentUser?.photoURL}
            alt=""
          />

          <div>{currentUser?.displayName}</div>
        </motion.div>
        <div>
          <Logout />
        </div>
      </motion.div>

      <div className="flex  justify-center w-full mt-4 mb-4 min-h-screen ">
        <motion.div
          id="containerMsg"
          className="w-3/6 bg-black text-white rounded-xl p-4 overflow-auto h-fit"
          variants={ChatAppVariant}
          initial="hidden"
          animate="visible"
        >
          <ul className="h-3/6">
            {data.map((datas) => {
              return (
                <div key={datas.id}>
                  {currentUser.uid === datas.data.uid ? (
                    <div className="flex flex-col items-end mt-2">
                      <div className="flex gap-2 items-center mb-2">
                        <img
                          className="w-8 h-8 rounded-full "
                          src={datas.data.displayImage}
                          alt=""
                        />
                        <div className="font-semibold font-mono">you</div>
                      </div>
                      <li className="bg-green-300  rounded-tl-2xl rounded-b-2xl text-black  px-4 py-2">
                        {" "}
                        {datas.data.message}
                      </li>
                    </div>
                  ) : (
                    <div className="flex flex-col items-start mt-2">
                      <div className="flex gap-2 items-center mb-2">
                        <img
                          className="w-8 h-8 rounded-full "
                          src={datas.data.displayImage}
                          alt=""
                        />
                        <div className="font-semibold font-mono">
                          {datas.data.displayName}
                        </div>
                      </div>
                      <div>
                        <li className="bg-blue-400  rounded-tr-2xl text-black  rounded-b-2xl  px-4 py-2 ml-9">
                          {datas.data.message}
                        </li>
                      </div>
                    </div>
                  )}
                  {/*<img
                className="w-8 h-8 rounded-full "
                src={datas.data.displayImage}
                alt=""
              />*/}
                  {/*<div>
                {currentUser.uid === datas.data.uid ? (
                  <div className="flex items-center justify-center">you</div>
                ) : (
                  datas.data.displayName
                )}
              </div>*/}
                  {/*<li> {datas.data.message}</li>*/}
                  {/*<button
                    className="bg-black text-white px-4 py-2 ml-5"
                    onClick={() => deleteHandler(datas.id)}
                  >
                    delete
                  </button>*/}
                </div>
              );
            })}
          </ul>
          <div className="bg-black">
            <AddMessage />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default RealtimeDatas;
