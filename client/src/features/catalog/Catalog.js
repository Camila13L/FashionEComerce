import React,{ useEffect, useState } from 'react'
import agent from '../../app/api/agent';
import ProductList from "./ProductList";

function Catalog() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    agent.Catalog.list().then((products) => setProducts(products))
  }, [])

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
export default Catalog;