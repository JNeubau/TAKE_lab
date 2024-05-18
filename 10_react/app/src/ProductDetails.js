import './App.css';
import React from 'react';
import { useParams, Link } from 'react-router-dom';

import { Box } from '@mui/material';

function ProductDetails({products}) {

  const { id } = useParams();
  const product = products.filter(product => product.id.toString() === id);
  // const { title, category, brand, description, price, thumbnail } = null;

  if (product.length === 0) {
    return null;
  } 

  const { title, category, brand, description, price, thumbnail } = product[0];
  // else {
  //   title = product[[0]].title;
  //   category = product[0].category;
  //   brand = product[0].brand;
  //   description = product[0].description;
  //   price = product[0].price;
  //   thumbnail  = product[0].thumbnail;
  // }

  return (
    <div className="container-fluid">
      <Box>
      <h1>{title}</h1>
      <h5>
        <span>Category: {category}</span><br/>
        <span>Brand: {brand}</span><br/>
        <span>Description: {description}</span><br/>
        <span>Price: {price}</span>
      </h5>
      <img src={thumbnail} alt={title} />
      <Link to="/">Back</Link>
      </Box>
    </div>
  );
}

export default ProductDetails;
