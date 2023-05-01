import React, { Component } from "react";
import Post from './post.js';

class PostPage extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            messages: [  
                {
                    'post_num': '1',
                    'post_text': 'My first blog post is all about my blog post and how to write a new post in my blog, you can find it here',
                    'post_date': 'Published 1 day ago by Israel'
                },
                {
                    'post_num': '2',
                    'post_text': 'My second blog post is all about my blog post',
                    'post_date': 'Published 2 day ago by Joe'
                },
                {
                    'post_num': '3',
                    'post_text': 'My third blog post is all about my blog post',
                    'post_date': 'Published 3 day ago by Israel'
                }
            ]
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
                <h1>Posts</h1>
                {listItem}
            </div>
        );
    }
}

export default PostPage; 
