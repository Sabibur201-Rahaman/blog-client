import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { authActions } from "../../redux/store";
const Header = () => {
  const [value, setvalue] = useState();
  let isLogin = useSelector((state) => state.isLogin);
  isLogin=isLogin||localStorage.getItem('userId')
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(authActions.Logout());
    navigate("/login");
  };
  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h4">BlogApp</Typography>
          {isLogin && (
            <>
              <Box display={"flex"} marginLeft="auto" marginRight={"auto"}>
                <Tabs
                  textColor="inherit"
                  value={value}
                  onChange={(e, val) => setvalue(val)}
                >
                  <Tab label="Blogs" LinkComponent={Link} to="/" />
                  <Tab label="My-Blogs" LinkComponent={Link} to="/my-blogs" />
                  <Tab label="Create-Blogs" LinkComponent={Link} to="/create-blogs" />
                </Tabs>
              </Box>
            </>
          )}
          <Box display={"flex"} marginLeft="Auto">
            {!isLogin && (
              <>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/register"
                >
                  Register
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/login"
                >
                  Login
                </Button>
              </>
            )}
            {isLogin && (
              <>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
