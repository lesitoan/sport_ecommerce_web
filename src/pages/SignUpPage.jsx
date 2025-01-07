import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SignUpForm from '../ui/SignUpForm';
import { useEffect } from 'react';

const SignUpPage = () => {
    const { user } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    return (
        <>
            <SignUpForm />
        </>
    );
};

export default SignUpPage;
