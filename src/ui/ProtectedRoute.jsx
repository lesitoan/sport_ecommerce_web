import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/authHook";
import { useEffect } from "react";
import Modal from "./Modal";
import Spinner from "./Spinner";

const ProtectedRoute = ({ children }) => {
    const navigate = useNavigate();
    const { isLoading, isAuthenticated } = useUser();

    useEffect(() => {
        if (!isAuthenticated && !isLoading) navigate("/sign-in");
    }, [navigate, isLoading, isAuthenticated])

    if (isLoading) return (
        <div className="w-[100vw] h-[100vh] flex justify-center items-center">
            <Spinner />
        </div>
    );

    if (isAuthenticated) return children;
}

export default ProtectedRoute;