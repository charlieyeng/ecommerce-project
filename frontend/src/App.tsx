import { useState } from 'react'
import './App.css'
import { sampleProducts } from './data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>TS Amazona</header>
      <main>
        {sampleProducts.map((product) => (
          <li key={product.slug}>
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            ></img>
            <h2>{product.name}</h2>
            <p>${product.price}</p>
          </li>
        ))}
      </main>
      <footer>All Rights Reserved</footer>
    </div>
  )
}

export default App
