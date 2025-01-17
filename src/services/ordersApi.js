import supabase from '../config/supabase';
import { handleError } from '../utils/handleError';
import axiosInstance from '../config/axios';

export const createOrder = async (shippingInfo) => {
    try {
        const { addressDetail, ward, district, province, phoneNumber, fullName } = shippingInfo;
        const res = await axiosInstance.post('/orders', {
            address: {
                addressDetail,
                ward,
                district,
                province,
                phoneNumber,
                fullName,
            },
        });
        return res.data;
    } catch (error) {
        handleError(error, 'Tạo đơn hàng thất bại');
    }
};

export const getOrders = async () => {
    try {
        const res = await axiosInstance.get('/orders');
        return res.data?.orders;
    } catch (error) {
        handleError(error, 'Lấy đơn hàng thất bại');
    }
};

export const getOrder = async (orderId) => {
    try {
        if (!orderId) return null;
        const res = await axiosInstance.get(`/orders/${orderId}`);
        return res.data?.order;
    } catch (error) {
        handleError(error, 'Lấy đơn hàng thất bại');
    }
};

export const deleteOrderById = async (orderId) => {
    try {
        const res = await axiosInstance.delete(`/orders/${orderId}`);
        return res.data;
    } catch (error) {
        handleError(error, 'Xóa đơn hàng thất bại');
    }
};
