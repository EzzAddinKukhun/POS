import React from 'react'
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from '@mui/icons-material/Dashboard';

interface Props {
  name : string
}

function Navbar({name}: Props) {
  return (
    <AppBar sx = {{ background: '#0D87AC' }}  position="static">
    <Toolbar variant="dense">
      <DashboardIcon>
      </DashboardIcon>
      <Typography variant="h6" color="inherit" component="div">
         {name}
      </Typography>
    </Toolbar>
  </AppBar>
  )
}

export default Navbar