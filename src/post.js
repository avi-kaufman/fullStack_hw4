import React, { Component} from "react";

class Post extends React.Component {
    render(){
        return(
            <div id="post" className="right_content">
                <h4 id="post_num">Blog post #{this.props.post_num}</h4>
                <p id="post_text">{this.props.post_text}</p>
                <p id="post_date">{this.props.post_date}</p>
            </div>
        )
    }
}
export default Post;