import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UsersBlog from "./pages/UsersBlog";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-blogs" element={<UsersBlog />} />
      </Routes>
    </>
  );
}

export default App;
