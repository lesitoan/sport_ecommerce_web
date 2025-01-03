import axios from 'axios';
import supabase from '../config/supabase';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true, // Tự động gửi cookie trong mọi yêu cầu
});

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
        if (error.status === 500) {
            throw new Error('Hiện tại có lỗi xảy ra, vui lòng thử lại sau !');
        } else {
            throw new Error('Tạo tài khoản thất bại');
        }
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
        if (error.status === 500) {
            throw new Error('Hiện tại có lỗi xảy ra, vui lòng thử lại sau !');
        } else {
            throw new Error('Đăng nhập thất bại');
        }
    }
};

export const getCurrentUser = async () => {
    try {
        const res = await axiosInstance.get('/orders');
        console.log(res);
        return res.data;
    } catch (error) {
        if (error.status === 500) {
            throw new Error('Hiện tại có lỗi xảy ra, vui lòng thử lại sau !');
        } else {
            throw new Error('Đăng nhập thất bại');
        }
    }
};

// export const getCurrentUser = async () => {
//     const { data: session } = await supabase.auth.getSession();
//     if (!session) return null;

//     const { data, error } = await supabase.auth.getUser();
//     if (error) {
//         throw new Error(error.message);
//     }
//     return data?.user;
// };

export const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
    localStorage.clear();
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
