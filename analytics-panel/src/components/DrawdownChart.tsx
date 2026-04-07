import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

// Define a type for DrawdownChartData
type DrawdownChartData = {
    labels: string[];
    datasets: Array<{ 
        label: string;
        data: number[];
        backgroundColor: string;
    }>; 
};

const DrawdownChart: React.FC = () => {
    const [chartData, setChartData] = useState<DrawdownChartData | null>(null);

    useEffect(() => {
        // Fetch drawdown chart data
        const fetchData = async () => {
            const response = await fetch('/api/drawdown');
            const result: DrawdownChartData = await response.json();
            setChartData(result);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Drawdown Chart</h2>
            {chartData ? <Line data={chartData} /> : <p>Loading...</p>} 
        </div>
    );
};

export default DrawdownChart;