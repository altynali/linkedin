import { Box } from "@mui/material"
import classes from "./Header.module.css";
import { SearchInput } from "../../../shared/components/searchInput/SearchInput"; 
import LinkedinIcon from"../../../assets/linkedin.svg"
import SearchIcon from"../../../assets/search.svg"
import NetworkIcon from"../../../assets/network.svg" 
import HomeIcon from"../../../assets/home.svg" 
import PositionsIcon from"../../../assets/positions.svg" 
import MessagesIcon from"../../../assets/messages.svg" 
import NotificationsIcon from"../../../assets/notifications.svg" 
import ProfileIcon from"../../../assets/profile.svg" 
import ForBusinessIcon from"../../../assets/forBusiness.svg" 
import { Icon } from "../../../shared/components/icon/Icon";

export const Header = () => {
  return (
    <header className={classes.header}>
      <Box
        sx={{
          display:'flex',
          justifyContent: "space-between",
          alignItems: "center",
          padding: 0
        }}
      > 
          <div className={classes.left}> 
            <img src={LinkedinIcon} alt="linkedin logo"/> 
            <span className={classes.searchIcon}>
              <Icon icon={SearchIcon} alt="Search Icon" text='Search' />
            </span>
            <span className={classes.input}>
              <SearchInput />
            </span>
          </div>  
            <Icon icon={HomeIcon} alt="Home Icon" text='Home'/>
            <Icon icon={NetworkIcon} alt="Network Icon" text='Network'/>
            <Icon icon={PositionsIcon} alt="Positions Icon" text='Positions'/>
            <Icon icon={MessagesIcon} alt="Messages Icon" text='Messages'/>
            <Icon icon={NotificationsIcon} alt="Notifications Icon" text='Notifications'/>
            <Icon icon={ProfileIcon} alt="Profile Icon" text='Profile'/>
            <div className={classes.verticalLine}></div>
            <Icon icon={ForBusinessIcon} alt="ForBusiness Icon" text='For Business' style={{marginLeft:10}}/>
            <a className={classes.premium} href="https://www.linkedin.com/premium/products/?upsellOrderOrigin=premium_nav_upsell_text&referenceId=5P%2BgCJ15RmWAF3d6jaHmLA%3D%3D&destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F">
              Get access to Premium tools and statistics
            </a>
      </Box>
    </header>
  )
}
