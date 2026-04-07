import React, { useState } from 'react';
import { submitOrder } from '../services/tradingService';

interface OrderDetails {
  symbol: string;
  quantity: number;
  price: number;
}

const OrderEntry: React.FC = () => {
  const [orderDetails, setOrderDetails] = useState<OrderDetails>({ symbol: '', quantity: 0, price: 0 });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setOrderDetails(prev => ({ ...prev, [name]: name === 'quantity' || name === 'price' ? Number(value) : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitOrder(orderDetails);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' name='symbol' placeholder='Symbol' onChange={handleInputChange} />
      <input type='number' name='quantity' placeholder='Quantity' onChange={handleInputChange} />
      <input type='number' name='price' placeholder='Price' onChange={handleInputChange} />
      <button type='submit'>Submit Order</button>
    </form>
  );
};

export default OrderEntry;