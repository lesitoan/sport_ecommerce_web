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

export const getProductsByCategory = async ({ category }) => {
    // if (!category) return [];
    const { data: products, error } = await supabase.from('categories').select(`
        categoryName,
        products (*)
      `).eq('categoryName', 'ao_bong_da');
    if (error) {
        throw new Error("có lỗi !!!!!!!!!!");
    }
    return products;
}

