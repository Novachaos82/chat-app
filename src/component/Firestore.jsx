import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { db } from "../firebase";

const Firestore = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const getData = () => {
    const dataCollectionRef = collection(db, "users");
    dataCollectionRef.orderBy("timestamp", "asc");
    getDocs(dataCollectionRef)
      .then((response) => {
        console.log(response);
        const items = response.docs.map((doc) => ({
          data: doc.data(),
          id: doc.id,
        }));
        setData(items);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteHandler = (id) => {
    const docRef = doc(db, "users", id);
    deleteDoc(docRef);
  };

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
};

export default Firestore;
