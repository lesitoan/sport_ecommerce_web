import React, { createContext, useState, useContext, useEffect } from 'react';
import { useSignIn, useUser } from '../hooks/authHook';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const { signIn, isLoading: siginLoading, isSuccess, user: userAPi } = useSignIn();

    const signin = async (email, password) => {
        await signIn({ email, password });
        if (isSuccess && userAPi) {
            setUser(userAPi);
        }
    };

    useEffect(() => {
        if (userAPi) {
            setUser(userAPi);
        } else {
            setUser(null);
        }
    }, [isSuccess, userAPi]);

    return <AuthContext.Provider value={{ user, setUser, signin, siginLoading }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};
