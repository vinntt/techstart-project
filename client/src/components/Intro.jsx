import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

function Intro() {
  return (
      <Container id="intro" maxWidth="xl" style={{ backgroundColor: "inherit", padding: "5rem 5rem"}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 2 }}>
          <Grid container xs={6} style={{ padding: "0 3rem"}}>
            <Typography
              variant="h2"
              align="left"
              style={{ fontWeight: "bold", paddingBottom: "2rem", textAlign:"left"}}
            >
              Tailored to your ambition!
            </Typography>
            <Grid item>
              <Typography variant="body1" align="justify" lineHeight={2} fontSize={18}>
              Techstart is a program for <b>forced</b> and underprivileged <b>voluntary</b> migrants who want to take the leap and <b>re-</b>enter the tech workforce in Germany. You get to access all classes at CODE University of Applied Sciences in Software Engineering, Interaction Design, and Product Management while upgrading your practical skills by working on a hands-on group or solo project of your choice. Are you ready for take-off? We prepare you to take on an internship or <b>entry-level</b> position and help you find it.
              </Typography>
            </Grid>
            <Grid item >
                <Button
                href="/application"
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
