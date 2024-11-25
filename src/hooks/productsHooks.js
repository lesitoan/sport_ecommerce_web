import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { findProductsByName, getProductBySlug, getProductsByCategory } from '../services/productsApi';

export const useFindProductsByName = (slug) => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

    const {
        isPending: isLoading,
        isError,
        data,
        error,
    } = useQuery({
        queryKey: [slug, page],
        queryFn: async () => findProductsByName({ slug, page }),
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
