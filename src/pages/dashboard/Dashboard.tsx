import { Form } from "../../shared/components/form/Form";
import classes from './Dashboard.module.css';
import { PostList } from "../../shared/components/post/postList/PostList";

const Dashboard = () => {
  return (
    <main className={classes.root}>
      <Form />
      <PostList />
    </main>
  );
};

export default Dashboard;
