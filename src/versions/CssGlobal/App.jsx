import React, { useState, useEffect } from "react";
import products from "../common/products";
import "./global.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="container">
      <h1 className="title">Mini Loja</h1>

      <div className="grid">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="card skeleton"></div>
            ))
          : products.map((product) => (
              <div key={product.id} className="card">
                <img src={product.image} alt={product.name} className="card-img" loading="lazy" />
                <h2 className="card-title">{product.name}</h2>
                <p className="card-price">{product.price}</p>
                <button className="btn">Adicionar</button>
              </div>
            ))}
      </div>
    </main>
  );
}

export default App;
