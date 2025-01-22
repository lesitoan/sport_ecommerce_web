import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Spinner from '../ui/Spinner';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { user, isLoading } = useAuth();

    useEffect(() => {
        if (!user && !isLoading) {
            navigate('/sign-in');
        } else if (user?.role === 'admin') navigate('/admin');
    }, [navigate, user, isLoading]);

    if (isLoading) {
        return <Spinner size={'lg'} css={'w-full h-full'} />;
    }

    if (user) {
        return children;
    }
};

export default ProtectedRoute;
