import axiosInstance from '../config/axios';
import supabase from '../config/supabase';
import { handleError } from '../utils/handleError';

export const signUp = async ({ userName, email, password, passwordConfirm }) => {
    try {
        if (password !== passwordConfirm) return;
        const res = await axiosInstance.post('/auth/signup', {
            userName,
            email,
            password,
            passwordConfirm,
        });
        return res.data;
    } catch (error) {
        handleError(error, 'Tạo tài khoản thất bại');
    }
};

export const signIn = async ({ email, password }) => {
    try {
        if (!email || !password) return;
        const res = await axiosInstance.post('/auth/signin', {
            email,
            password,
        });
        return res.data;
    } catch (error) {
        handleError(error, 'Đăng nhập thất bại');
    }
};

export const getCurrentUser = async () => {
    try {
        const res = await axiosInstance.get('/auth/me');
        // console.log(res.data);
        return res.data;
    } catch (error) {
        // handleError(error, 'Lấy thông tin người dùng thất bại');
        return null;
    }
};

export const logout = async () => {
    try {
        const res = await axiosInstance.get('/auth/logout');
        return null;
    } catch (error) {
        handleError(error, 'Đăng xuất thất bại');
    }
};

export const changePassword = async ({ newPassword }) => {
    if (!newPassword) return null;
    // const { data } = await supabase.auth.updateUser({
    //     data: {
    //         userName: "TOANDZ123"
    //     }
    // })
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) throw new Error(error.message);
};

// export const updateUser = async ({ addressOrder }) => {
//     const { fullName, phoneNumber, address, addressDetail } = addressOrder;
//     if (!fullName || !phoneNumber || !address || !addressDetail) return null;
//     const { error } = await supabase.auth.updateUser({
//         data: {
//             fullName,
//             phoneNumber,
//             address,
//             addressDetail,
//         },
//     });
//     if (error) throw new Error(error.message);
// };
