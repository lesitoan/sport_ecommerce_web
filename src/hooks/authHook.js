import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
    signUp as signUpApi,
    signIn as signInApi, getCurrentUser,
    logout as logoutApi
} from "../services/authApi";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
    const { mutate: signUp, isPending: isLoading, isSuccess } = useMutation({
        mutationFn: signUpApi,
        onError: (error) => {
            console.log(error);
            toast.error('userName, email trùng lặp hoặc có lỗi xảy ra, vui lòng thử lại !', {
                position: "top-center"
            });
        },
        onSuccess: (data) => {
            toast.success(`Đăng kí tài khoản ${data?.user?.user_metadata?.userName} thành công !`, {
                position: "top-center"
            });
        },
    })
    return { signUp, isLoading, isSuccess };
}

export const useSignIn = () => {
    const queryClient = useQueryClient();
    const { mutate: signIn, isPending: isLoading, isSuccess } = useMutation({
        mutationFn: signInApi,
        onError: (error) => {
            console.log(error);
            toast.error('email hoặc mật khẩu không chính xác !', {
                position: "top-center"
            });
        },
        onSuccess: (data) => {
            console.log(data);
            queryClient.setQueryData(["user"], data.user);
            // const accessToken = data?.session?.access_token;
            // const refreshToken = data?.session?.refresh_token;
            // const userId = data?.user?.id;
            // localStorage.setItem("actk", accessToken);
            // localStorage.setItem("retk", refreshToken);
            // localStorage.setItem("userId", userId);
            toast.success(`Đăng nhập thành công !`, {
                position: "top-center"
            });
        },
    })
    return { signIn, isLoading, isSuccess };
}

export const useUser = () => {
    const { isLoading, data: user } = useQuery({
        queryKey: ["user"],
        queryFn: getCurrentUser,
    });

    return { isLoading, user, isAuthenticated: user?.role === 'authenticated' };
}

export const useLogout = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const { mutate: logout, isLoading } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.removeQueries(); // xóa catch
            navigate("/", { replace: true });
        }
    })

    return { logout, isLoading };
}

