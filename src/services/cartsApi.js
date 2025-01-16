import axiosInstance from '../config/axios';
import { handleError } from '../utils/handleError';

export const addProductToCart = async (payload) => {
    try {
        let { quantity, price, productAttributeIds, productId } = payload;
        if (!quantity || !price || !productAttributeIds || !productId) return;
        const res = await axiosInstance.post('/carts', {
            quantity,
            price,
            productAttributeIds,
            productId,
        });
        console.log(res);
        return res.data;
    } catch (error) {
        handleError(error, 'Thêm sản phẩm vào giỏ hàng thất bại');
    }
};

export const getCartItemsByUserId = async () => {
    try {
        const res = await axiosInstance.get('/carts');
        return res.data?.carts;
    } catch (error) {
        handleError(error, 'Lấy thông tin giỏ hàng thất bại');
    }
};

export const deleteShoppingCartById = async (payload) => {
    try {
        const { cartId } = payload;
        const res = await axiosInstance.delete(`/carts/${cartId}`);
        return res.data;
    } catch (error) {
        handleError(error, 'Thay đổi số lượng sản phẩm thất bại');
    }
};

export const updateCartItem = async (payload) => {
    try {
        const { cartId, quantity } = payload;
        const res = await axiosInstance.patch(`/carts/${cartId}`, { quantity });
        return res.data;
    } catch (error) {
        handleError(error, 'Thay đổi số lượng sản phẩm thất bại');
    }
};
