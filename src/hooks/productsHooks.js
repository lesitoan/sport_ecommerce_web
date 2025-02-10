import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';
import { getProductBySlug, getProducts } from '../services/productsApi';

export const useGetProducts = (filters, isHomePage = false) => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
    const sort = searchParams.get('sort') || 'default';
    filters = { ...filters, page, sort };

    const { isLoading, isError, data, error } = useQuery({
        queryKey: ['products', `${filters?.category}`, `${filters?.q}`, page, isHomePage, sort],
        queryFn: async () => await getProducts(filters),
        gcTime: isHomePage ? 120 * 1000 : 0,
    });
    if (isError) {
        return { isLoading, error: error.message, data: null };
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
