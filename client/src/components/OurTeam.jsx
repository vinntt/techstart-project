import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Avatar } from "@mui/material";

export default function OurTeam() {
  return (
    <Container
      id="ourteam"
      maxWidth="xl"
      style={{ backgroundColor: "#F8F9FF", padding: "6rem 6rem" }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid container xs={7} style={{ padding: "0 4rem" }}>
          <Typography
            variant="h2"
            align="left"
            style={{ fontWeight: "bold", paddingBottom: "2rem" }}
          >
            Our Team
          </Typography>
          <Grid item>
            <Typography variant="h6" align="left">
            We happily answer any questions about the Techstart program – whether you’re interested in joining yourself, supporting the program, or something completely different. Reach out, we’re looking forward to hearing from you.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              href="/contact"
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
              Contact Us
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          xs={5}
          style={{ padding: "0 4rem", flexDirection: "column", gap: "3rem" }}
        >
          <Grid>
            <Avatar
              sx={{
                bgcolor: "black",
                color: "white",
                border: "3px solid #FFFFFF",
                width: 100,
                height: 100,
                boxShadow: "0px 2px 0px #030211",
              }}
              src="https://ca.slack-edge.com/T54B2S3T9-U02FF6NM83Z-b35bcd0f2663-512"
              alt="antonia"
            />
            <Typography
              variant="h6"
              align="left"
              style={{ fontWeight: "bold" }}
            >
              Antonia Brouwers
            </Typography>
            <Typography variant="body1" align="left">
              Techstart Program Coordinator | CODE
            </Typography>
          </Grid>
          <Grid>
            <Avatar
              sx={{
                bgcolor: "black",
                color: "white",
                border: "3px solid #FFFFFF",
                width: 100,
                height: 100,
                boxShadow: "0px 2px 0px #030211",
              }}
              src="https://ca.slack-edge.com/T54B2S3T9-U01AVSVCZNY-e6cc90c1d2ee-512"
              alt="lauren"
            />
            <Typography
              variant="h6"
              align="left"
              style={{ fontWeight: "bold" }}
            >
              Lauren Gaillard
            </Typography>
            <Typography variant="body1" align="left">
              Techstart Program Coordinator | CODE
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
