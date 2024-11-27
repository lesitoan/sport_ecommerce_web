import supabase from '../config/supabase';

import { getCategoryBySlug } from './categoryApi';
import { NUMBER_ITEM_PER_PAGE } from '../utils/constant';

export const getProductsByName = async ({ slug, page }) => {
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
    return product;
};

const getAttributesByProductId = async ({ id }) => {
    if (!id) return null;
    console.log('id: ', id);
    let { data, error } = await supabase
        .from('productDetails')
        .select(`quantity, attributes (name, value, price, id)`)
        .eq('productId', id);
    if (error) {
        throw new Error('getAttributesByProductId err:  ', error.message);
    }
    if (data.length === 0) return [];

    data = data.map((item) => {
        return {
            name: item.attributes.name,
            data: {
                value: item.attributes.value,
                price: item.attributes.price,
                quantity: item.quantity,
                id: item.attributes.id,
            },
        };
    });

    const attributes = [];
    data.forEach((item) => {
        const index = attributes.findIndex((attr) => attr.name === item.name);
        if (index === -1) {
            attributes.push({
                name: item.name,
                data: [item.data],
            });
        } else {
            attributes[index].data.push(item.data);
        }
    });

    return attributes;
};

export const addProductToCart = async ({ userId, productId, quantity, attributes }) => {
    quantity = quantity || 1;
    if (!userId || !productId) return;

    // 1. Thêm sản phẩm vào bảng shoppingCarts
    const { data: cartData, error: cartError } = await supabase
        .from('shoppingCarts')
        .insert([
            {
                userId: userId,
                productId: productId,
                quantity: quantity,
            },
        ])
        .select('id')
        .single();

    if (cartError) {
        throw new Error('addProductToCart err:  ', cartError.message);
    }
    console.log(cartData);

    // 2. Thêm các thuộc tính vào bảng selectedAttributes
    const selectedAttributes = attributes.map((attribute) => ({
        shoppingCartId: cartData.id,
        attributeId: attribute.data?.id,
        // orderDetailId: attribute.orderDetailId
    }));

    const { error: attributesError } = await supabase.from('selectedAttributes').insert(selectedAttributes);

    if (attributesError) {
        throw new Error('attributesError err:  ', attributesError.message);
    }
};

export const getShoppingCartsByUserId = async ({ userId }) => {
    if (!userId) return [];
    console.log('userId: ', userId);
    const { data, error } = await supabase
        .from('shoppingCarts')
        .select(`*, products (productName, images (url)), selectedAttributes (attributes (id, name, price, value))`)
        .eq('userId', userId);

    if (error) {
        throw new Error('getShoppingCartByUserId err:  ', error.message);
    }
    return data;
};

export const deleteShoppingCartById = async ({ cartId }) => {
    if (!cartId) return;
    const { error } = await supabase.from('shoppingCarts').delete().eq('id', cartId);
    if (error) {
        throw new Error('deleteShoppingCartById err:  ', error.message);
    }
};

export const updateCartQuantityById = async ({ cartId, quantity }) => {
    if (!cartId || !quantity) return;
    console.log(cartId);
    const { error } = await supabase.from('shoppingCarts').update({ quantity: quantity }).eq('id', cartId);
    if (error) {
        throw new Error('updateCartQuantityById err:  ', error.message);
    }
};
