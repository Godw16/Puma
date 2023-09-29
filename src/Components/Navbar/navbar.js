import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {
  AppBar,
  Tab,
  Tabs,
  Toolbar,
  Typography} from "@mui/material";
import React, { useState } from 'react'

import '../Styles/navbar.scss'
const Navbar = () => {
  const Pages = ["NEW","WOMEN","MEN","KIDS","MOTORSPORT","COLLABORATIONS","SPORTS","OUTLET"];
  // const [value, setValue] = useState();
  return (
    <div>
      <AppBar class="navbar">
        <Toolbar className="toolbar">
          <Typography className="heading">
            <img className="image" src="https://pbs.twimg.com/profile_images/494500994730823680/vXDisD4k_400x400.jpeg" alt="logo"/>
          </Typography>
              <ul className="list">
                {Pages.map((page, index) => (
                  <li className="listitem" key={index}>{page}</li>
                ))}
              </ul>
               <SearchIcon className='search'/>
               <FavoriteBorderIcon className='heart'/>
               <ShoppingCartIcon className='shop'/>
               <PersonIcon className='log'/>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar;