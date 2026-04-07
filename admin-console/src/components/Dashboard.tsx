import React from 'react';
import HealthGrid from './HealthGrid';
import ConfigurationManager from './ConfigurationManager';
import UserManager from './UserManager';

const Dashboard: React.FC = () => {
    return (
        <div>
            <HealthGrid />
            <ConfigurationManager />
            <UserManager />
        </div>
    );
};

export default Dashboard;