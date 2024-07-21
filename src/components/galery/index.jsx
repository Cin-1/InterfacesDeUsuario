import React, { useState, useEffect } from 'react';
import { ImageList, ImageListItem, FormControl, InputLabel, Select, MenuItem, Typography } from "@mui/material";


const precioAleatorio = () => {
  const min = 1000;
  const max = 2500;
  const randomPrice = Math.floor(Math.random() * ((max - min) / 50 + 1)) * 50 + min;
  return randomPrice;
};

export function Galery() {
  const [totalAmount, setTotalAmount] = useState(0);
  const [quantities, setQuantities] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://api.sampleapis.com/coffee/hot')
      .then(res => res.json())
      .then(data => {
        const itemsWithPrices = data.map(item => ({ ...item, price: precioAleatorio() }));
        setItems(itemsWithPrices);
        setQuantities(Array(itemsWithPrices.length).fill(0));
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleQuantityChange = (event, index) => {
    const newQuantities = [...quantities];
    newQuantities[index] = event.target.value;
    setQuantities(newQuantities);

    const newTotalAmount = items.reduce((total, item, idx) => {
      return total + item.price * newQuantities[idx];
    }, 0);

    setTotalAmount(newTotalAmount);
  };

  return (
    <div id="menu">
      <Typography variant="h6">Total: ${totalAmount.toFixed(2)}</Typography>
      <ImageList sx={{ width: "100%" }} cols={3} rowHeight="auto">
        {items.map((item, index) => (
          <ImageListItem key={item.id} style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center',
            justifyContent: 'center',
            height: 'auto'
          }}>
            <div style={{ 
              width: '100%', 
              minHeight: '200px', 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              overflow: 'hidden' 
            }}>
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                style={{
                  maxWidth: '100%', 
                  height: 'auto',
                  objectFit: 'contain' 
                }}
              />
            </div>
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
      <Typography color='primary'>El total es de ${totalAmount.toFixed(2)}.</Typography>
    </div>
  );
}
