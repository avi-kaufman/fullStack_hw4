import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../HomePage";
import NavBar from "../NavBar";
import AboutMe from "../AboutMe";
import Login from "../Login";
import PostPage from "../Post/PostPage";
import NewPost from "../Post/NewPost";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="main-content">
          <Routes>
            <Route path="/AboutMe" element={<AboutMe />} />
            <Route path="/NewPost" element={<NewPost />} />
            <Route path="/PostPage" element={<PostPage />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/Login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
