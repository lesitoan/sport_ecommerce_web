import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from "react-router-dom";
import { findProductsByName, getAllProducts, getProductsByCategory } from '../services/productsApi';

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

export const useFindProductsByName = (slug) => {
    const [searchParams] = useSearchParams();
    const page = searchParams.get("page") ? Number(searchParams.get("page")) : 1;

    const { isPending: isLoading, isError, data: { products, count } = {}, error } = useQuery({
        queryKey: [slug, page],
        queryFn: async () => findProductsByName({ slug, page })
    })

    if (isError) {
        console.log("Error: ", error.message);
        throw new Error(error.message);
    }
    return [isLoading, products, count];
}


export const useGetProductsByCategory = (categorySlug) => {
    const { isPending: isLoading, isError, data: products, error } = useQuery({
        queryKey: [categorySlug],
        queryFn: async () => await getProductsByCategory({ categorySlug, limit: 5 })
    })
    if (isError) {
        console.log("Error: ", error.message);
        throw new Error(error.message);
    }
    return [isLoading, products];
}

