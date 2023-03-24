import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Auth from "./Pages/Auth";
import ChatPage from "./Pages/ChatPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="auth" element={<Auth />}></Route>
        <Route path="chats" element={<ChatPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
