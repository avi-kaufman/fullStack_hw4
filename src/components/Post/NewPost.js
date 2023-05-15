import React from "react";
import { Grid, Box, TextField, Button } from "@mui/material";

class NewPost extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;
  };

  render() {
    return (
      <Box id="newPost" display="flex" justifyContent="center">
        <Box width="50%">
          <Box textAlign="center">
            <h2>New Post</h2>
          </Box>
          <form onSubmit={this.handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  helperText="Enter post title"
                  id="title"
                  label="Title"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="content"
                  label="Content"
                  helperText="Enter post content"
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Box>
    );
  }
}

export default NewPost;
