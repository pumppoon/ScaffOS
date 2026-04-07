import React, { useEffect, useState } from 'react';

const UserManager: React.FC = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch user data from user service
        const fetchUserData = async () => {
            const response = await fetch('/api/users'); // Replace with actual endpoint
            const data = await response.json();
            setUsers(data);
        };
        fetchUserData();
    }, []);

    return (
        <div>
            <h2>User Management</h2>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.username} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserManager;