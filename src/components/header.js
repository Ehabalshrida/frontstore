import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { useSelector } from "react-redux";


export default function ButtonAppBar(props) {
  const state = useSelector((state) => state);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            OUR STORE
          </Typography>
          {/* <a href="/cart"> */}
          <Button  color="inherit">Cart ({state.cartReducer.count})</Button>
          {/* </a> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}