import { FC } from 'react'
import classes from './Card.module.css'

export interface CardProps {
  className?: string;
  icon: string;
  secondIcon?: string;
  alt: string;
  title?: string;
  topDescription?: string;
  description: string;
}

export const Card: FC<CardProps> = ({ icon, secondIcon, alt, title, description, topDescription }) => {
  //   const { className } = props;
  return (
    <div className={classes.card}>
      {topDescription && <p className={classes.description}>{topDescription}</p>}
      <div className={classes.images}>
        <img src={icon} alt={alt} className={classes.reactIcon} />
        {secondIcon && <img src={secondIcon} alt={alt} className={classes.rightIcon} />}
      </div>
      {title && <p className={classes.bottomTitle}>{title}</p>}
      {description && <p className={classes.description}>{description}</p>}
    </div>
  )
}
