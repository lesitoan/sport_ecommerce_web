import supabase from '../config/supabase';

import { getCategoryBySlug } from './categoryApi';
import { NUMBER_ITEM_PER_PAGE } from '../utils/constant';

export const findProductsByName = async ({ slug, page }) => {
    let query = supabase
        .from('products')
        .select(`id,productName,price,slug,images (url,isThumbnail)`, { count: 'exact' });

    if (slug) query = query.like('slug', `%${slug}%`);
    if (page) {
        const begin = (page - 1) * NUMBER_ITEM_PER_PAGE;
        const end = begin + NUMBER_ITEM_PER_PAGE - 1;
        query = query.range(begin, end);
    }
    const { data: products, error, count } = await query;
    if (error) {
        console.log('findProductsByName err:  ', error.message);
        throw new Error(error.message);
    }
    return { products, count };
};

export const getProductsByCategory = async ({ categorySlug, page }) => {
    if (!categorySlug) return [];

    // let query = supabase
    //     .from('categories')
    //     .select(
    //         `
    //     *,
    //     products (*)
    // `,
    //     )
    //     .eq('categorySlug', `${categorySlug}`);

    // let { data, error } = await query;

    // if (error) {
    //     console.log('getProductsByCategory err:  ', error.message);
    //     throw new Error(error.message);
    // }
    // if (data.length === 0 || data[0]?.products.length === 0) return {};

    // const count = data[0]?.products.length;
    // if (page) {
    //     const begin = (page - 1) * NUMBER_ITEM_PER_PAGE;
    //     const end = begin + NUMBER_ITEM_PER_PAGE;
    //     if (data[0] && data[0].products.length > 0) {
    //         const products = data[0].products.slice(begin, end);
    //         data = { ...data[0], products, count };
    //     }
    // }
    // return data;
    const categoryData = await getCategoryBySlug(categorySlug);
    if (!categoryData || !categoryData?.id) return {};

    let query = supabase
        .from('products')
        .select(`id,productName,price,slug,images (url,isThumbnail)`, { count: 'exact' })
        .eq('categoryId', categoryData.id);

    if (page) {
        const begin = (page - 1) * NUMBER_ITEM_PER_PAGE;
        const end = begin + NUMBER_ITEM_PER_PAGE - 1;
        query = query.range(begin, end);
    }

    const { data: products, error, count } = await query;
    if (error) {
        console.log('getProductsByCategory err:  ', error.message);
        throw new Error(error.message);
    }

    const data = {
        category: {
            categoryName: categoryData.categoryName,
            categorySlug: categoryData.categorySlug,
        },
        products,
        count,
    };
    return data;
};

export const getProductBySlug = async ({ slug }) => {
    if (!slug) return null;
    console.log('slug: ', slug);
    let query = supabase
        .from('products')
        .select(`id,productName,price,slug,images (url,isThumbnail)`)
        .eq('slug', `${slug}`)
        .single();
    const { data: product, error } = await query;
    if (error) {
        throw new Error('getProductBySlug err:  ', error.message);
    }
    //get attributes
    const attributes = await getAttributesByProductId({ id: product.id });
    if (attributes) product.attributes = attributes;
    console.log('product: ', product);
    return product;
};

export const getAttributesByProductId = async ({ id }) => {
    if (!id) return null;
    console.log('id: ', id);
    let { data, error } = await supabase
        .from('productDetails')
        .select(`quantity, attributes (name, value, price)`)
        .eq('productId', id);
    if (error) {
        throw new Error('getAttributesByProductId err:  ', error.message);
    }
    data = data.map((item) => {
        return {
            quantity: item.quantity,
            name: item.attributes.name,
            value: item.attributes.value,
            price: item.attributes.price,
        };
    });

    return data;
};
