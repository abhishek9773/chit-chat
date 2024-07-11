import { useState } from "react";
import Navbar from "./components/Navbar";
import ChatRoom from "./pages/ChatRoom";
import EmojiPicker from "emoji-picker-react";
import { AuthProvider } from "./utils/AuthContext";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/chat-public"
          element={
            <PrivateRoute>
              <ChatRoom />
            </PrivateRoute>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
