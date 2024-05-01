import { CSSProperties, FC } from 'react';
import classes from './Icon.module.css';

export interface IconProps {
  className?: string;
  icon:string;
  alt:string;
  text:string;
  style?: CSSProperties
} 

export const Icon: FC<IconProps> = ({icon, alt, text, style}) => {
//   const { className } = props;
  return (
    <div className={classes.icon} style={style}>
        <img src={icon} alt={alt} className={classes.reactIcon}/>
        <span className={classes.bottomText}>{text}</span>    
    </div>
  );
};
