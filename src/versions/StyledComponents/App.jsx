import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import products from "../common/products";

const Container = styled.main`
  padding: 2rem;
`;
const Title = styled.h1`
  margin-bottom: 1rem;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
`;
const Card = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;
const Btn = styled.button`
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  background: #2563eb;
  color: #fff;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #1d4ed8;
  }
`;

// skeleton animado
const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;
const Skeleton = styled.div`
  height: 280px;
  border-radius: 8px;
  background: linear-gradient(90deg, #e5e7eb 25%, #f3f4f6 50%, #e5e7eb 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.2s infinite;
`;

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Container>
      <Title>Mini Loja</Title>
      <Grid>
        {loading
          ? Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} />)
          : products.map((product) => (
              <Card key={product.id}>
                <Img src={product.image} alt={product.name} loading="lazy" />
                <h2>{product.name}</h2>
                <p style={{ fontWeight: "bold" }}>{product.price}</p>
                <Btn>Adicionar</Btn>
              </Card>
            ))}
      </Grid>
    </Container>
  );
}

export default App;
