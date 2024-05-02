import ProfileIcon from"../../../assets/profile.svg" 
import classes from './LeftSidebar.module.css'
import { Card } from '../../../shared/components/card/Card'

export default function LeftSidebar() {
  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <Card icon={ProfileIcon} alt="Profile Icon" title='Name Surname' 
          description="React Developer - React, Redux, Typescript" />
          <div className={classes.horizontalLine} />
          <div className={classes.center}>
            <div className={classes.visit}>
              <p>Members who viewed the profile</p>
              <span>311</span>
            </div>
            <div className={classes.visit}>
              <p>Manage your network of contacts</p>
              <span>919</span>
            </div>
          </div>
          <div className={classes.horizontalLine} />
          <div className={classes.footer}>
            <p className={classes.achieve}>Achieve your professional goals</p>
            <div>
              <p>Don't miss out: Premium for 0 CZK</p>
            </div>
          </div>
          <div className={classes.horizontalLine} />
          <div className={classes.footer}>
            <p className={classes.visit}>My items</p>
          </div>
        </div>

        <div className={`${classes.card} ${classes.bottomCard}`}>
          <div className={classes.footer}>
            <p className={classes.visit}>Groups</p>
            <p className={classes.visit}>Groups</p>
            <p className={classes.visit}>Groups</p>
          </div>
          <div className={classes.horizontalLine} />
          <div className={classes.footer}>
            <p className={classes.visit}>My items</p>
          </div>
      </div>
    </div>
  )
}

