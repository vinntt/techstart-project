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
import { Link } from "react-router-dom";
import { Container, Button } from "@mui/material";
import logoTechstart from "./../img/logoTechstart.png";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "black" }}>
        <Container maxWidth="xl" style={{ padding: "1.5rem 0" }}>
          <Toolbar>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              sx={{ display: { xs: "none", md: "flex" } }}
              style={{
                flexFlow: "row nowrap",
                gap: "20px",
                alignItems: "center",
              }}
            >
              <Link to="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                <Typography
                  variant="button"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  ABOUT
                </Typography>
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                <Typography
                  variant="button"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  TESTIMONIALS
                </Typography>
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                <Typography
                  variant="button"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  PROGRAM
                </Typography>
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                <Typography
                  variant="button"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  FAQ
                </Typography>
              </Link>
              <Link to="/" style={{ textDecoration: "none", color: "#FFFFFF" }}>
                <Typography
                  variant="button"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  CONTACT US
                </Typography>
              </Link>
            </Box>
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              <Box
                component="img"
                sx={{
                  // maxWidth: "100%",
                  height: "auto",
                }}
                alt="Techstart logo"
                src={logoTechstart}
              />
            </Link>
            {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="small"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon style={{ color: "#FFFFFF" }} />
              </IconButton>
            </Box> */}
          </Toolbar>
        </Container>
      </AppBar>
      {/* {renderMobileMenu} */}
    </Box>
  );
}
