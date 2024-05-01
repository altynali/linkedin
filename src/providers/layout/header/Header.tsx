import { AppBar, Toolbar } from "@mui/material"
import classes from "./Header.module.css";
// import { MyInput } from "../../../shared/components/input/MyInput"; 
import LinkedinIcon from"../../../assets/linkedin.svg"
import SearchIcon from"../../../assets/search.svg"
import NetworkIcon from"../../../assets/network.svg" 
import HomeIcon from"../../../assets/home.svg" 
import PositionsIcon from"../../../assets/positions.svg" 
import MessagesIcon from"../../../assets/messages.svg" 
import NotificationsIcon from"../../../assets/notifications.svg" 
import ProfileIcon from"../../../assets/profile.svg" 
import ForBusinessIcon from"../../../assets/forBusiness.svg" 

export const Header = () => {
  return (
    <AppBar position="static" className={classes.header} color="transparent">
      <Toolbar
        sx={{
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div className={classes.left}>
          <img src={LinkedinIcon} alt="linkedin logo" />
        </div> 
        {/* <div className={classes.searchSection}> */} 
        <img src={SearchIcon} alt="Search Icon" />
          
          {/* <MyInput/> */}
        {/* </div> */}
        <nav> 
            <img src={HomeIcon} alt="Home Icon" />
            <img src={NetworkIcon} alt="Network Icon" />
            <img src={PositionsIcon} alt="Positions Icon" />
            <img src={MessagesIcon} alt="Messages Icon" />
            <img src={NotificationsIcon} alt="Notifications Icon" />
            <img src={ProfileIcon} alt="Profile Icon" />
            <img src={ForBusinessIcon} alt="ForBusiness Icon" />
        </nav>
         
      </Toolbar>
    </AppBar>
  )
}
