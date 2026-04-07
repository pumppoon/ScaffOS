import React, { createContext, useContext, useState } from 'react';

const AdminContext = createContext(null);

export const AdminProvider: React.FC = ({ children }) => {
    const [state, setState] = useState({});

    return (
        <AdminContext.Provider value={{ state, setState }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdminContext = () => useContext(AdminContext);