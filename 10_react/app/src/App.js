import './App.css';
import ProductList from './ProductList.js';
import ProductDetails from './ProductDetails.js';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, createBrowserRouter,RouterProvider } from 'react-router-dom';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        const products = response.data.products;
        setProducts(products);
      }).catch(error => console.error("There was an error!", error));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProductList products={products} key={products.id}/>,
    },
    {
      path: "details/:id",
      element: <ProductDetails products={products} />,
    },
  ]);
  
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/"
            element={<ProductList products={products} />} />
          <Route path="details/:id"
            element={<ProductDetails products={products} />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
