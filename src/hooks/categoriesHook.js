import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../services/categoriesApi';

export const useGetCategories = () => {
    const {
        isPending: isLoading,
        isError,
        data: categories,
        error,
    } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories,
    });
    if (isError) {
        throw new Error(error.message);
    }
    return [isLoading, categories];
};
