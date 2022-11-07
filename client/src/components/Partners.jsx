import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "@mui/system";
import { Link, Typography } from "@mui/material";

const partnerLists = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    href: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    href: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    href: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    href: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    href: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
  },
];

export default function Partners() {
  return (
    <Container maxWidth="xl" style={{ padding: "6rem" }}>
      <Typography
        variant="h3"
        align="center"
        style={{ fontWeight: "bold"}}
      >
        Our Partners
      </Typography>
      <ImageList cols={5} style={{ gap: "2rem", padding: "2rem 3rem" }}>
        {partnerLists.map((partner) => (
          <Link href={`${partner.href}`}>
            <ImageListItem key={partner.img}>
              <img
                src={`${partner.img}?w=103&h=56&fit=crop&auto=format`}
                srcSet={`${partner.img}?w=103&h=56&fit=crop&auto=format&dpr=2 2x`}
                alt={partner.title}
                loading="lazy"
              />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    </Container>
  );
}
