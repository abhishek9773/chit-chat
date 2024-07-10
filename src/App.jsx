import { useState } from "react";
import Navbar from "./components/Navbar";
import ChatRoom from "./pages/ChatRoom";
import EmojiPicker from "emoji-picker-react";

function App() {
  return (
    <div className="container ">
      {/* <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat-random-people" element={<ChatRoom />} />
      </Routes> */}
      <Navbar />
      <ChatRoom />
    </div>
  );
}

export default App;
