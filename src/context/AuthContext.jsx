import React, { createContext, useState, useContext, useEffect } from 'react';
import { useUser } from '../hooks/authHook';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const { isLoading, user: currentUser } = useUser();

    useEffect(() => {
        if (currentUser) {
            setUser(currentUser);
        } else {
            setUser(null);
        }
    }, [currentUser]);

    return <AuthContext.Provider value={{ isLoading, user, setUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};
