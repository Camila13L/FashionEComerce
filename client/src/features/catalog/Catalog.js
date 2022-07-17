import React,{ useEffect, useState } from 'react'
import ProductList from "./ProductList";

function Catalog() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("https://localhost:7029/api/Products/")
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
export default Catalog;