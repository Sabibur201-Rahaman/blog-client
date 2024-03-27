import React, { useState } from "react";
import {useSelector}from 'react-redux'
import { Box, AppBar, Toolbar, Button, Typography,Tabs,Tab} from "@mui/material";
import { Link } from "react-router-dom";
import Blog from './../pages/Blog';
const Header = () => {
  const[ value,setvalue]=useState()
  const isLogin=useSelector(state=>state.isLogin)
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
            <Typography variant="h4">BlogApp</Typography>
            {isLogin &&<>
              <Box display={"flex"}marginLeft="auto" marginRight={"auto"}>
              <Tabs textColor="inherit" value={value} onChange={(e,val)=>setvalue(val)}>
            <Tab label='Blogs' LinkComponent={Link} to='/'/>
            <Tab label='My-Blogs' LinkComponent={Link} to='/my-blogs'/>
              </Tabs>
            </Box>
            </>}
            <Box display={"flex"} marginLeft='Auto'>
            {!isLogin && <>
              <Button sx={{margin:1,color:"white"}} LinkComponent={Link} to='/register'>Register</Button>
            <Button sx={{margin:1,color:"white"}} LinkComponent={Link} to='/login'>Login</Button>
            </>}
            {isLogin &&(<>
              <Button sx={{margin:1,color:"white"}}>Logout</Button>

            </>)}
            </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
