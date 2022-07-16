import React, {useState, useEffect} from 'react'
import './styles.css';

function App() {
  const [products, setProducts] = useState([
    {name: 'product 1', price: 100.00},
    {name: 'product 2', price: 200.00},
  ])

  useEffect(() => {
    fetch("https://localhost:7029/api/Products/")
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
  
  return (
    <div>
      <h1>Re-Store</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>{product.name} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
