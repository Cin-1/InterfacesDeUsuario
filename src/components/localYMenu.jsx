import { ImageList, ImageListItem } from "@mui/material";
import cafeImage from "../../public/images/cafe.jpg";
import bagelImage from "../../public/images/bagel.jpg";
import milkshakeImage from "../../public/images/milkshake.jpg";
import submarinoImage from "../../public/images/submarino.jpg";
import tortaImage from "../../public/images/torta.jpg";
import tostadoImage from "../../public/images/tostado.jpg";
import teImage from "../../public/images/te.jpg";
import croissantImage from "../../public/images/croissant.jpg";
import capuccinoImage from "../../public/images/capuccino.jpg";

export default function FotosDeComida() {
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
