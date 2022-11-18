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
            Are we a good fit for you?
          </Typography>
          <Grid item>
            <Typography variant="body1" align="left" lineHeight={2} fontSize={18}>
            Techstart is integrated into the regular schedule of CODE University of Applied Sciences. Most of your classes will take place in person on campus at Berlin Kreuzberg’s start-up hub, “Factory”.
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
                <Typography variant="h6">Do I have to be in Berlin or is there a remote option? </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" align="justify" lineHeight={1.5}>
                There is no remote option. In order to participate you have to be in Berlin for the duration of the program.
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
                <Typography variant="h6" align="left" >Who can apply?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" align="justify"  lineHeight={1.5}>
                Techstart aims to accelerate migrants + forced migrants into the Berlin tech scene. Therefore, you should identify with this demographic.
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
                <Typography variant="h6" align="left" >Is Techstart a full-time or part-time program?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" align="justify"  lineHeight={1.5}>
                Techstart is designed as a part-time program. We ask you to invest a minimum of 25h per week. If you have more time to spare, you can add more classes to your schedule.
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
                <Typography variant="h6" align="left" >Do I need to speak German?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" align="justify"  lineHeight={1.5}>
                No. But you should be able to understand and communicate in English without problems.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                aria-controls="panel34-content"
                id="panel34-header"
              >
                <Typography variant="h6" align="left" >Do I need to have a previous degree?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" align="justify" lineHeight={1.5} >
                No. We only ask for prior skills in your track of choice. Whether acquired through work experience,  self study, university, bootcamp, etc doesn’t matter.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                aria-controls="panel34-content"
                id="panel34-header"
              >
                <Typography variant="h6" align="left" >Which documents do I need?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" align="justify"  lineHeight={1.5}>
                Ideally, you will start an internship or job by the end of our program. In order to do that, you have to have a valid work permit. 
                 </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                aria-controls="panel34-content"
                id="panel34-header"
              >
                <Typography variant="h6" align="left" >Yay! I meet all criteria mentioned above. How can I apply?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" align="justify"  lineHeight={1.5}>
                Applications open in March 2023. You will then be able to apply online through this website.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
            >
              <AccordionSummary
                aria-controls="panel34-content"
                id="panel34-header"
              >
                <Typography variant="h6" align="left" >I’m excited to apply! Anything else I should know?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1" align="justify"  lineHeight={1.5}>
                You need a strong sense of discipline to learn on your own and motivation to reach out for help when needed. The CODE learning style is unique and different from what you may know from your past study experiences.Take a look at the website of CODE University of Applied Sciences to have an idea of the learning concept that Techstart follows.
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
        <Grid xs={6} position="relative" style={{ padding: "8rem 3rem" }}>
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
