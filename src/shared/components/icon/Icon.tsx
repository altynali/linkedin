import { CSSProperties, FC } from 'react';
import classes from './Icon.module.css';

export interface IconProps {
  className?: string;
  icon: string;
  alt: string;
  bottomText?: string;
  rightText?: string;
  style?: CSSProperties
  navIcon?: boolean;
  row?: boolean;
} 

export const Icon: FC<IconProps> = ({ icon, alt, bottomText, rightText, style, navIcon = false, row = false }) => {

  const iconType = navIcon ? classes.navIcon : classes.icon
  let iconDirection = classes.column

  if(row) {
    iconDirection = classes.row
  }

  return (
    <div className={`${iconType} ${iconDirection}`} style={style}>
        <img src={icon} alt={alt} className={classes.img}/>
        {bottomText && <span className={classes.bottomText}>{bottomText}</span>}   
        {rightText && <span className={classes.rightText}>{rightText}</span>}   
    </div>
  );
};
