import { collection, getDocs } from "firebase/firestore";
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

  return (
    <div>
      <ul>
        {data.map((datas) => {
          return (
            <div key={datas.id}>
              <li>{datas.data.name}</li>
              <li>{datas.data.age}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Firestore;
