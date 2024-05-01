import { FC } from 'react';
import classes from './PostList.module.css';
import { useGetPosts } from '../../../utils/getPosts';
import { Loader } from '../../loader/Loader';
import { PostItem } from '../postItem/PostItem';

export interface PostListProps {
  className?: string;
}

export const PostList: FC<PostListProps> = () => {
  const { loading, data } = useGetPosts()

  console.log(loading, data);
  
  if(loading) {
    return <Loader/>
  }

  return (
    <div className={classes.root}>
        {data?.map((post) => <PostItem />)}
    </div>
  );
};
