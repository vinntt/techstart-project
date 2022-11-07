import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

function Intro() {
  return (
      <Container maxWidth="xl" style={{ backgroundColor: "inherit", padding: "5rem 5rem"}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid container xs={6} style={{ padding: "0 3rem"}}>
            <Typography
              variant="h2"
              align="left"
              style={{ fontWeight: "bold", paddingBottom: "2rem"}}
            >
              Your future starts now!
            </Typography>
            <Grid item>
              <Typography variant="h6" align="left">
                Eget augue in et ac sagittis senectus sit maecenas tristique.
                Pellentesque cras proin quis leo maecenas sed cursus. In eu diam
                metus odio nisl at. At tortor sollicitudin at sem. Leo ornare
                lectus hac.
              </Typography>
            </Grid>
            <Grid item >
                <Button
                href="/"
                  type="submit"
                  fullWidth
                  variant="button"
                  sx={{ mt: 3, mb: 2, py: 1 }}
                  style={{
                    backgroundColor: "#F1005F",
                    border: "2px solid black",
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    boxShadow: "0px 2px 0px #000000",
                    borderRadius: "12px",
                    fullWidth: "false",
                  }}
                >
                  Apply now
                </Button>
            </Grid>
          </Grid>
          <Grid container xs={6} position="relative" style={{padding:"0 4rem"}}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/AZMxLOQe-6A" title="Onboarding Week Techstart program 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </Grid>
        </Grid>
      </Container>
  );
}

export default Intro;
