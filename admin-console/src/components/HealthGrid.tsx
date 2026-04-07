import React, { useEffect, useState } from 'react';

const HealthGrid: React.FC = () => {
    const [healthData, setHealthData] = useState([]);

    useEffect(() => {
        // Fetch health data from monitoring service
        const fetchHealthData = async () => {
            const response = await fetch('/api/health'); // Replace with actual endpoint
            const data = await response.json();
            setHealthData(data);
        };
        fetchHealthData();
    }, []);

    return (
        <div>
            <h2>System Health</h2>
            <ul>
                {healthData.map((item, index) => (
                    <li key={index}>{item.name}: {item.status}</li>
                ))}
            </ul>
        </div>
    );
};

export default HealthGrid;