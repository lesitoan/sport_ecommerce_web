import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
    signUp as signUpApi,
    signIn as signInApi,
    getCurrentUser,
    logout as logoutApi,
    changePassword as changePasswordApi,
    // updateUser as updateUserApi,
} from '../services/authApi';
import { toast } from 'react-toastify';

export const useSignUp = () => {
    const {
        mutate: signUp,
        isPending: isLoading,
        isSuccess,
    } = useMutation({
        mutationFn: signUpApi,
        onError: (error) => {
            console.log(error);
            toast.error(error.message, {
                position: 'top-center',
            });
        },
        onSuccess: () => {
            toast.success(`Đăng kí tài khoản thành công !`, {
                position: 'top-center',
            });
        },
    });
    return { signUp, isLoading, isSuccess };
};

export const useSignIn = () => {
    const queryClient = useQueryClient();
    const {
        mutate: signIn,
        isPending: isLoading,
        isSuccess,
        data,
    } = useMutation({
        mutationFn: signInApi,
        onError: (error) => {
            console.log(error);
            toast.error(error.message, {
                position: 'top-center',
            });
        },
        onSuccess: (data) => {
            queryClient.setQueryData(['user'], data?.data?.user);

            toast.success(`Đăng nhập thành công !`, {
                position: 'top-center',
            });
        },
    });
    return { signIn, isLoading, isSuccess, user: data?.data?.user };
};

export const useUser = () => {
    const { isLoading, data, error } = useQuery({
        queryKey: ['user'],
        queryFn: getCurrentUser,
        retry: 1,
    });
    if (error) {
        return { isLoading, user: null };
    }
    const user = data?.data?.user;
    return { isLoading, user };
};

export const useLogout = () => {
    // const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {
        mutate: logout,
        isPending: isLoading,
        isSuccess,
    } = useMutation({
        mutationFn: logoutApi,
        onSuccess: () => {
            queryClient.removeQueries(); // xóa catch
            // navigate('/', { replace: true });
        },
    });

    return { logout, isLoading, isSuccess };
};

export const useChangePassword = () => {
    const {
        mutate: changePassword,
        isPending: isLoading,
        isSuccess,
    } = useMutation({
        mutationFn: changePasswordApi,
        onSuccess: () => {
            toast.success('Đổi mật khẩu thành công !', {
                position: 'top-center',
            });
        },
        onError: (error) => {
            console.log(error);
            toast.error('Đổi mật khẩu thất bại !', {
                position: 'top-center',
            });
        },
    });

    return { changePassword, isLoading, isSuccess };
};

// export const useUpdateUser = () => {
//     const {
//         mutate: updateUser,
//         isPending: isLoading,
//         isSuccess,
//     } = useMutation({
//         mutationFn: updateUserApi,
//         onSuccess: () => {
//             toast.success('Thay đổi địa chỉ giao hàng thành công !', {
//                 position: 'top-center',
//             });
//         },
//         onError: (error) => {
//             console.log(error);
//             toast.error('Thay đổi địa chỉ thất bại !', {
//                 position: 'top-center',
//             });
//         },
//     });

//     return { updateUser, isLoading, isSuccess };
// };
