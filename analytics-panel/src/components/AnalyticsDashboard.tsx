import React from 'react';
import StrategyPerformance from './StrategyPerformance';
import DrawdownChart from './DrawdownChart';
import ComparisonTools from './ComparisonTools';

const AnalyticsDashboard: React.FC = () => {
    return (
        <div>
            <StrategyPerformance />
            <DrawdownChart />
            <ComparisonTools />
        </div>
    );
};

export default AnalyticsDashboard;