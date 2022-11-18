import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useState } from "react";
import { Container, Button, Link } from "@mui/material";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleSettingsMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Account & Settings</MenuItem>
      <MenuItem onClick="">Log Out</MenuItem>
    </Menu>
  );

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
      <MenuItem component={Link} href="/#intro">
        <p>ABOUT US</p>
      </MenuItem>
      <MenuItem component={Link} href="/#testimonials">
        <p>TESTIMONIALS</p>
      </MenuItem>
      <MenuItem component={Link} href="/#overview">
        <p>PROGRAM</p>
      </MenuItem>
      <MenuItem component={Link} href="/#faq">
        <p>FAQ</p>
      </MenuItem>
      <MenuItem component={Link} href="/#ourteam">
        <p>CONTACT US</p>
      </MenuItem>
      <MenuItem>
        <p>APPLY NOW</p>
      </MenuItem>
      <MenuItem>
        <p>LOGIN</p>
      </MenuItem>
      <MenuItem onClick={handleSettingsMenuOpen}>
        {/* <IconButton
          size="small"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <SettingsIcon />
        </IconButton> */}
        <p>SETTINGS</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{ position: "sticky", top: "0", zIndex: "1000" }}
    >
      <AppBar
        position="static"
        style={{ backgroundColor: "#F8F9FF", marginBottom: "1.5rem" }}
      >
        <Container maxWidth="100%">
          <Toolbar>
            <Link href="/" style={{ color: "black", textDecoration: "none" }}>
              <Box
                component="img"
                sx={{
                  width: 220,
                  height: "auto",
                }}
                alt="Techstart logo"
                src="https://res.cloudinary.com/dymdurqej/image/upload/v1668034912/techstart/Main_d5iufy.png"
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
              <Link
                href="/#intro"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Typography
                  variant="button"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  ABOUT
                </Typography>
              </Link>
              <Link
                href="/#testimonials"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Typography
                  variant="button"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  TESTIMONIALS
                </Typography>
              </Link>
              <Link
                href="/#overview"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Typography
                  variant="button"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  PROGRAM
                </Typography>
              </Link>
              <Link
                href="/#faq"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Typography
                  variant="button"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  FAQ
                </Typography>
              </Link>
              <Link
                href="/#ourteam"
                style={{ textDecoration: "none", color: "black" }}
              >
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
                href="/application"
                type="submit"
                variant="button"
                sx={{ mt: 3, mb: 2, py: 1 }}
                endIcon={""}
                style={{
                  backgroundColor: "#F1005F",
                  border: "2px solid black",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  boxShadow: "0px 2px 0px #000000",
                  borderRadius: "12px",
                  whiteSpace: "nowrap",
                  minWidth: "auto",
                }}
              >
                Apply now
              </Button>
              <Button
                href="/login"
                type="submit"
                variant="button"
                sx={{ mt: 3, mb: 2, py: 1 }}
                endIcon={""}
                style={{
                  backgroundColor: "#F1005F",
                  border: "2px solid black",
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  boxShadow: "0px 2px 0px #000000",
                  borderRadius: "12px",
                  whiteSpace: "nowrap",
                  minWidth: "auto",
                }}
              >
                Login
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
                aria-haspopup="true"
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
      {renderMenu}
    </Box>
  );
}
