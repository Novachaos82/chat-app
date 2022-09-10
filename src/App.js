import { collection, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import "./App.css";
import { db } from "./firebase-config";

function App() {
  const [users, setUsers] = useState([]);
  const userCollectionRef = collection(db, "users");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data.docs);
      //console.log(data);
    };

    getUsers();
  }, []);
  return <div className="App"></div>;
}

export default App;
