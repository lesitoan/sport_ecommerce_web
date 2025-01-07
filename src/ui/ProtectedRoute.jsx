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
        return (
            <div className="h-[80vh] flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    if (user) {
        return children;
    }
};

export default ProtectedRoute;
