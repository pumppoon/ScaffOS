import React from 'react';
import HealthGrid from './HealthGrid';
import ConfigurationManager from './ConfigurationManager';
import UserManager from './UserManager';

// Dashboard component that aggregates different management tools.
const Dashboard: React.FC = () => {
    return (
        <div>
            {/* Displays system health data */}
            <HealthGrid />
            {/* Provides configuration management functionality */}
            <ConfigurationManager />
            {/* Manages user data and interactions */}
            <UserManager />
        </div>
    );
};

export default Dashboard;