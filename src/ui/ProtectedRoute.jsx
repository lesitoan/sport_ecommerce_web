import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import Spinner from '../ui/Spinner';

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="h-[80vh] flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    if (!currentUser && !isLoading) {
        navigate('/sign-in');
    }

    useEffect(() => {
        if (!user) navigate('/sign-in');
        if (user?.user_metadata?.role === 'admin') navigate('/admin');
    }, [navigate, user]);

    return children;
};

export default ProtectedRoute;
