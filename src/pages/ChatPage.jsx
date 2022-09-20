import AddMessage from "../component/AddMessage";
import RealtimeDatas from "../component/DisplayChat";
import Logout from "../component/logout";

import React from "react";

function ChatPage() {
  return (
    <div>
      <RealtimeDatas />
      {/*<Logout />*/}
    </div>
  );
}

export default ChatPage;
