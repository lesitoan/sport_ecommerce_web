import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/authHook";
import { useEffect } from "react";
import Modal from "./Modal";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { isLoading, isAuthenticated } = useUser();

    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate("/sign-in");
    }, [navigate, isLoading, isAuthenticated])

    if (isLoading) return <div>Loading...</div>;

    if (isAuthenticated) return children;
}

export default ProtectedRoute;