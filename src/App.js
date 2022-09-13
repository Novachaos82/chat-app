import Firestore from "./component/Firestore";
import Login from "./component/login";

//import { useRef } from "react";

function App() {
  return (
    <div className="App">
      <Login />
      <Firestore />
    </div>
  );
}

export default App;
