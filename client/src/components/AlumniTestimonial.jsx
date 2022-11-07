import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function AlumniTestimonial() {
  return (
    <Container maxWidth="xl" style={{ padding: "6rem" }}>
      <Typography
        variant="h3"
        align="center"
        style={{ fontWeight: "bold", padding: "4rem 0" }}
      >
        Testimonials
      </Typography>
      <Grid container style={{ flexFlow: "row wrap", gap: "3rem" }}>
        {/* Card 1 */}
        <Card sx={{ maxWidth: 345 }}>
          {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="video"
      /> */}
          <CardMedia>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/AZMxLOQe-6A"
              title="Onboarding Week Techstart program 2022"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              Techstart 2022
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Vinh Nguyen
            </Typography>
          </CardContent>
        </Card>
        {/* Card 2 */}
        <Card sx={{ maxWidth: 345 }}>
          {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="video"
      /> */}
          <CardMedia>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/AZMxLOQe-6A"
              title="Onboarding Week Techstart program 2022"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              Techstart 2022
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Vinh Nguyen
            </Typography>
          </CardContent>
        </Card>
        {/* Card 3 */}
        <Card sx={{ maxWidth: 345 }}>
          {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="video"
      /> */}
          <CardMedia>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/AZMxLOQe-6A"
              title="Onboarding Week Techstart program 2022"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="body1" component="div">
              Techstart 2022
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Vinh Nguyen
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Container>
  );
}
