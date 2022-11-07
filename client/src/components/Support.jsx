import React from "react";
import Button from "@mui/material/Button";
// import { buildUrl, Transformer } from "cloudinary-build-url";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  CardHeader,
  Avatar,
} from "@mui/material";
import { purple } from "@mui/material/colors";
import AddIcon from "@mui/icons-material/Add";

function Support() {
  return (
    <Container maxWidth="xl" style={{ padding: "3rem 10rem" }}>
      <Typography
        variant="h3"
        align="center"
        style={{ fontWeight: "bold", padding: "4rem 0" }}
      >
        Support us
      </Typography>
      <Typography
        variant="h6"
        align="center"
      >
        Eget augue in et ac sagittis senectus sit maecenas tristique.
        Pellentesque cras proin quis leo maecenas sed cursus. In eu diam metus
        odio nisl at. At tortor sollicitudin at sem. Leo ornare lectus hac.
      </Typography>
      <Grid container sx={{ gap: "2rem", paddingTop: "2rem" }}>
        {/* Card 1 */}
        <Card sx={{ maxWidth: 345, boxShadow: 4, borderRadius: "12px", backgroundColor: "#F8F9FF"  }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: purple[500] }}>
                <AddIcon />
              </Avatar>
            }
            title="FINANCIALLY"
            subheader="Sponsor a student for the program"
          />

          <CardContent style={{}}>
            <Typography variant="body2" align="left" color="text.secondary">
            Eget augue in et ac sagittis senectus sit maecenas tristique.
              Pellentesque cras proin quis leo maecenas sed cursus. In eu diam
              metus odio nisl at. At tortor sollicitudin at sem. Leo ornare
              lectus hac.
            </Typography>
            <Button
              href="/"
              type="submit"
            //   fullWidth = "false"
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
              Get in touch
            </Button>
          </CardContent>
        </Card>
        {/* Card 2 */}
        <Card sx={{ maxWidth: 345, boxShadow: 4, borderRadius: "12px", backgroundColor: "#F8F9FF"  }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
                <AddIcon />
              </Avatar>
            }
            title="GIVING A TALK"
            subheader="Reaching out to people and inspire"
          />

          <CardContent style={{}}>
            <Typography variant="body2" align="left" color="text.secondary">
            Eget augue in et ac sagittis senectus sit maecenas tristique.
              Pellentesque cras proin quis leo maecenas sed cursus. In eu diam
              metus odio nisl at. At tortor sollicitudin at sem. Leo ornare
              lectus hac.
            </Typography>
            <Button
              href="/"
              type="submit"
            //   fullWidth = "false"
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
              Get in touch
            </Button>
          </CardContent>
        </Card>
        {/* Card 3 */}
        <Card sx={{ maxWidth: 345, boxShadow: 4, borderRadius: "12px", backgroundColor: "#F8F9FF"  }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
                <AddIcon />
              </Avatar>
            }
            title="HIRING/ INTERNSHIPS"
            subheader="Offer to students"
          />

          <CardContent style={{}}>
            <Typography variant="body2" align="left" color="text.secondary">
            Eget augue in et ac sagittis senectus sit maecenas tristique.
              Pellentesque cras proin quis leo maecenas sed cursus. In eu diam
              metus odio nisl at. At tortor sollicitudin at sem. Leo ornare
              lectus hac.
            </Typography>
            <Button
              href="/"
              type="submit"
            //   fullWidth = "false"
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
              Get in touch
            </Button>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}

export default Support;
