import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import {
    getProductsByName,
    getProductBySlug,
    getProductsByCategory,
    addProductToCart as addProductToCartApi,
    getShoppingCartsByUserId,
    updateCartQuantityById as updateCartQuantityByIdApi,
    deleteShoppingCartById as deleteShoppingCartByIdApi,
} from '../services/productsApi';
import { toast } from 'react-toastify';

export const useGetProductsByName = (slug) => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

    const {
        isPending: isLoading,
        isError,
        data,
        error,
    } = useQuery({
        queryKey: [slug, page],
        queryFn: async () => getProductsByName({ slug, page }),
        gcTime: 60 * 1000, // 60s
    });

    if (isError) {
        console.log('useFindProductsByName Error: ', error.message);
        throw new Error(error.message);
    }
    return { isLoading, data };
};

export const useGetProductsByCategory = (categorySlug) => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

    const {
        isPending: isLoading,
        isError,
        data,
        error,
    } = useQuery({
        queryKey: [categorySlug, page],
        queryFn: async () => await getProductsByCategory({ categorySlug, page }),
        // gcTime: 30 * 1000
    });
    if (isError) {
        console.log('useGetProductsByCategory Error: ', error.message);
        throw new Error(error.message);
    }
    return { isLoading, data };
};

export const useGetProductBySlug = (slug) => {
    const {
        isPending: isLoading,
        isError,
        data: product,
        error,
    } = useQuery({
        queryKey: ['product', slug],
        queryFn: async () => await getProductBySlug({ slug }),
        gcTime: 15 * 1000, // 15s
    });
    if (isError) {
        console.log('Error: ', error.message);
        throw new Error(error.message);
    }
    return { isLoading, product };
};

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
            console.log(error);
            toast.error('Thêm sản phẩm thất bại !', {
                position: 'top-center',
            });
        },
    });

    return { addProductToCart, isLoading, isSuccess };
};

export const useGetShoppingCartsByUserId = (userId) => {
    const {
        isPending: isLoading,
        isError,
        data: shoppingCarts,
        error,
    } = useQuery({
        queryKey: ['shoppingCarts'],
        queryFn: async () => await getShoppingCartsByUserId({ userId }),
        gcTime: 15 * 1000, // 15s
    });
    if (isError) {
        console.log('useshoppingCarts: ', error.message);
        throw new Error(error.message);
    }
    return { isLoading, shoppingCarts };
};

export const UseUpdateCartQuantityById = () => {
    const queryClient = useQueryClient();
    const {
        mutate: updateCartQuantityById,
        isPending: isLoading,
        isSuccess,
    } = useMutation({
        mutationFn: updateCartQuantityByIdApi,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['shoppingCarts'] });
            // queryClient.refetchQueries(['shoppingCarts'], { active: true, exact: true });
            toast.success('thay đổi số lượng thành công !', {
                position: 'top-center',
            });
        },
        onError: (error) => {
            console.log(error);
            toast.error('Thay đổi số lượng thất bại !', {
                position: 'top-center',
            });
        },
    });

    return { updateCartQuantityById, isLoading, isSuccess };
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
            queryClient.invalidateQueries({ queryKey: ['shoppingCarts'] });
            // toast.success('thay đổi số lượng thành công !', {
            //     position: 'top-center',
            // });
        },
        onError: (error) => {
            console.log(error);
            toast.error('Xóa sản phẩm thất bại !', {
                position: 'top-center',
            });
        },
    });

    return { deleteShoppingCartById, isLoading, isSuccess };
};
