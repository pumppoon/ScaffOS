import React, { useEffect, useState } from 'react';
import { log } from '../utils/logger';

const StrategyPerformance: React.FC = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const requestId = Math.random().toString(36).substring(2);
            log('Fetching strategy performance data', { requestId });
            const startTime = performance.now();
            try {
                const response = await fetch('/api/strategy-performance');
                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);
                const endTime = performance.now();
                log('Successfully fetched data', { requestId, duration: endTime - startTime });
            } catch (error) {
                log('Error fetching strategy performance data', { requestId, error: error.message });
            }
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