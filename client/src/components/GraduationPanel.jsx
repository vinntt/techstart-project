import { Container, Typography } from "@mui/material";
import React from "react";

export default function GraduationPanel() {
  return (
    <Container
      maxWidth="xl"
      style={{ padding: "5rem", backgroundColor: "#E9E9E9" }}
    >
      <Typography variant="h4" align="center" style={{ fontWeight: "bold" }}>
        75% of our graduates are working within six months
      </Typography>
    </Container>
  );
}
