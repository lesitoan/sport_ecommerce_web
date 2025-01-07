import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import SignInForm from '../ui/SignInForm';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user]);

    return (
        <>
            <SignInForm />
        </>
    );
};

export default SignInPage;
