import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import ProductListings from './components/ProductListings'
import Header from './components/Header'



const apiUrl = 'http://localhost:8000';
axios.interceptors.request.use(
  config => {
    const { origin } = new URL(config.url);
    const allowedOrigins = [apiUrl];
    const token = localStorage.getItem('token');
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);




function App() {
  
  const [products, setProducts] = useState([])
  useEffect(() => {
      axios.get(`${apiUrl}/api/products`).then(res => {
        setProducts(res.data)
        console.log(products)
      })
    }, [])
    
  const items = products.map(item => {
    return (<ProductListings 
      key={item.id}
      name={item.name}
      description={item.description}
      price={item.price}
      quantity={item.quantity}
      photo_url={item.photo_url}
      />)
  })
  console.log('its me', items)
console.log(products)
return (
    <>
      <Header/>
      {items}
    </>
  );
}
export default App;