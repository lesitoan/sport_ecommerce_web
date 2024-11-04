import supabase from '../config/supabase';

export const getAllProducts = async () => {

    const { data: products, error } = await supabase
        .from('products')
        .select('*')
    if (error) {
        throw new Error("có lỗi !!!!!!!!!!");
    }
    return products;
}

export const getProductsByCategory = async ({ categorySlug }) => {
    if (!categorySlug) return [];

    let query = supabase.from('categories').select(`
        *,
        products (*)
    `).eq('categorySlug', `${categorySlug}`);

    const { data, error } = await query;
    if (error) {
        throw new Error("có lỗi !!!!!!!!!!");
    }
    const products = data[0];
    return products;
}

