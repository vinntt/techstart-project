import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "@mui/system";
import { Link, Typography } from "@mui/material";

const partnerLists = [
  {
    img: "https://res.cloudinary.com/dymdurqej/image/upload/c_scale,w_256/v1668033594/techstart/logo-code_x3gict.png",
    title: "CODE University of Applied Sciences",
    href: "https://code.berlin/en/",
  },
  {
    img: "https://res.cloudinary.com/dymdurqej/image/upload/c_fit,w_256,h_141/v1668033833/techstart/logo-gerl-stiftung_peevdd.png",
    title: "Andreas Gerl Stiftung",
    href: "https://www.gerl-stiftung.de/",
  },
  {
    img: "https://res.cloudinary.com/dymdurqej/image/upload/c_scale,w_256/v1668033936/techstart/Logo_780x366_w808rp.png",
    title: "Einstieg zum Aufstieg",
    href: "https://einstiegzumaufstieg.de/",
  },
  {
    img: "https://res.cloudinary.com/dymdurqej/image/upload/c_scale,w_256/v1668034130/techstart/logo-inco-group_mmcc0z.png",
    title: "INCO Group",
    href: "https://inco-group.co/en/activities",
  },
  {
    img: "https://res.cloudinary.com/dymdurqej/image/upload/c_scale,w_256/v1668034258/techstart/logo-vbki_pw2mar.png",
    title: " Verein Berliner Kaufleute und Industrieller (VBKI)",
    href: "https://www.vbki.de/",
  },
];

export default function Partners() {
  return (
    <Container maxWidth="xl" style={{ padding: "5rem 4rem" }}>
      <Typography variant="h3" align="center" style={{ fontWeight: "bold" }}>
      OUR FOUNDERS AND CO-FOUNDERS
      </Typography>
      <ImageList cols={5} style={{ gap: "2rem", padding: "2rem 3rem", alignItems: "center" }}>
        {partnerLists.map((partner) => (
          <ImageListItem key={partner.img}>
            <Link href={`${partner.href}`}>
              <img
                src={`${partner.img}`}
                alt={partner.title}
                loading="lazy"
              />
            </Link>
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
