import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import {Header} from './components/Header.jsx';
import Banner from './components/Banner.jsx';
import products from './data/main-data.js';
import { Container } from "@mui/material";
import ProductSection from './components/ProductSection.jsx';


function App() {
  const newProducts = products.filter((p) => p.category === "new");
  const saleProducts = products.filter((p) => p.category === "sale");
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner />
      <Container>
        <ProductSection title="Новинки" products={newProducts} />
        <ProductSection title="Скидки" products={saleProducts} />
      </Container>

    </>
  )
}

export default App
