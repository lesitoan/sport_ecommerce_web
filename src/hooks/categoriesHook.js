import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../services/categoryApi';

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
        console.log('Error: ', error.message);
        throw new Error(error.message);
    }
    return [isLoading, categories];
};
