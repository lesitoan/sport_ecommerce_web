import React, { createContext, useState, useContext, useEffect } from 'react';
import { useUser } from '../hooks/authHook';
import axiosInstance from '../config/axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { isLoading: userLoading, user: currentUser } = useUser();

    useEffect(() => {
        if (!userLoading) {
            setUser(currentUser || null);
            setIsLoading(false);
        }
    }, [currentUser, userLoading]);

    // update user state 'null' in axios instance
    useEffect(() => {
        axiosInstance.setAuthContext({ setUser });
    }, []);

    return <AuthContext.Provider value={{ isLoading, user, setUser }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};
