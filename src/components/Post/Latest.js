import React, { Component } from "react";

class Latest extends React.Component {
    render() {
        return(
            <div id="latest" className="right_content">
                <h2>Latest</h2>
                <p>Blog post #1 <a href="page-link">go to page</a></p>
                <p>Blog post #2 <a href="page-link">go to page</a></p>
                <p>Blog post #3 <a href="page-link">go to page</a></p>
            </div>
        )
    }
}
export default Latest;