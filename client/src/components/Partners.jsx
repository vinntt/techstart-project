import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "@mui/system";
import { Link, Typography } from "@mui/material";
import logoAndreasGerlStiftung from './../img/logoAndreasGerlStiftung.png'
import logoCode from './../img/logoCode.png'
import logoEzA from './../img/logoEzA.png'
import logoInco from './../img/logoInco.png'
import logoVBKI from './../img/logoVBKI.png'

const partnerLists = [
  {
    img: {logoCode},
    title: "CODE University of Applied Sciences",
    href: "https://code.berlin/en/",
  },
  {
    img: {logoAndreasGerlStiftung},
    title: "Andreas Gerl Stiftung",
    href: "https://www.gerl-stiftung.de/",
  },
  {
    img: {logoEzA},
    title: "Einstieg zum Aufstieg",
    href: "https://einstiegzumaufstieg.de/",
  },
  {
    img: {logoInco},
    title: "INCO Group",
    href: "https://inco-group.co/en/activities",
  },
  {
    img: {logoVBKI},
    title: " Verein Berliner Kaufleute und Industrieller (VBKI)",
    href: "https://www.vbki.de/",
  },
];

export default function Partners() {
  return (
    <Container maxWidth="xl" style={{ padding: "2rem" }}>
      {/* <Typography
        variant="h3"
        align="center"
        style={{ fontWeight: "bold"}}
      >
        Our Partners
      </Typography> */}
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
