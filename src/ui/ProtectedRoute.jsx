import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        if (!user) navigate('/sign-in');
        if(user?.user_metadata?.role === 'admin') navigate('/admin');
    }, [navigate, user]);

    return children;
};

export default ProtectedRoute;
