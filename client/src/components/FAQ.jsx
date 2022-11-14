import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "#F8F9FF",
  // theme.palette.mode === "dark"
  //   ? "rgba(255, 255, 255, .05)"
  //   : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
  backgroundColor: "#F8F9FF",
}));

export default function FAQ() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container
      id="faq"
      maxWidth="xl"
      style={{ backgroundColor: "#F8F9FF", padding: "5rem 3rem" }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid container xs={6} style={{ padding: "0 4rem" }}>
          <Typography
            variant="h4"
            align="left"
            style={{ fontWeight: "bold", paddingBottom: "2rem" }}
          >
            Is this the right program for you?
          </Typography>
          <Grid item>
            <Typography variant="" align="left">
              This program is for people with forced migration background who
              want to step into Germany’s booming tech industry in Berlin. For
              the duration of the course you’ll learn in person in Berlin and
              spend a minimum of 25 hours a week for learning, classes and
              events.
            </Typography>
          </Grid>
          <Grid item style={{ padding: "3rem 2rem 1rem 0" }}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography variant="h6">What do I need to get started?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  At Techstart we want to understand why you are motivated to
                  join our program. We are building a vibrant and
                  interdisciplinary team, so don’t hesitate to apply independent
                  of your study background and previous knowledge. There is no
                  such thing as the right answer to our questions.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography variant="h6">Which documents do I need?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                aria-controls="panel3d-content"
                id="panel3d-header"
              >
                <Typography variant="h6">How do I apply?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                aria-controls="panel34-content"
                id="panel34-header"
              >
                <Typography variant="h6">Do I need to have a degree?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                  eget.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item>
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
              Get in touch
            </Button>
          </Grid>
        </Grid>
        <Grid xs={6} position="relative" style={{ padding: "3rem" }}>
          <Box
          href="/application"
            component="img"
            sx={{
              height: "auto",
              maxWidth: "100%",
              // minHeight: { xs: "250", md: 0 },
              // maxHeight: { xs: 0, md: "889%" },
            }}
            alt="FAQ"
            src="https://res.cloudinary.com/dymdurqej/image/upload/v1668115106/techstart/student-ts22/220706_OBW_photo_Rosa_Reibke_5_ovgm0z.jpg"
          />
        </Grid>
      </Grid>
    </Container>
  );
}
