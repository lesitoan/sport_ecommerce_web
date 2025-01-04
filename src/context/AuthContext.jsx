import React, { createContext, useState, useContext, useEffect } from 'react';
import { useSignIn, useUser } from '../hooks/authHook';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const { signIn, isLoading: siginLoading, isSuccess, user: data } = useSignIn();
    const { user: currentUser } = useUser();

    const signin = async (email, password) => {
        await signIn({ email, password });
        console.log(isSuccess);
        if (isSuccess) {
            console.log('dsdsd');
            setUser(data);
        }
    };

    useEffect(() => {
        if (currentUser) {
            setUser(currentUser);
        } else {
            setUser(null);
        }
    }, [isSuccess, data, currentUser]);
    // const { data: userAPiData } = useUser();
    // const signin = async (email, password) => {
    //     await signIn({ email, password });
    //     if (isSuccess && userAPi) {
    //         setUser(userAPi);
    //     }
    // };

    // useEffect(() => {
    //     if (userAPi) {
    //         setUser(userAPi);
    //     } else {
    //         setUser(null);
    //     }
    // }, [isSuccess, userAPi]);

    return <AuthContext.Provider value={{ user, setUser, signin, siginLoading }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
};
