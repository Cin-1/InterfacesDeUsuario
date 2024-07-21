import React, { useState } from 'react';
import { ImageList, ImageListItem, FormControl, InputLabel, Select, MenuItem, Typography } from "@mui/material";
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
  const [totalAmount, setTotalAmount] = useState(0);
  const [quantities, setQuantities] = useState(Array(itemData.length).fill(0));

  const handleQuantityChange = (event, index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = event.target.value;
    setQuantities(newQuantities);

    const newTotalAmount = itemData.reduce((total, item, idx) => {
      return total + item.price * newQuantities[idx];
    }, 0);

    setTotalAmount(newTotalAmount);
  };

  return (
    <div>
      <Typography variant="h6">Total: ${totalAmount.toFixed(2)}</Typography>
      <ImageList sx={{ width: "100%", height: "100%" }} cols={3}>
        {itemData.map((item, index) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
            <Typography color="primary">{item.title} - ${item.price.toFixed(2)}</Typography>
            <FormControl fullWidth>
              <InputLabel id={`quantity-select-label-${index}`}>Cantidad</InputLabel>
              <Select
                labelId={`quantity-select-label-${index}`}
                id={`quantity-select-${index}`}
                value={quantities[index]}
                label="Cantidad"
                onChange={(event) => handleQuantityChange(event, index)}
              >
                <MenuItem value={0}>0</MenuItem>
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
                <MenuItem value={5}>5</MenuItem>
              </Select>
            </FormControl>
          </ImageListItem>
        ))}
      </ImageList>
    <Typography color='primary'>El total es de ${totalAmount}.</Typography>
    </div>
  );
}

const itemData = [
  {
    img: cafeImage,
    title: "Café",
    price: 1000
  },
  {
    img: bagelImage,
    title: "Bagel",
    price: 1950
  },
  {
    img: milkshakeImage,
    title: "Milkshake",
    price: 2700
  },
  {
    img: submarinoImage,
    title: "Submarino",
    price: 2200
  },
  {
    img: teImage,
    title: "Té",
    price: 1000
  },
  {
    img: tostadoImage,
    title: "Tostado",
    price: 2500
  },
  {
    img: tortaImage,
    title: "Torta",
    price: 2800
  },
  {
    img: croissantImage,
    title: "Croissant",
    price: 1300
  },
  {
    img: capuccinoImage,
    title: "Capuccino",
    price: 1900
  },
];
