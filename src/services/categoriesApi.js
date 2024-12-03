import supabase from '../config/supabase';

export async function getCategoryBySlug(slug) {
    const { data, error } = await supabase.from('categories').select('*').eq('categorySlug', slug).single();
    if (error) {
        console.error('Error fetching category:', error);
        return null;
    }
    return data;
}

export const getCategories = async () => {
    const { data: categories, error } = await supabase.from('categories').select('*');
    if (error) {
        throw new Error('có lỗi !!!!!!!!!!');
    }
    return categories;
};
