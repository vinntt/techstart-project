import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MoreIcon from "@mui/icons-material/MoreVert";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { AuthContext } from "../context/auth";
import { Container, Button } from "@mui/material";
import LoginForm from "./LoginForm";
// import CloudinaryAvatar from "../UI/CloudinaryAvatar";

export default function Navbar() {
  // const { logoutUser } = useContext(AuthContext);

  // const [openSignUpForm, setOpenSignUpForm] = useState(false);

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleSettingsMenuOpen = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  // const handleSignUpFormOpen = () => {
  //   setOpenSignUpForm(true);
  // };

  // const handleSignUpFormClose = () => {
  //   setOpenSignUpForm(false);
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  //   const menuId = "primary-search-account-menu";
  //   const renderMenu = (
  //       <Menu
  //           anchorEl={anchorEl}
  //           anchorOrigin={{
  //               vertical: "top",
  //               horizontal: "right",
  //           }}
  //           id={menuId}
  //           keepMounted
  //           transformOrigin={{
  //               vertical: "top",
  //               horizontal: "right",
  //           }}
  //           open={isMenuOpen}
  //           onClose={handleMenuClose}
  //       >
  //           <MenuItem onClick={handleMenuClose}>Account & Settings</MenuItem>
  //           <MenuItem onClick=''>Log Out</MenuItem>
  //       </Menu>
  //   );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <p>ABOUT US</p>
      </MenuItem>
      <MenuItem>
        <p>TESTIMONIALS</p>
      </MenuItem>
      <MenuItem>
        <p>PROGRAM</p>
      </MenuItem>
      <MenuItem>
        <p>FAQ</p>
      </MenuItem>
      <MenuItem>
        <p>CONTACT US</p>
      </MenuItem>
      <MenuItem>
        <p>APPLY NOW</p>
      </MenuItem>
      {/* <MenuItem onClick={handleSettingsMenuOpen}>
        <IconButton
          size="small"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <SettingsIcon />
        </IconButton>
        <p>Settings</p>
      </MenuItem> */}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "transparent" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              <Box
                component="img"
                sx={{
                  maxWidth: "30%",
                  height: "auto",
                }}
                alt="Techstart logo"
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
                // src="./../public/logo-techstart.png"
              />
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              style={{
                flexFlow: "row nowrap",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <Typography
                  variant="button"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  ABOUT
                </Typography>
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <Typography
                  variant="button"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  TESTIMONIALS
                </Typography>
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <Typography
                  variant="button"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  PROGRAM
                </Typography>
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <Typography
                  variant="button"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  FAQ
                </Typography>
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "black" }}>
                <Typography
                  variant="button"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  CONTACT US
                </Typography>
              </Link>
              <Button
                href="/"
                type="submit"
                variant="button"
                sx={{ mt: 3, mb: 2, py: 1 }}
                endIcon={""}
                // onClick={handleSignUpFormOpen}
                style={{
                  backgroundColor: "#F3C522",
                  border: "2px solid black",
                  color: "#1D1D1F",
                  fontWeight: "bold",
                  boxShadow: "0px 2px 0px #000000",
                  borderRadius: "12px",
                  whiteSpace: "nowrap",
                  minWidth: "auto",
                }}
              >
                Signup
              </Button>
              <Button
                href="/"
                type="submit"
                variant="button"
                sx={{ mt: 3, mb: 2, py: 1 }}
                endIcon={""}
                style={{
                  backgroundColor: "#F3C522",
                  border: "2px solid black",
                  color: "#1D1D1F",
                  fontWeight: "bold",
                  boxShadow: "0px 2px 0px #000000",
                  borderRadius: "12px",
                  whiteSpace: "nowrap",
                  minWidth: "auto",
                }}
              >
                <LoginForm/>
              </Button>
              <Button
                href="/"
                type="submit"
                variant="button"
                sx={{ mt: 3, mb: 2, py: 1 }}
                endIcon={""}
                style={{
                  backgroundColor: "#F3C522",
                  border: "2px solid black",
                  color: "#1D1D1F",
                  fontWeight: "bold",
                  boxShadow: "0px 2px 0px #000000",
                  borderRadius: "12px",
                  whiteSpace: "nowrap",
                  minWidth: "auto",
                }}
              >
                Apply now
              </Button>

              {/* <Link to='/profile/me' style={{ textDecoration: "none" }}>
                                <IconButton
                                    size='small'
                                    aria-controls={menuId}
                                    aria-haspopup="true"
                                    onClick={handleSettingsMenuOpen}
                                    style={{ color: "white", padding: "0", margin: "0" }}
                                    style={{ color: "white", padding: "10px 8px" }}
                                >
                                    <AccountCircle sx={{ fontSize: 24 }} />
                                </IconButton>
                            </Link> */}
              {/* <Link to='#' style={{ textDecoration: "none" }}> */}
              {/* <IconButton size='small' aria-controls={menuId} aria-haspopup='true' onClick={handleSettingsMenuOpen} style={{ color: "white", padding: "10px 8px" }}>
                                    <SettingsIcon sx={{ fontSize: 24 }} />
                                </IconButton> */}
              {/* </Link> */}
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="small"
                aria-label="show more"
                aria-controls={mobileMenuId}
                // aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon style={{ color: "black" }} />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {renderMobileMenu}
      {/* {renderMenu} */}
    </Box>
  );
}
