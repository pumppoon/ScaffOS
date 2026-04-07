import React from 'react';
import HealthGrid from './HealthGrid';
import ConfigurationManager from './ConfigurationManager';

const Dashboard: React.FC = () => {
    return (
        <div>
            <HealthGrid />
            <ConfigurationManager />
        </div>
    );
};

export default Dashboard;