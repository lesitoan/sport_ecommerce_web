import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import ResetPwForm from '../ui/ResetPwForm';
import { useNavigate } from 'react-router-dom';

const ResetPasswordPage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <>
            <ResetPwForm />
        </>
    );
};

export default ResetPasswordPage;
