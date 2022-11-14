import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Avatar, Container, Grid } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import ThreePIcon from "@mui/icons-material/ThreeP";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const steps = [
  {
    label: "Written application",
    description: `In the written application you must send us your CV and answer a short questionnaire about your
    motivation, background, and expectations`,
    orientation: "right",
    icon: <EditIcon />,
    link: true,
  },
  {
    label: "Challenge",
    description:
      "We invite you to campus for an admission day where you will join in some practical team challenges. In the event that Corona does not allow us to meet in person, we will send you a virtual challenge that you must complete",
    orientation: "left",
    icon: <TipsAndUpdatesIcon />,
    link: true,
  },
  {
    label: "Interview",
    description: `In the online interview we want to get to know you better, but this is also your chance to get to know us.`,
    orientation: "right",
    icon: <ThreePIcon />,
    link: true,
  },
  {
    label: "Confirmation",
    description: `After admission day, you will receive your confirmation within two weeks.`,
    orientation: "left",
    icon: <GroupAddIcon />,
  },
];

function stepAvatar({ icon, link }) {
  return (
    <Grid item xs={2} md={2} style={{ position: "relative" }}>
      <Avatar
        sx={{
          bgcolor: "black",
          color: "white",
          border: "3px solid #FFFFFF",
          width: 70,
          height: 70,
          boxShadow: "0px 2px 0px #030211",
          zIndex: "1000"
        }}
      >
        {icon}
      </Avatar>
      {link && (
        <Divider
          orientation="vertical"
          style={{
            position: "absolute",
            top: 0,
            left: "27%",
            height: "100%",
            border: "3px solid #0A1025",
          }}
        />
      )}
    </Grid>
  );
}

function stepStyle(orientation) {
  let style = {
    margin: "0 auto",
  };

  if (orientation === "right") {
    style.justifyContent = "right";
  }

  return style;
}

export default function Process() {
  return (
    <Container
      maxWidth="xl"
      style={{ padding: "2rem", backgroundColor: "#F8F9FF" }}
    >
      <Typography
        variant="h3"
        align="center"
        style={{ fontWeight: "bold", padding: "4rem 0" }}
      >
        Application Process
      </Typography>
     <Grid style={{paddingBottom: "4rem"}}>
     {steps.map((step) => (
        <Grid container xs="6" style={stepStyle(step.orientation)}>
          {step.orientation === "right" && stepAvatar(step)}
          <Grid item xs={5} md={5}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              {step.label}
            </Typography>
            <Typography variant="body1">{step.description}</Typography>
          </Grid>
          {step.orientation !== "right" && stepAvatar(step)}
        </Grid>
      ))}
     </Grid>
      <Box>
        <Button
          href="/application"
          type="submit"
          variant="button"
          sx={{ mt: 3, mb: 2, py: 1 }}
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
      </Box>
    </Container>
  );
}
