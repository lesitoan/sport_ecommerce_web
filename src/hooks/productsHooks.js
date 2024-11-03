import { useQuery } from '@tanstack/react-query';
import { getAllProducts, getProductsByCategory } from '../services/productsApi';

export const useGetAllProducts = () => {
    const { isPending: isLoading, isError, data: products, error } = useQuery({
        queryKey: ['products'],
        queryFn: getAllProducts
    })
    if (isError) {
        console.log("Error: ", error.message);
        throw new Error(error.message);
    }
    return [isLoading, products];
}

export const useGetProductsByCategory = () => {
    const { isPending: isLoading, isError, data: products, error } = useQuery({
        queryKey: ['products'],
        queryFn: getProductsByCategory
    })
    if (isError) {
        console.log("Error: ", error.message);
        throw new Error(error.message);
    }
    return [isLoading, products];
}

