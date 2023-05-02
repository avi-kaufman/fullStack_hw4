import React, { Component } from "react";

class NavBar extends React.Component {
    render(){
        return(
            <nav id="">
                <div className="left_content">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about_me_page">About Me</a></li>
                        <li><a href="/post_page">Posts</a></li>
                        <li><a href="/new_post_page">New posts</a></li>
                        <li><a href="">Contact Me</a></li>
                    </ul>
                </div>
                <div className="right_content">
                    <ul>    
                        <li><a href="/login_page">Login</a></li>
                    </ul>
                </div>
            </nav>
            )
    }

}
export default NavBar;