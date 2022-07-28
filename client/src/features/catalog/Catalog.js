import React,{ useEffect, useState } from 'react'
import agent from '../../app/api/agent';
import LoadingComponents from '../../app/layout/Loadingcomponents';
import ProductList from "./ProductList";

function Catalog() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list()
      .then((products) => setProducts(products))
      .catch(error => console.log(error))
      .finally(() => setLoading(false))
  }, [])

  if(loading) return <LoadingComponents message={"Loading products..."}/>

  return (
    <>
      <ProductList products={products} />
    </>
  );
}
export default Catalog;