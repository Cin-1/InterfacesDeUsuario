import { Box, ImageList, ImageListItem } from '@mui/material';
import * as React from 'react';
import cafeImage from '../images/cafe.jpg';
import bagelImage from '../images/bagel.jpg';
import milkshakeImage from '../images/milkshake.jpg';
import submarinoImage from '../images/submarino.jpg'
import tortaImage from '../images/torta.jpg'
import tostadoImage from '../images/tostado.jpg'
import teImage from '../images/te.jpg'
import croissantImage from '../images/croissant.jpg'
import capuccinoImage from '../images/capuccino.jpg'


export default function FotosDeComida() {
  return (
    <ImageList sx={{ width: '100%', height: '100%' }} cols={3}>  
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <p> 
          
          </p>
          <img objectFit='contain'
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
            <button id= {item.img} >{item.title} </button>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  
   {
    
    img: cafeImage,
    title: 'Café',
  },
  {
    img: bagelImage,
    title: 'Bagel',
  },
  {
    img: milkshakeImage,
    title: 'Milkshake',
  },
  {
    img: submarinoImage,
    title: 'Submarino',
  },
  {
    img: teImage,
    title: 'Té',
  },
  {
    img: tostadoImage,
    title: 'Tostado',
  },
  {
    img: tortaImage,
    title: 'Torta',
  },
  {
    img: croissantImage,
    title: 'Croissant',
  },
  {
    img: capuccinoImage,
    title: 'Capuccino',
  },
];