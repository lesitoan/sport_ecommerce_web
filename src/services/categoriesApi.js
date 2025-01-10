import axiosInstance from '../config/axios';
import { handleError } from '../utils/handleError';

export const getCategories = async () => {
    try {
        const res = await axiosInstance.get('/categories');
        return res?.data?.data?.categories;
    } catch (error) {
        handleError(error, 'Lấy danh mục thất bại');
    }
};
