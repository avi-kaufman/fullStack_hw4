import React from "react";
import { useNavigate } from "react-router-dom";

const Post = (props) => {
    const navigate = useNavigate();
    return (
        <div
            className="post"
            onClick={() => {
                navigate("post/" + props.post_num);
            }}
        >
            <h4>Blog post #{props.post_num}</h4>
            <p>{props.post_text}</p>
            <p>{props.post_date}</p>
        </div>
    );
};
export default Post;
