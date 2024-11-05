import { useLocation } from 'react-router-dom';
import supabase from '../config/supabase';
import { NUMBER_ITEM_PER_PAGE } from '../utils/constant';

export const getAllProducts = async () => {
    let query = supabase.from('products').select('*');
    const { data: products, error } = await query;
    if (error) {
        throw new Error("có lỗi !!!!!!!!!!");
    }
    return products;
}

export const findProductsByName = async ({ slug, page }) => {

    let query = supabase.from('products').select('*', { count: "exact" });
    if (slug) query = query.like('slug', `%${slug}%`)
    if (page) {
        const begin = (page - 1) * NUMBER_ITEM_PER_PAGE;
        const end = begin + NUMBER_ITEM_PER_PAGE;
        query = query.range(begin, end);
    }
    const { data: products, error, count } = await query;
    if (error) {
        throw new Error("có lỗi !!!!!!!!!!");
    }
    return { products, count };
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

