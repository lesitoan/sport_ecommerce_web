import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getProductsByName, getProductBySlug, getProducts } from '../services/productsApi';

export const useGetProducts = (filters, isHomePage = false) => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
    filters = { ...filters, page };

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['products', `${filters?.category}`, page, isHomePage],
        queryFn: async () => await getProducts(filters),
        gcTime: isHomePage ? 120 * 1000 : 0,
    });
    if (isError) {
        return { isLoading, error: error.message, data: null };
    }
    return { isLoading, data };
};

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
        throw new Error(error.message);
    }
    return { isLoading, data };
};

export const useGetProduct = (slug) => {
    const {
        isLoading,
        isError,
        data: product,
        error,
    } = useQuery({
        queryKey: ['product', slug],
        queryFn: async () => await getProductBySlug({ slug }),
        gcTime: 0,
    });
    if (isError) {
        return { isLoading, error: error.message, product: null };
    }
    return { isLoading, product };
};
