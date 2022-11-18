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
    description: `Answer a short questionnaire about your motivation, background, and professional goals.`,
    orientation: "right",
    icon: <EditIcon fontSize="large"/>,
    link: true,
  },
  {
    label: "Documents and Challenge",
    description:
      "In the second stage we ask you to submit your CV, a photo (for internal purposes only) and a proof of your work permit.You will also have to complete a written challenge (you will get one week to do so).",
    orientation: "left",
    icon: <TipsAndUpdatesIcon fontSize="large"/>,
    link: true,
  },
  {
    label: "Interview",
    description: `In the online interview we want to get to know you better, but this is also your chance to get to know us.`,
    orientation: "right",
    icon: <ThreePIcon fontSize="large"/>,
    link: true,
  },
  {
    label: "Confirmation",
    description: `At the end of May/beginning of June we will let you know whether you made it into the program.`,
    orientation: "left",
    icon: <GroupAddIcon fontSize="large"/>,
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
          width: 80,
          height: 80,
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
        variant="h2"
        align="center"
        style={{ fontWeight: "bold", padding: "4rem 0" }}
      >
        Application Process
      </Typography>
     <Grid style={{paddingBottom: "4rem"}}>
     {steps.map((step) => (
        <Grid container xs="6" style={stepStyle(step.orientation)}>
          {step.orientation === "right" && stepAvatar(step)}
          <Grid item xs={5} md={5} sx={{padding: "1rem"}}>
            <Typography variant="h6" style={{ fontWeight: "bold", padding:"1rem" }}>
              {step.label}
            </Typography>
            <Typography variant="body1" lineHeight={1.8}>{step.description}</Typography>
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
