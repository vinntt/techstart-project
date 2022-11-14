import React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ flexGrow: 1, width: "100%", position: "fixed", bottom: 0, zIndex: "1000" }}>
        <Container maxWidth="100%" style={{ padding: "1.5rem 0", backgroundColor: "black", display: "inline-flex" }}>
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
              <Link href="/#intro" style={{ textDecoration: "none", color: "white" }}>
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
                style={{ textDecoration: "none", color: "white" }}
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
              <Link href="/#overview" style={{ textDecoration: "none", color: "white" }}>
                <Typography
                  variant="button"
                  noWrap
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  PROGRAM
                </Typography>
              </Link>
              <Link href="/#faq" style={{ textDecoration: "none", color: "white" }}>
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
                style={{ textDecoration: "none", color: "white" }}
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
            {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="small"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon style={{ color: "white" }} />
              </IconButton>
            </Box> */}
          </Toolbar>
        </Container>
      {/* {renderMobileMenu} */}
    </Box>
  );
}
