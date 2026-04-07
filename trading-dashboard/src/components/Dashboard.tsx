import React from 'react';
import Chart from './Chart';
import OrderEntry from './OrderEntry';
import PositionManager from './PositionManager';

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <Chart />
      <OrderEntry />
      <PositionManager />
    </div>
  );
};