import React, { useEffect, useState } from 'react';

const StrategyPerformance: React.FC = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch strategy performance data
        const fetchData = async () => {
            const response = await fetch('/api/strategy-performance');
            const result = await response.json();
            setData(result);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Strategy Performance</h2>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
        </div>
    );
};

export default StrategyPerformance;