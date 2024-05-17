import './App.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';

import { List, ListItem, TextField, Box, FormLabel } from '@mui/material';

function ProductList() {

  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('');

  // const data = [{id: 1, title: "iPhone 14", brand: "Apple"},
  //   {id: 2, title: "iPad Air", brand: "Apple"},
  //   {id: 3, title: "Galaxy A51", brand: "Samsung"}]

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        const products = response.data.products;
        setProducts(products);
      }).catch(error => console.error("There was an error!", error));
  }, []);

  function ProductItem({title, brand }) {
    return <ListItem alignItems="flex-start">{title} ({brand})</ListItem>;
  }

  return (
    <div className="container-fluid">
      <h1>List of products</h1>
      <Box>
        <FormLabel>Filter by product title: </FormLabel>
        <TextField type="text" value={filter} onChange={e => setFilter(e.target.value)}></TextField>
      </Box>
      <Box sx={{ width: '100%', bgcolor: '#f5d6c9' }}>
        <List component="nav" aria-label="main mailbox folders">
          <ul>
            {products
            .filter(product => product.title.toUpperCase().includes(filter.toUpperCase()))
            .map((product => (
              <ProductItem key={product.id} title={product.title} brand={product.brand}/>
            )))}
          </ul>
        </List>
      </Box>
    </div>
  );
}

export default ProductList;
