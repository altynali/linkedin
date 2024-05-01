import ProfileIcon from"../../../assets/profile.svg" 
import classes from './LeftSidebar.module.css'
import { Card } from '../../../shared/components/card/Card'

export default function LeftSidebar() {
  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <Card icon={ProfileIcon} alt="Profile Icon" title='Name Surname' 
          description="React Developer - React, Redux, Typescript"/>
      </div>
    </div>
  )
}

