import { FC } from 'react';
import classes from './Form.module.css';
import { MyInput } from '../myInput/MyInput';
import ProfileIcon from"../../../assets/profile.svg" 
import { Icon } from '../icon/Icon';
import CommentIcon from"../../../assets/comment-2-svgrepo-com.svg"

export interface FormProps {
  className?: string;
}

export const Form: FC<FormProps> = () => {

  return (
    <div className={classes.root}>
        <div className={classes.topSection}>
          <img className={classes.profile} src={ProfileIcon} alt="Profile Icon" />
          <MyInput fullWidth sx={{
              '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderRadius: '30px',
              },
            },
          }} placeholder='New Post' />
        </div>
        <div className={classes.actions}>
          <Icon icon={CommentIcon} alt="ThumbUp Icon" rightText='Like' row />
          <Icon icon={CommentIcon} alt="Comment Icon" rightText='Comment' row />
          <Icon icon={CommentIcon} alt="ThumbUp Icon" rightText='Like' row />
        </div>
    </div>
  );
};
