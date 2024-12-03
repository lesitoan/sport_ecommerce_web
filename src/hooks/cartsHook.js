import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
    addProductToCart as addProductToCartApi,
    getCartItemsByUserId,
    updateCartItem as updateCartItemApi,
    deleteShoppingCartById as deleteShoppingCartByIdApi,
} from '../services/cartsApi';
import { toast } from 'react-toastify';

export const useAddProductToCart = () => {
    const {
        mutate: addProductToCart,
        isPending: isLoading,
        isSuccess,
    } = useMutation({
        mutationFn: addProductToCartApi,
        onSuccess: () => {
            toast.success('Thêm sản phẩm thành công !', {
                position: 'top-center',
            });
        },
        onError: (error) => {
            toast.error('Thêm sản phẩm thất bại !', {
                position: 'top-center',
            });
        },
    });

    return { addProductToCart, isLoading, isSuccess };
};

export const UseGetShoppingCart = (userId) => {
    const {
        isPending: isLoading,
        isError,
        data: shoppingCartData,
        error,
    } = useQuery({
        queryKey: ['shoppingCart'],
        queryFn: async () => await getCartItemsByUserId({ userId }),
        gcTime: 15 * 1000, // 15s
    });
    if (isError) {
        throw new Error(error.message);
    }
    return { isLoading, shoppingCartData };
};

export const useUpdateCartItem = () => {
    const queryClient = useQueryClient();
    const {
        mutate: updateCartItem,
        isPending: isLoading,
        isSuccess,
    } = useMutation({
        mutationFn: updateCartItemApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['shoppingCart'] });
            // queryClient.refetchQueries(['shoppingCarts'], { active: true, exact: true });
            toast.success('thay đổi số lượng thành công !', {
                position: 'top-center',
            });
        },
        onError: (error) => {
            toast.error('Thay đổi số lượng thất bại !', {
                position: 'top-center',
            });
        },
    });

    return { updateCartItem, isLoading, isSuccess };
};

export const UseDeleteShoppingCartById = () => {
    const queryClient = useQueryClient();
    const {
        mutate: deleteShoppingCartById,
        isPending: isLoading,
        isSuccess,
    } = useMutation({
        mutationFn: deleteShoppingCartByIdApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['shoppingCart'] });
            // toast.success('thay đổi số lượng thành công !', {
            //     position: 'top-center',
            // });
        },
        onError: (error) => {
            toast.error('Xóa sản phẩm thất bại !', {
                position: 'top-center',
            });
        },
    });

    return { deleteShoppingCartById, isLoading, isSuccess };
};
