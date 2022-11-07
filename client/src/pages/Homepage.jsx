import Container from "@mui/material/Container";
import { Box } from "@mui/system";
// import axios from "axios";
import { useEffect, useState } from "react";
import FAQ from "../components/FAQ";
import Gallery from "../components/Gallery";
import GraduationPanel from "../components/GraduationPanel";
import Intro from "../components/Intro";
import Overview from "../components/Overview";
import Partners from "../components/Partners";
import Testimonials1 from "../components/Testimonials1";
import Support from "../components/Support";
import OurTeam from "../components/OurTeam";
import Process from "../components/Process";

export default function Homepage() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="xl" style={{ backgroundColor: "white" }}>
        <Intro />
        <Partners />
        <GraduationPanel />
        <FAQ />
        <Testimonials1 />
        <Gallery />
        <Overview />
        <Process/>
        <Support/>
        <OurTeam/>
      </Container>
    </Box>
  );
}
