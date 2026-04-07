import React, { useState } from 'react';

const OrderEntry: React.FC = () => {
  const [order, setOrder] = useState({ symbol: '', quantity: 0, price: 0 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to submit order
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Symbol' onChange={e => setOrder({ ...order, symbol: e.target.value })} />
      <input type='number' placeholder='Quantity' onChange={e => setOrder({ ...order, quantity: Number(e.target.value) })} />
      <input type='number' placeholder='Price' onChange={e => setOrder({ ...order, price: Number(e.target.value) })} />
      <button type='submit'>Submit Order</button>
    </form>
  );
};

export default OrderEntry;