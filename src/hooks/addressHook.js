import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import {
    addShippingAddressByUserId as addShippingAddressByUserIdApi,
    getShippingAddressesByUserId,
    deleteShippingAddressById as deleteShippingAddressByIdApi,
} from '../services/addressApi';

export const useAddShippingAddress = () => {
    const queryClient = useQueryClient();
    const {
        mutate: addShippingAddressByUserId,
        isPending: isLoading,
        isSuccess,
    } = useMutation({
        mutationFn: addShippingAddressByUserIdApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['shippingAddresses'] });
            toast.success('Thêm địa chỉ thành công !', {
                position: 'top-center',
            });
        },
        onError: (error) => {
            console.log(error);
            toast.error('Thêm địa chỉ thất bại !', {
                position: 'top-center',
            });
        },
    });

    return { addShippingAddressByUserId, isLoading, isSuccess };
};

export const useGetShippingAddresses = (userId) => {
    const {
        isPending: isLoading,
        isError,
        data: shippingAddresses,
        error,
    } = useQuery({
        queryKey: ['shippingAddresses', userId],
        queryFn: async () => await getShippingAddressesByUserId({ userId }),
        gcTime: 15 * 1000, // 15s
    });
    if (isError) {
        console.log('useGetShippingAddress: ', error.message);
        throw new Error(error.message);
    }
    return { isLoading, shippingAddresses };
};

export const useDeleteShippingAddressById = () => {
    const queryClient = useQueryClient();
    const {
        mutate: deleteShippingAddressById,
        isPending: isLoading,
        isSuccess,
    } = useMutation({
        mutationFn: deleteShippingAddressByIdApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['shippingAddresses'] });
            toast.success('Xóa địa chỉ thành công !', {
                position: 'top-center',
            });
        },
        onError: (error) => {
            console.log(error);
            toast.error('Xóa địa chỉ thất bại !', {
                position: 'top-center',
            });
        },
    });

    return { deleteShippingAddressById, isLoading, isSuccess };
};
