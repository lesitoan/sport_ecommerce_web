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

export const getProductsByCategory = async ({ categoryName }) => {
    if (!categoryName) return [];
    const { data: products, error } = await supabase.from('products').select(`
        id,
        categories ( categoryName ),
        clubAndNationalTeams (clubName)
      `).eq('categories.categoryName', 'ao_bong_da')
    if (error) {
        throw new Error("có lỗi !!!!!!!!!!");
    }
    return products;
}

