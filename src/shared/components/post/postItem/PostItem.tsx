import { FC } from 'react';
import classes from './PostItem.module.css';

export interface PostItemProps {
  className?: string;
}

export const PostItem: FC<PostItemProps> = () => {
  return (
    <div className={classes.root}>
    </div>
  );
};
