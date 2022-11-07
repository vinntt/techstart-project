import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Box, Container } from "@mui/system";
import { Avatar, Card, CardContent } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";

export default function OurTeam() {
  return (
    <Container
      maxWidth="xl"
      style={{ backgroundColor: "inherit", paddingTop: "6rem" }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid container xs={6} style={{ padding: "0 4rem" }}>
          <Typography
            variant="h2"
            align="left"
            style={{ fontWeight: "bold", paddingBottom: "2rem" }}
          >
            Our Team
          </Typography>
          <Grid item>
            <Typography variant="h6" align="left">
              Eget augue in et ac sagittis senectus sit maecenas tristique.
              Pellentesque cras proin quis leo maecenas sed cursus. In eu diam
              metus odio nisl at. At tortor sollicitudin at sem. Leo ornare
              lectus hac.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              href="/"
              type="submit"
              fullWidth
              variant="button"
              sx={{ mt: 3, mb: 2, py: 1 }}
              style={{
                backgroundColor: "#F3C522",
                border: "2px solid black",
                color: "#1D1D1F",
                fontWeight: "bold",
                boxShadow: "0px 2px 0px #000000",
                borderRadius: "12px",
                fullWidth: "false",
              }}
            >
              Contact Us
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          xs={6}
          position="relative"
          style={{ padding: "0 4rem", flexDirection: "column", gap: "3rem" }}
        >
          <Grid item>
              <Avatar>
                <PersonIcon sx={{ fontSize: 40 }}/>
              </Avatar>
              <Typography variant="body1" align="left" style={{ fontWeight: "bold"}}>
                Antonia Brouwers
                <br />
                Techstart Program Coordinator | CODE
              </Typography>
          </Grid>
          <Grid>
              <Avatar>
                <PersonIcon sx={{ fontSize: 40 }}/>
              </Avatar>
              <Typography variant="body1" align="left" style={{ fontWeight: "bold"}}>
                Lauran Gaillard
                <br />
                Techstart Program Coordinator | CODE
              </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
