import AddMessage from "./component/AddMessage";
//import EditFirestore from "./component/EditFirestore";
//import Firestore from "./component/Firestore";
import Login from "./component/login";
import RealtimeDatas from "./component/DisplayChat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Logout from "./component/logout";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";

//import { useRef } from "react";
function App() {
  const [user] = useAuthState(auth);

  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Chats" element={<ChatPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
