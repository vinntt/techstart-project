import { Button, Grid, Typography } from "@mui/material";
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
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
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
}));

export default function FAQ() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Container
      maxWidth="xl"
      style={{ backgroundColor: "#F8F9FF", padding: "5rem 5rem" }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid container xs={7} style={{ padding: "0 4rem" }}>
          <Typography
            variant="h4"
            align="left"
            style={{ fontWeight: "bold", paddingBottom: "2rem" }}
          >
            Is this the right program for you?
          </Typography>
          <Grid item>
            <Typography variant="h6" align="left">
              Eget augue in et ac sagittis senectus sit maecenas tristique.
              Pellentesque cras proin quis leo maecenas sed cursus. In eu diam
              metus odio nisl at. At tortor sollicitudin at sem. Leo ornare
              lectus hac.
            </Typography>
          </Grid>
          <Grid item style={{ padding: "3rem 2rem 1rem 0"}}>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                aria-controls="panel1d-content"
                id="panel1d-header"
              >
                <Typography>Collapsible Group Item #1</Typography>
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
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                aria-controls="panel2d-content"
                id="panel2d-header"
              >
                <Typography>Collapsible Group Item #2</Typography>
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
                <Typography>Collapsible Group Item #3</Typography>
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
              Get in touch
            </Button>
          </Grid>
        </Grid>
        <Grid
          container
          xs={4}
          position="relative"
          style={{ padding: "0 2rem" }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/AZMxLOQe-6A"
            title="Onboarding Week Techstart program 2022"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Grid>
      </Grid>
    </Container>
  );
}
