import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
    createOrder as createOrderApi,
    getOrder,
    getOrders,
    deleteOrderById as deleteOrderByIdApi,
} from '../services/ordersApi';
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
            queryClient.invalidateQueries({ queryKey: ['carts'] });
            toast.success(`Đặt hàng thành công !`, {
                position: 'top-center',
            });
        },
    });
    return { createOrder, isLoading, isSuccess };
};

export const useOrders = () => {
    const {
        isLoading,
        isError,
        data: orders,
    } = useQuery({
        queryKey: ['orders'],
        queryFn: async () => await getOrders(),
        gcTime: 0,
    });
    if (isError) {
        return { isLoading, orders: null };
    }
    return { isLoading, orders };
};

export const useOrder = (orderId) => {
    const {
        isLoading,
        isError,
        data: order,
    } = useQuery({
        queryKey: ['order', orderId],
        queryFn: async () => await getOrder(orderId),
        gcTime: 0,
    });
    if (isError) {
        return { isLoading, order: null };
    }
    return { isLoading, order };
};

export const useDeleteOrder = (orderId) => {
    const queryClient = useQueryClient();
    const {
        mutate: deleteOrder,
        isPending: isLoading,
        isSuccess,
    } = useMutation({
        mutationFn: deleteOrderByIdApi,
        onSuccess: () => {
            console.log(orderId);
            queryClient.invalidateQueries({ queryKey: ['order', orderId] });
            toast.success('Hủy đơn hàng thành công !', {
                position: 'top-center',
            });
        },
        onError: (error) => {
            toast.error('Hủy đơn hàng thất bại !', {
                position: 'top-center',
            });
        },
    });
    return { deleteOrder, isLoading, isSuccess };
};
