import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

const DrawdownChart: React.FC = () => {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        // Fetch drawdown chart data
        const fetchData = async () => {
            const response = await fetch('/api/drawdown');
            const result = await response.json();
            setChartData(result);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Drawdown Chart</h2>
            <Line data={chartData} />
        </div>
    );
};

export default DrawdownChart;