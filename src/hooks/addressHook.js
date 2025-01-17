import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import {
    addAddress as addAddressApi,
    getAddresses,
    deleteAddressById as deleteAddressByIdApi,
} from '../services/addressApi';

export const useAddresses = () => {
    const {
        isPending: isLoading,
        isError,
        data: addresses,
        error,
    } = useQuery({
        queryKey: ['addresses'],
        queryFn: async () => await getAddresses(),
        gcTime: 3 * 1000, // 3s
    });
    if (isError) {
        return { isLoading, addresses: null };
    }
    return { isLoading, addresses };
};

export const useDeleteAddress = () => {
    const queryClient = useQueryClient();
    const {
        mutate: deleteAddress,
        isPending: isLoading,
        isSuccess,
    } = useMutation({
        mutationFn: deleteAddressByIdApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['addresses'] });
            toast.success('Xóa địa chỉ thành công !', {
                position: 'top-center',
            });
        },
        onError: (error) => {
            toast.error('Xóa địa chỉ thất bại !', {
                position: 'top-center',
            });
        },
    });

    return { deleteAddress, isLoading };
};

export const useAddAddress = () => {
    const queryClient = useQueryClient();
    const {
        mutate: addAddress,
        isPending: isLoading,
        isSuccess,
    } = useMutation({
        mutationFn: addAddressApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['addresses'] });
            toast.success('Thêm địa chỉ thành công !', {
                position: 'top-center',
            });
        },
        onError: (error) => {
            toast.error('Thêm địa chỉ thất bại !', {
                position: 'top-center',
            });
        },
    });

    return { addAddress, isLoading, isSuccess };
};
