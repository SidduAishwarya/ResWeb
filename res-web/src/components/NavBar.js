
import { AppBar, InputBase, Toolbar, Typography,Badge,Avatar,styled,Menu,MenuItem} from '@mui/material'
import { Box } from '@mui/material'
import React from 'react'
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({theme}) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius ,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({theme}) => ({
  display: "flex",
  gap: "20px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    
    <AppBar position="sticky">
      <StyledToolbar>
      <Typography variant="h6" sx={{display: {xs:"none", sm:"block"}}}> NavBar</Typography>
      <PetsIcon sx={{display: {xs:"block", sm:"none"}}}/> 
      <Search><InputBase placeholder='Search...'/></Search>
      <Icons>
      <Badge badgeContent={4} color="error">
      <MailIcon  />
      </Badge>
      <Badge badgeContent={4} color="error">
      <NotificationsIcon/>
      </Badge>
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg"
      onClick={(e)=>setOpen(true)} />
      </Icons>
      <UserBox  onClick={(e)=>setOpen(true)}>
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <Typography>Siddu</Typography>
      </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={(e)=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default NavBar
