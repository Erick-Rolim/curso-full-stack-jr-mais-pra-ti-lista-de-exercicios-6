import React, { useState, useEffect } from "react";
import products from "../common/products";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="p-8">
      <h1 className="mb-4 text-2xl font-bold">Mini Loja</h1>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-72 bg-gray-200 animate-pulse rounded-lg"
              ></div>
            ))
          : products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-gray-300 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition"
              >
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg" loading="lazy" />
                <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>
                <p className="font-bold text-gray-800">{product.price}</p>
                <button className="mt-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition">
                  Adicionar
                </button>
              </div>
            ))}
      </div>
    </main>
  );
}

export default App;
