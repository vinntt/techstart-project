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

function Overview() {
  return (
    <Container maxWidth="xl" style={{ padding: "4rem 10rem" }}>
      <Typography
        variant="h3"
        align="center"
        style={{ fontWeight: "bold", padding: "4rem 0" }}
      >
        Program Overview
      </Typography>
      <Grid container sx={{ maxWidth: "80%", gap: "2rem" }}>
        {/* Card 1 */}
        <Card sx={{ maxWidth: 345, boxShadow: 4, borderRadius: "12px", backgroundColor: "#F8F9FF"  }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: purple[500] }}>
                <AddIcon />
              </Avatar>
            }
            title="Duration"
            subheader="How long /when does it start"
          />

          <CardContent style={{}}>
            <Typography variant="body2" align="left" color="text.secondary">
            Eget augue in et ac sagittis senectus sit maecenas tristique.
              Pellentesque cras proin quis leo maecenas sed cursus. In eu diam
              metus odio nisl at. At tortor sollicitudin at sem. Leo ornare
              lectus hac.
            </Typography>
            <Typography variant="caption" align="center">
              Jackson Deville - Manager Company
            </Typography>
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
            title="Duration"
            subheader="How long /when does it start"
          />

          <CardContent style={{}}>
            <Typography variant="body2" align="left" color="text.secondary">
            Eget augue in et ac sagittis senectus sit maecenas tristique.
              Pellentesque cras proin quis leo maecenas sed cursus. In eu diam
              metus odio nisl at. At tortor sollicitudin at sem. Leo ornare
              lectus hac.
            </Typography>
            <Typography variant="caption" align="center">
              Jackson Deville - Manager Company
            </Typography>
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
            title="Duration"
            subheader="How long /when does it start"
          />

          <CardContent style={{}}>
            <Typography variant="body2" align="left" color="text.secondary">
            Eget augue in et ac sagittis senectus sit maecenas tristique.
              Pellentesque cras proin quis leo maecenas sed cursus. In eu diam
              metus odio nisl at. At tortor sollicitudin at sem. Leo ornare
              lectus hac.
            </Typography>
            <Typography variant="caption" align="center">
              Jackson Deville - Manager Company
            </Typography>
          </CardContent>
        </Card>
        {/* Card 4 */}
        <Card sx={{ maxWidth: 345, boxShadow: 4, borderRadius: "12px", backgroundColor: "#F8F9FF"  }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
                <AddIcon />
              </Avatar>
            }
            title="Duration"
            subheader="How long /when does it start"
          />

          <CardContent style={{}}>
            <Typography variant="body2" align="left" color="text.secondary">
            Eget augue in et ac sagittis senectus sit maecenas tristique.
              Pellentesque cras proin quis leo maecenas sed cursus. In eu diam
              metus odio nisl at. At tortor sollicitudin at sem. Leo ornare
              lectus hac.
            </Typography>
            <Typography variant="caption" align="center">
              Jackson Deville - Manager Company
            </Typography>
          </CardContent>
        </Card>
        {/* Card 5 */}
        <Card sx={{ maxWidth: 345, boxShadow: 4, borderRadius: "12px", backgroundColor: "#F8F9FF"  }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: purple[500] }} aria-label="recipe">
                <AddIcon />
              </Avatar>
            }
            title="Duration"
            subheader="How long /when does it start"
          />

          <CardContent style={{}}>
            <Typography variant="body2" align="left" color="text.secondary">
            Eget augue in et ac sagittis senectus sit maecenas tristique.
              Pellentesque cras proin quis leo maecenas sed cursus. In eu diam
              metus odio nisl at. At tortor sollicitudin at sem. Leo ornare
              lectus hac.
            </Typography>
            <Typography variant="caption" align="center">
              Jackson Deville - Manager Company
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid container maxWidth="xl" style={{ padding: "5rem"}}>
        <Button
        size= "large"
          variant="contained"
          style={{
            backgroundColor: "black",
            fontWeight: "bold",
            color: "white",
            width: "80%",
          }}
        >
         <Typography
            variant="h4"
            align="center"
            style={{ fontWeight: "bold", color: "white" }}
          >
            DEADLINE 29/09/2029
          </Typography>
        </Button>
      </Grid>
    </Container>
  );
}

export default Overview;
