import React from "react";
import Header from "./Header.js";
import Post from "./Post/Post.js";
import Latest from "./Post/Latest.js";
import Popular from "./Post/Popular.js";
import "./App/App.css";
import Grid from "@mui/material/Grid";

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.posts,
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
      <Grid container spacing={2}>
        <Grid item md={12}>
          <Header />
        </Grid>
        <Grid item md={8}>
          {listItem}
        </Grid>
        <Grid item md={4}>
          <Latest />
          <Popular />
        </Grid>
      </Grid>
    );
  }
}

export default HomePage;
