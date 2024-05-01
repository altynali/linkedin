import { Box } from "@mui/material"; 
import { Form } from "../../shared/components/form/Form";
import classes from './Dashboard.module.css';
import { PostList } from "../../shared/components/post/postList/PostList";

const Dashboard = () => {
  return (
    <Box className={classes.root}>
      <Form />
      <PostList />
    </Box>
  );
};

export default Dashboard;
