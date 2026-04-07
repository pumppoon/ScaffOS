import React from 'react';
import { render } from '@testing-library/react';
import Chart from '../src/components/Chart';

jest.mock('../src/services/tradingService', () => ({
  fetchRealTimeData: jest.fn().mockResolvedValue([]),
}));

test('renders Chart component', () => {
  render(<Chart />);
});
