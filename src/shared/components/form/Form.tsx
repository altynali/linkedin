import { FC } from 'react';
import classes from './Form.module.css';
import { MyInput } from '../myInput/MyInput';
import ProfileIcon from"../../../assets/profile.svg" 

export interface FormProps {
  className?: string;
}

export const Form: FC<FormProps> = () => {

  return (
    <div className={classes.root}>
        <div className={classes.topSection}>
          <img src={ProfileIcon} alt="Profile Icon" />
          <MyInput fullWidth/>
        </div>
    </div>
  );
};
