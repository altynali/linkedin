import ProfileIcon from"../../../assets/profile.svg" 
import classes from './LeftSidebar.module.css'
import { Card } from '../../../shared/components/card/Card'
import { Typography } from "@mui/material"

export default function LeftSidebar() {
  return (
    <div className={classes.root}>
      <div className={classes.card}>
        <div className={classes.cardTopSection}>
          <Card icon={ProfileIcon} alt="Profile Icon" title='Name Surname' 
          description="React Developer - React, Redux, Typescript" />
        </div>
          <div className={classes.horizontalLine} />
          <div className={classes.center}>
            <div className={classes.row}>
              <Typography variant="caption" color="bottomText.secondary">
                Members who viewed the profile
              </Typography>
              <span className={classes.blueText}>311</span>
            </div>
            <div className={classes.row}>
              <Typography variant="caption" color="bottomText.secondary">
                Manage your network of contacts
              </Typography>
              <span className={classes.blueText}>919</span>
            </div>
          </div>
          <div className={classes.horizontalLine} />
          <div className={classes.section}>
            <Typography variant="caption" color="bottomText.secondary">
                Achieve your professional goals
            </Typography>
            <div>
              <Typography variant="caption" color="bottomText.secondary" fontWeight={600}>
                Don't miss out: Premium for free
              </Typography>
            </div>
          </div>
          <div className={classes.horizontalLine} />
          <div className={classes.section}>
            <Typography variant="caption" color="bottomText.secondary">
              My items
            </Typography>
          </div>
        </div>

        <div className={`${classes.card} ${classes.bottomCard}`}>
          <div className={classes.section}>
            <p className={`${classes.blueText} ${classes.footerText}`}>Groups</p>
            <p className={`${classes.blueText} ${classes.footerText}`}>Activities</p>
            <p className={`${classes.blueText} ${classes.footerText}`}>Trackable hashtags</p>
          </div>
          <div className={classes.horizontalLine} />
          <div className={classes.section}>
            <Typography variant="caption" color="bottomText.secondary">
              My items
            </Typography>
          </div>
      </div>
    </div>
  )
}

