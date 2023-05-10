import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";

const NewPost = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const content = event.target.content.value;
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField fullWidth label="Title" id="title" />
      <TextField fullWidth label="Content" id="content" />
      <Button variant="contained" disableElevation type="submit">
        Submit
      </Button>
    </form>
  );
};

export default NewPost;
