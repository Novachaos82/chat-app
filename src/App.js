import AddFirestore from "./component/addFirestore";
import EditFirestore from "./component/EditFirestore";
//import Firestore from "./component/Firestore";
import Login from "./component/login";
import RealtimeDatas from "./component/RealtimeDatas";

//import { useRef } from "react";

function App() {
  return (
    <div className="App">
      <Login />
      {/*<Firestore />*/}
      <RealtimeDatas />
      <AddFirestore />
      <EditFirestore />
    </div>
  );
}

export default App;
