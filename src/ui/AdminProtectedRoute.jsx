import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Spinner from './Spinner';

const AdminProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { isLoading, user } = useAuth();

    useEffect(() => {
        if (!user && !isLoading) {
            navigate('/sign-in');
        } else if (user && user.role !== 'admin') {
            navigate('/');
        }
    }, [navigate, user, isLoading]);

    if (isLoading) return <Spinner size={'lg'} css={'w-full h-[100vh]'} />;

    if (user && user.role === 'admin') {
        return children;
    }
};

export default AdminProtectedRoute;
