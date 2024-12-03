import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createOrder as createOrderApi, getCartsInOrder, getOrdersByUserId } from '../services/ordersApi';
import { toast } from 'react-toastify';

export const useCreateOrder = () => {
    const queryClient = useQueryClient();
    const {
        mutate: createOrder,
        isPending: isLoading,
        isSuccess,
    } = useMutation({
        mutationFn: createOrderApi,
        onError: (error) => {
            toast.error('Có lỗi xảy ra khi đặt hàng !', {
                position: 'top-center',
            });
        },
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['shoppingCart'] });
            toast.success(`Đặt hàng thành công !`, {
                position: 'top-center',
            });
            localStorage.removeItem('shoppingCard');
        },
    });
    return { createOrder, isLoading, isSuccess };
};

export const useGetOrderByUserId = (userId) => {
    const {
        isPending: isLoading,
        isError,
        data,
        error,
    } = useQuery({
        queryKey: ['orders', userId],
        queryFn: async () => await getOrdersByUserId({ userId }),
        // gcTime: 30 * 1000
    });
    if (isError) {
        throw new Error(error.message);
    }
    const orders = data?.orders;
    return { isLoading, orders };
};

export const useGetCartsInOrder = (orderId) => {
    const {
        isPending: isLoading,
        isError,
        data: carts,
        error,
    } = useQuery({
        queryKey: ['ordersDetails'],
        queryFn: async () => await getCartsInOrder({ orderId }),
        // gcTime: 30 * 1000
    });
    if (isError) {
        throw new Error(error.message);
    }
    return { isLoading, carts };
};
