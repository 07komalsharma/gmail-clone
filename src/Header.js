import { Avatar, IconButton } from '@mui/material';
import React from 'react'
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import img1 from "./images/gmail1.png";


function Header() {
  return (
    <div className="header">
        <div className="header_left">
        <IconButton> 
          <MenuIcon/>
        </IconButton>

        <img
          //  src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg"
          //  alt=""
          src={img1}
          alt=" "
           />
        </div>

      <div className="header_middle">
          <SearchIcon/>
          <input placeholder="Search mail" type="text"/>
          <ArrowDropDownIcon className="header_inputCaret" />
      </div>

      <div className="header_right">
      <IconButton> 
          <AppsIcon />
        </IconButton>
      <IconButton> 
          <NotificationsIcon/>
        </IconButton>
        <Avatar />
          
          </div>
    </div>
  );
}

export default Header
