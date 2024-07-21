import { ImageList, ImageListItem } from "@mui/material";
import cafeImage from "../../assets/images/cafe.jpg";
import bagelImage from "../../assets/images/bagel.jpg";
import milkshakeImage from "../../assets/images/milkshake.jpg";
import submarinoImage from "../../assets/images/submarino.jpg";
import tortaImage from "../../assets/images/torta.jpg";
import tostadoImage from "../../assets/images/tostado.jpg";
import teImage from "../../assets/images/te.jpg";
import croissantImage from "../../assets/images/croissant.jpg";
import capuccinoImage from "../../assets/images/capuccino.jpg";

export function Galery() {
  return (
    <ImageList sx={{ width: "100%", height: "100%" }} cols={3}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <p></p>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
          <button id={item.img}>{item.title} </button>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: cafeImage,
    title: "Café",
  },
  {
    img: bagelImage,
    title: "Bagel",
  },
  {
    img: milkshakeImage,
    title: "Milkshake",
  },
  {
    img: submarinoImage,
    title: "Submarino",
  },
  {
    img: teImage,
    title: "Té",
  },
  {
    img: tostadoImage,
    title: "Tostado",
  },
  {
    img: tortaImage,
    title: "Torta",
  },
  {
    img: croissantImage,
    title: "Croissant",
  },
  {
    img: capuccinoImage,
    title: "Capuccino",
  },
];
