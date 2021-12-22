import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/material/Menu';



export default function Footer(props) {
  return (
      <>
     
    <Box sx={{ flexGrow: 1 }} className="footer">
      <AppBar position="relative" color="default">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 4 }}>
          &copy;	Ehab Al-Shrida          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    </>
  );
}
