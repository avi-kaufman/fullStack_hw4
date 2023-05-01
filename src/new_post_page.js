import React, { Component } from "react";
import Post from './post.js';

class NewPost extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
    }
    
    render() {
        const listItem = this.state.messages.map((item) => (  
            <Post
                key={item.post_num}
                post_num={item.post_num}
                post_text={item.post_text}
                post_date={item.post_date}
            />
        ));
        
        return (
            <div>
                <h1>New Posts</h1>
                {listItem}
            </div>
        );
    }
}

export default NewPost; 
