import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';

const AdminProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { user } = useAuth();

    useEffect(() => {
        if (!user?.user_metadata?.role || user?.user_metadata?.role !== 'admin') navigate('/');
    }, [navigate, user]);

    return children;
};

export default AdminProtectedRoute;
