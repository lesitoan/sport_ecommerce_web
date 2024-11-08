import { useLocation } from 'react-router-dom';
import supabase from '../config/supabase';
import { NUMBER_ITEM_PER_PAGE } from '../utils/constant';


export const findProductsByName = async ({ slug, page }) => {

    let query = supabase.from('products').select('*', { count: "exact" });
    if (slug) query = query.like('slug', `%${slug}%`)
    if (page) {
        const begin = (page - 1) * NUMBER_ITEM_PER_PAGE;
        const end = begin + NUMBER_ITEM_PER_PAGE - 1;
        query = query.range(begin, end);
    }
    const { data: products, error, count } = await query;
    if (error) {
        throw new Error("có lỗi !!!!!!!!!!");
    }
    return { products, count };
}

export const getProductsByCategory = async ({ categorySlug, page }) => {
    if (!categorySlug) return [];

    let query = supabase.from('categories').select(`
        *,
        products (*)
    `).eq('categorySlug', `${categorySlug}`);

    let { data, error } = await query;

    if (error) {
        throw new Error("có lỗi !!!!!!!!!!");
    }
    if (data.length == 0 || data[0]?.products.length == 0) return {}

    const count = data[0]?.products.length;
    if (page) {
        const begin = (page - 1) * NUMBER_ITEM_PER_PAGE;
        const end = begin + NUMBER_ITEM_PER_PAGE;
        if (data[0] && data[0].products.length > 0) {
            const products = data[0].products.slice(begin, end);
            data = { ...data[0], products, count };
        }
    }
    return data;
}

export const getProductBySlug = async ({ slug }) => {
    if (!slug) return null;
    let query = supabase.from('products').select('*').eq('slug', `${slug}`);
    const { data, error } = await query;
    if (error) {
        throw new Error("có lỗi !!!!!!!!!!");
    }
    if (data.length == 0) return null;
    return data[0];
}



