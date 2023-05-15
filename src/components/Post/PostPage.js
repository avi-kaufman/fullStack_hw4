import React from "react";
import { useNavigate } from "react-router-dom";

const PostPage = ({ posts, id }) => {
  const navigate = useNavigate();
  const post = posts.find((item) => item.post_num === id);
  return (
    <div className="post" onClick={() => navigate(`/post/${id}`)}>
      <h2>{post.title}</h2>
      <p>{post.text}</p>
      <p className="post-date">{post.date}</p>
    </div>
  );
};

export default PostPage;
