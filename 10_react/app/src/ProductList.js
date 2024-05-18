import './App.css';
import React, {useState } from 'react';
import { Link } from 'react-router-dom';

import { List, ListItem, TextField, Box, FormLabel } from '@mui/material';

function ProductList({products}) {

  const [filter, setFilter] = useState('');

  function ProductItem({id, title, brand }) {
    return (
    <ListItem alignItems="flex-start">
        <Link to={`/details/${id}`}>{title}</Link> ({brand})
      </ListItem>);
  }

  return (
    <div className="container-fluid">
      <h1>List of products</h1>
      <Box>
        <FormLabel>Filter by product title: </FormLabel>
        <TextField type="text" value={filter} onChange={e => setFilter(e.target.value)}></TextField>
      </Box>
      <Box sx={{ maxWidth: '100%', marginLeft: '10px', marginRight: '10px', bgcolor: '#f5d6c9', border: 1, borderTop: 0, borderColor: 'white', borderRadius: '16px' }}>
        <List component="nav" aria-label="main mailbox folders">
          <ul>
            {products
            .filter(product => product.title.toUpperCase().includes(filter.toUpperCase()))
            .map((product => (
              <ProductItem key={product.id} id={product.id} title={product.title} brand={product.brand}/>
            )))}
          </ul>
        </List>
      </Box>
    </div>
  );
}

export default ProductList;
