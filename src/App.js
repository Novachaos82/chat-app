//import EditFirestore from "./component/EditFirestore";
//import Firestore from "./component/Firestore";
import Login from "./pages/login";
import { HashRouter, Route, Routes } from "react-router-dom";
import ChatPage from "./pages/ChatPage";
import Register from "./pages/Register";

//import { useRef } from "react";
function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Chats" element={<ChatPage />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
