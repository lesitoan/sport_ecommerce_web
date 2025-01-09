import axiosInstance from '../config/axios';
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

export const changePassword = async (payload) => {
    try {
        const { newPassword, newPasswordConfirm, oldPassword } = payload;
        if (newPassword !== newPasswordConfirm) throw new Error('Mật khẩu mới không khớp');
        const res = await axiosInstance.patch('/auth/update-password', {
            oldPassword,
            newPassword,
            newPasswordConfirm,
        });
        return res.data;
    } catch (error) {
        handleError(error, 'Thay đổi mật khẩu thất bại');
    }
};

export const resetPassword = async (payload) => {
    try {
        const { email, userName } = payload;
        if (!email || !userName) throw new Error('Email và userName không được để trống');

        const res = await axiosInstance.patch('/auth/reset-password', {
            email,
            userName,
        });
        console.log(res.data);
        return res.data;
    } catch (error) {
        handleError(error, 'Có lỗi xảy ra khi lấy lại mật khẩu, vui lòng thử lại');
    }
};
