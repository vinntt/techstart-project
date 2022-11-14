import React from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Card, CardContent, CardHeader, Avatar, Box } from "@mui/material";
import PaidIcon from "@mui/icons-material/Paid";
import VoiceChatIcon from "@mui/icons-material/VoiceChat";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

function Support() {
  return (
    <Container maxWidth="xl" style={{ padding: "6rem" }}>
      <Typography
        variant="h3"
        align="center"
        style={{ fontWeight: "bold", padding: "3rem 0" }}
      >
        Support us
      </Typography>
      <Grid
        container
        xs={10}
        spacing={2}
        sx={{
          rowGap: "1rem",
          margin: "auto",
        }}
      >
        <Typography variant="h6" align="center">
          Eget augue in et ac sagittis senectus sit maecenas tristique.
          Pellentesque cras proin quis leo maecenas sed cursus. In eu diam metus
          odio nisl at. At tortor sollicitudin at sem. Leo ornare lectus hac.
        </Typography>
        <Grid
          container
          sx={{ gap: "2rem", paddingTop: "2rem", justifyContent: "center" }}
        >
          {/* Card 1 */}
          <Card
            sx={{
              maxWidth: 345,
              boxShadow: "0px 4px 0px #000000",
              border: "2px solid #0A1025",
              borderRadius: "16px",
              backgroundColor: "#F8F9FF",
              textAlign: "left",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    border: "3px solid #FFFFFF",
                    width: 70,
                    height: 70,
                    boxShadow: "0px 2px 0px #030211",
                  }}
                >
                  <PaidIcon />
                </Avatar>
              }
              titleTypographyProps={{ variant: "h6", fontWeight: "900" }}
              title="FINANCIALLY"
              subheader="Sponsor a student for the program"
            />

            <CardContent style={{ padding: "0 16px" }}>
              <Typography variant="body1" align="left">
                Eget augue in et ac sagittis senectus sit maecenas tristique.
                Pellentesque cras proin quis leo maecenas sed cursus. In eu diam
                metus odio nisl at. At tortor sollicitudin at sem. Leo ornare
                lectus hac.
              </Typography>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  href="/"
                  type="submit"
                  variant="button"
                  sx={{ mt: 3, mb: 2, py: 1 }}
                  style={{
                    backgroundColor: "#915FC7",
                    border: "2px solid black",
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    boxShadow: "0px 2px 0px #000000",
                    borderRadius: "12px",
                  }}
                >
                  Become a Supporter
                </Button>
              </Box>
            </CardContent>
          </Card>
          {/* Card 2 */}
          <Card
            sx={{
              maxWidth: 345,
              boxShadow: "0px 4px 0px #000000",
              border: "2px solid #0A1025",
              borderRadius: "16px",
              backgroundColor: "#F8F9FF",
              textAlign: "left",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    border: "3px solid #FFFFFF",
                    width: 70,
                    height: 70,
                    boxShadow: "0px 2px 0px #030211",
                  }}
                >
                  <VoiceChatIcon />
                </Avatar>
              }
              titleTypographyProps={{ variant: "h6", fontWeight: "900" }}
              title="GIVING A TALK"
              subheader="Reaching out to people and inspire"
            />

            <CardContent style={{ padding: "0 16px" }}>
              <Typography variant="body1" align="left">
                Eget augue in et ac sagittis senectus sit maecenas tristique.
                Pellentesque cras proin quis leo maecenas sed cursus. In eu diam
                metus odio nisl at. At tortor sollicitudin at sem. Leo ornare
                lectus hac.
              </Typography>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  href="/"
                  type="submit"
                  variant="button"
                  sx={{ mt: 3, mb: 2, py: 1 }}
                  style={{
                    backgroundColor: "#915FC7",
                    border: "2px solid black",
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    boxShadow: "0px 2px 0px #000000",
                    borderRadius: "12px",
                  }}
                >
                  Become a Supporter
                </Button>
              </Box>
            </CardContent>
          </Card>
          {/* Card 3 */}
          <Card
            sx={{
              maxWidth: 345,
              boxShadow: "0px 4px 0px #000000",
              border: "2px solid #0A1025",
              borderRadius: "16px",
              backgroundColor: "#F8F9FF",
              textAlign: "left",
            }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    bgcolor: "black",
                    color: "white",
                    border: "3px solid #FFFFFF",
                    width: 70,
                    height: 70,
                    boxShadow: "0px 2px 0px #030211",
                  }}
                >
                  <BusinessCenterIcon />
                </Avatar>
              }
              titleTypographyProps={{ variant: "h6", fontWeight: "900" }}
              title="HIRING/ INTERNSHIPS"
              subheader="Offer to students"
            />

            <CardContent style={{ padding: "0 16px" }}>
              <Typography variant="body1" align="left">
                Eget augue in et ac sagittis senectus sit maecenas tristique.
                Pellentesque cras proin quis leo maecenas sed cursus. In eu diam
                metus odio nisl at. At tortor sollicitudin at sem. Leo ornare
                lectus hac.
              </Typography>
              <Box style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  href="/"
                  type="submit"
                  variant="button"
                  sx={{ mt: 3, mb: 2, py: 1 }}
                  style={{
                    backgroundColor: "#915FC7",
                    border: "2px solid black",
                    color: "#FFFFFF",
                    fontWeight: "bold",
                    boxShadow: "0px 2px 0px #000000",
                    borderRadius: "12px",
                  }}
                >
                  Become a Supporter
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Support;
