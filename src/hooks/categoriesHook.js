import { useQuery } from '@tanstack/react-query';
import supabase from '../config/supabase';

const getCategories = async () => {

    const { data: categories, error } = await supabase
        .from('categories')
        .select('*')
    if (error) {
        throw new Error("có lỗi !!!!!!!!!!");
    }
    return categories;
}

export const useGetCategories = () => {
    const { isPending: isLoading, isError, data: categories, error } = useQuery({
        queryKey: ['categories'],
        queryFn: getCategories
    })
    if (isError) {
        console.log("Error: ", error.message);
        throw new Error(error.message);
    }
    return [isLoading, categories];
}
