import { Card } from '../../../shared/components/card/Card'
import ProfileIcon from"../../../assets/profile.svg" 
import classes from './RightSidebar.module.css'
import { footerLinks } from '../../../shared/utils/getFooterLinks'
import { Button } from '@mui/material'

export default function RightSidebar() {
  return (
    <section className={classes.root}>
      <div className={classes.card}>
        <Card icon={ProfileIcon} alt="Profile Icon"
          topDescription="Get the latest news and information on job openings in the industry."
          secondIcon="https://media.licdn.com/dms/image/C560BAQFRbfY60ovhDQ/company-logo_100_100/0/1652282378245/aevi_int__logo?e=1722470400&v=beta&t=w1JfpdLa3Zho5BB2V5xyQCjLSenpR5OWiRmbIRGsBto"
          description="User, browse suitable vacancies in the company "/>
          <Button variant='outlined' className={classes.button} sx={{ borderRadius: 30 }}>Track</Button>
      </div>
      <footer>
        <ul className={classes.list}>
          {footerLinks.map(({ text }, index) => 
            <li key={index} className={classes.listElement}>{text}</li>
          )}
        </ul>
      </footer>
    </section>
  )
}
