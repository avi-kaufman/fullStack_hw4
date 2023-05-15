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
  const posts = [
    {
      post_num: "1",
      post_text:
        "My first blog post is all about my blog post and how to write a new post in my blog, you can find it here",
      post_date: "Published 1 day ago by Israel",
    },
    {
      post_num: "2",
      post_text: "My second blog post is all about my blog post",
      post_date: "Published 2 day ago by Joe",
    },
    {
      post_num: "3",
      post_text: "My third blog post is all about my blog post",
      post_date: "Published 3 day ago by Israel",
    },
  ];
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/NewPost" element={<NewPost />} />
          <Route path="/post/:id" element={<PostPage posts={posts} />} />
          <Route path="/" element={<HomePage posts={posts} />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
