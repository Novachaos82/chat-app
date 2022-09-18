import AddMessage from "./component/AddMessage";
//import EditFirestore from "./component/EditFirestore";
//import Firestore from "./component/Firestore";
import Login from "./component/login";
import RealtimeDatas from "./component/FetchDatas";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Logout from "./component/logout";

//import { useRef } from "react";
function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? (
        <>
          {" "}
          <RealtimeDatas />
          <AddMessage />
          {/*<EditFirestore />*/}
          <Logout />
        </>
      ) : (
        <Login />
      )}
      {/*<Firestore />*/}
    </div>
  );
}

export default App;
