import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import Marquee from "react-fast-marquee";

const stringToColor = (string) => {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
};

const stringAvatar = (name) => {
  return {
    sx: {
      bgcolor: stringToColor(name),
      minHeight: 70,
      minWidth: 70,
      border: "2px solid #0A1025",
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
};

const testimonialsArr = [
  {
    content:
      "The program works, you know? Antonia works. CODE works. You are really doing something here. It is very helpful, so I just wanted to say thank you.",
    name: "Maria Lauvine",
    subtitle: "Techstart 2021",
  },
  {
    content:
      "I got out of the program what I wanted — to learn typescript and get an internship, and I did that in 6 months.For me, it was really successful.",
    name: "Danah Karrigan",
    subtitle: "Techstart 2021",
  },
  {
    content:
      "The program works, you know? Antonia works. CODE works. You are really doing something here. It is very helpful, so I just wanted to say thank you.",
    name: "Maria Lauvine",
    subtitle: "Techstart 2021",
  },
  {
    content:
      "I got out of the program what I wanted — to learn typescript and get an internship, and I did that in 6 months.For me, it was really successful.",
    name: "Danah Karrigan",
    subtitle: "Techstart 2021",
  },
  // {
  //   content:
  //     "The program works, you know? Antonia works. CODE works. You are really doing something here. It is very helpful, so I just wanted to say thank you.",
  //   name: "Maria Lauvine",
  //   subtitle: "Techstart 2021",
  // },
  // {
  //   content:
  //     "I got out of the program what I wanted — to learn typescript and get an internship, and I did that in 6 months.For me, it was really successful.",
  //   name: "Danah Karrigan",
  //   subtitle: "Techstart 2021",
  // },
];

export default function Testimonials() {
  return (
    <Container id="testimonials" maxWidth="xl" style={{ padding: "6rem" }}>
      <Typography
        variant="h3"
        align="center"
        style={{ fontWeight: "bold", padding: "4rem 0" }}
      >
        Testimonials
      </Typography>
      <Marquee>
        <Grid
          container
          style={{
            flexFlow: "row wrap",
            gap: "2rem",
            justifyContent: "space-evenly",
          }}
        >
          {testimonialsArr.map((item) => (
            <Card
              sx={{
                maxWidth: 550,
                maxHeight: 370,
                boxShadow: "0px 4px 0px #000000",
                border: "2px solid #0A1025",
                borderRadius: "16px",
                backgroundColor: "#F8F9FF",
                padding: "3rem",
                animation: "marquee 15s linear infinite",
              }}
            >
              <Grid container>
                <Grid xs={3}>
                  <Avatar xs={3} variant="solid" {...stringAvatar(item.name)} />
                </Grid>
                <Grid container xs={9}>
                  <Typography
                    variant="body1"
                    align="left"
                    style={{ paddingBottom: "1rem" }}
                  >
                    "{item.content}"
                  </Typography>
                  <Grid>
                    <Typography
                      variant="h6"
                      style={{ fontWeight: "900" }}
                    >
                      {item.name}
                    </Typography>
                    <Typography variant="body1">{item.subtitle}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          ))}
        </Grid>
      </Marquee>
    </Container>
  );
}
