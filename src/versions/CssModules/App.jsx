import React, { useState, useEffect } from "react";
import products from "../common/products";
import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Mini Loja</h1>

      <div className={styles.grid}>
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className={`${styles.card} ${styles.skeleton}`}></div>
            ))
          : products.map((product) => (
              <div key={product.id} className={styles.card}>
                <img src={product.image} alt={product.name} className={styles.cardImg} loading="lazy" />
                <h2 className={styles.cardTitle}>{product.name}</h2>
                <p className={styles.cardPrice}>{product.price}</p>
                <button className={styles.btn}>Adicionar</button>
              </div>
            ))}
      </div>
    </main>
  );
}

export default App;
