import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Container } from "@mui/system";

const srcset = (image, size, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};

const galleryImgs = [
  {
    img: "https://res.cloudinary.com/dymdurqej/image/upload/v1668115755/techstart/student-ts22/1667380555659_kytq9n.jpg",
    title: "Techstart",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://res.cloudinary.com/dymdurqej/image/upload/v1668115269/techstart/student-ts22/220706_OBW_photo_Rosa_Reibke_38_rvrosh.jpg",
    title: "Techstart",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://res.cloudinary.com/dymdurqej/image/upload/v1668115245/techstart/student-ts22/220706_OBW_photo_Rosa_Reibke_67_yrczt7.jpg",
    title: "HTechstart",
    rows: 2,
    cols: 3,
  },
  {
    img: "https://res.cloudinary.com/dymdurqej/image/upload/v1668114330/techstart/student-ts22/IMG_20221020_142530_uhjvky.jpg",
    title: "Techstart",
    rows: 2,
    cols: 1,
  },
  {
    img: "https://res.cloudinary.com/dymdurqej/image/upload/v1668115322/techstart/student-ts22/220706_OBW_photo_Rosa_Reibke_24_ugri4p.jpg",
    title: "Techstart",
    rows: 2,
    cols: 3,
  },
  {
    img: "https://res.cloudinary.com/dymdurqej/image/upload/v1668115806/techstart/student-ts22/IMG_20220909_134433_wcduzj.jpg",
    title: "Techstart",
    rows: 2,
    cols: 3,
  },

  {
    img: "https://res.cloudinary.com/dymdurqej/image/upload/v1668115151/techstart/student-ts22/220706_OBW_photo_Rosa_Reibke_47_bnbhfb.jpg",
    title: "Techstart",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://res.cloudinary.com/dymdurqej/image/upload/v1668115294/techstart/student-ts22/220928_Disc_Golf_photo_Techstart_2_fzlrwl.jpg",
    title: "Techstart",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://res.cloudinary.com/dymdurqej/image/upload/v1668114921/techstart/student-ts22/Laptop_Donation3_photo_heyjobs_wzvi3o.jpg",
    title: "Techstart",
    rows: 2,
    cols: 3,
  },
  {
    img: "https://res.cloudinary.com/dymdurqej/image/upload/v1668114853/techstart/student-ts22/4de7acff-a886-4710-a1a4-7178cdaa78ef_vujnhx.jpg",
    title: "Techstart",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://res.cloudinary.com/dymdurqej/image/upload/v1668115049/techstart/student-ts22/220706_OBW_photo_Rosa_Reibke_26_axf6hk.jpg",
    title: "Techstart",
    rows: 2,
    cols: 1,
  },
];

export default function QuiltedImageList() {
  return (
    <Container maxWidth="xl">
      <ImageList
        sx={{ width: "100%", height: "100%" }}
        variant="quilted"
        cols={8}
        rowHeight={120}
      >
        {galleryImgs.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}
