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
      <Box className={classes.headerInnerWrapper}> 
          <div className={classes.left}> 
            <img className={classes.logo} src={LinkedinIcon} alt="linkedin logo"/> 
            <span className={classes.searchIcon}>
              <Icon icon={SearchIcon} alt="Search Icon" bottomText='Search' navIcon />
            </span>
            <span className={classes.input}>
              <SearchInput />
            </span>
          </div>  
            <Icon icon={HomeIcon} alt="Home Icon" bottomText='Home' navIcon />
            <Icon icon={NetworkIcon} alt="Network Icon" bottomText='Network' navIcon />
            <Icon icon={PositionsIcon} alt="Positions Icon" bottomText='Positions' navIcon />
            <Icon icon={MessagesIcon} alt="Messages Icon" bottomText='Messages' navIcon />
            <Icon icon={NotificationsIcon} alt="Notifications Icon" bottomText='Notifications' navIcon />
            <Icon icon={ProfileIcon} alt="Profile Icon" bottomText='Profile' navIcon />
            <div className={classes.verticalLine} />
            <Icon icon={ForBusinessIcon} alt="ForBusiness Icon" bottomText='For Business' style={{ marginLeft:10 }} navIcon />
            <a className={classes.premium} href="https://www.linkedin.com/premium/products/?upsellOrderOrigin=premium_nav_upsell_text&referenceId=5P%2BgCJ15RmWAF3d6jaHmLA%3D%3D&destRedirectURL=https%3A%2F%2Fwww.linkedin.com%2Ffeed%2F">
              Get access to Premium tools and statistics
            </a>
      </Box>
    </header>
  )
}
