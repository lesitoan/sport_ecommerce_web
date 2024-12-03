import React, { createContext, useState, useContext, useEffect } from 'react';
import { useSignIn, useUser } from '../hooks/authHook';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const { signIn, isLoading: siginInLoading, isSuccess, data } = useSignIn();
    const {user: currentUser} = useUser();

    const signin = async (email, password) => {
        await signIn({ email, password });
        if(isSuccess && data) {
            setUser(data.user);
        }
    };
    
    useEffect(() => {
 if(currentUser) {
        setUser(currentUser);
        } else {
            setUser(null);
        }
    }, [isSuccess, data, currentUser]);

    return (
        <AuthContext.Provider value={{ user,setUser, signin, siginInLoading}}>
            {children}
            </AuthContext.Provider>
    )
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within a AuthProvider');
    }
    return context;
}
