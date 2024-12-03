import supabase from '../config/supabase';

import { getCategoryBySlug } from './categoriesApi';
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
    const {attributes, productDetailId} = await getAttributesByProductId({ id: product.id });
    if (attributes) product.attributes = attributes;
    if (productDetailId) product.productDetailId = productDetailId;
    return product;
};

const getAttributesByProductId = async ({ id }) => {
    if (!id) return null;
    let { data, error } = await supabase
        .from('productDetails')
        .select(`id, quantity, attributes (name, value, price, id)`)
        .eq('productId', id);
    if (error) {
        throw new Error('getAttributesByProductId err:  ', error.message);
    }
    if (!data || !data[0].attributes) return (
        {
            attributes: [],
            productDetailId: data[0].id
        }
    );
    data = data.map((item) => {
        return {
            name: item.attributes.name,
            data: {
                value: item.attributes.value,
                price: item.attributes.price,
                quantity: item.quantity,
                id: item.attributes.id,
                productDetailId: item.id,
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

    return {attributes};
};

const getShoppingCartByUserId = async ({ userId }) => {
    if (!userId) return null;
    const { data, error } = await supabase
        .from('shoppingCarts')
        .select(`*`)
        .eq('userId', userId);
    if (error) {
        throw new Error('getShoppingCartByUserId err:  ', error.message);
    }
    if(data.length === 0) return null;
    return data[0];
}

const updateShoppingCart = async ({quantity, price, shoppingCartId }) => {
    const { error } = await supabase
        .from('shoppingCarts')
        .update({ quantity, price })
        .eq('id', shoppingCartId);
    if (error) {
        throw new Error('updateShoppingCart err:  ', error.message);
    }
}

const createShoppingCart = async ({ userId, price }) => {
    const { data, error } = await supabase
        .from('shoppingCarts')
        .insert([
            {
                userId,
                quantity: 1,
                price,
            },
        ])
        .select('id')
        .single();
    if (error) {
        throw new Error('createShoppingCart err:  ', error.message);
    }
    return data.id;
}

const createCartItem = async ({ shoppingCartId, price }) => {
    const { data: cartItemData, error: cartItemError } = await supabase.from('cartItems').insert([
        {
            shoppingCartId,
            quantity: 1,
            price,
        },
    ])
    .select('*').single();
    if(cartItemError) {
        throw new Error('addProductToCart err:  ', cartItemError.message);
    }
    return cartItemData;
}

const createCartItemDetails = async ({ cartItemId, productDetailIds }) => {
    const cartItemDetail = productDetailIds.map((productDetailId) => ({
        cartItemId,
        productDetailId,
    }));
    const { error: cartItemDetailError } = await supabase.from('cartItemDetails').insert(cartItemDetail).select('*');
    if(cartItemDetailError) {
        throw new Error('addProductToCart err:  ', cartItemDetailError.message);
    }
    return cartItemDetail;
}

export const addProductToCart = async ({ userId, price, productDetailIds }) => {
    if (!userId || !productDetailIds) return;

    // 1. check có giỏ hàng hay chưa, nếu chưa thì tạo mới, nếu có rồi thì cập nhật số lượng + 1
    const shoppingCartData = await getShoppingCartByUserId({ userId });
    let shoppingCartId = shoppingCartData?.id;
    // đã có giỏ hàng
    if(shoppingCartId) { 
        const newQuantity = shoppingCartData.quantity + 1;
        const newPrice =  Number(shoppingCartData.price) + Number(price);
        await updateShoppingCart({ quantity: newQuantity, price: newPrice, shoppingCartId });
    } else {
        shoppingCartId = await createShoppingCart({ userId, price });
    }

    // 2. tạo cartItem
    const cartItemData = await createCartItem({ shoppingCartId, price });

    // 3. tạo cartItemDetail
   await createCartItemDetails({ cartItemId: cartItemData.id, productDetailIds });
};

export const getCartItemsByUserId = async ({ userId }) => {
    if (!userId) return [];

    let { data: shoppingCartData, error } = await supabase
        .from('shoppingCarts')
        .select(`*`)
        .eq('userId', userId);
    if (error) {
        throw new Error('getAllShoppingCartItemsByUserId err:  ', error.message);
    }
    if(shoppingCartData.length === 0) return {};
    shoppingCartData = shoppingCartData[0];

    const { data: cartItems, error: cartItemsError } = await supabase
    .from('cartItems')
    .select(`*, cartItemDetails (id, productDetails (products(*, images(url)), attributes (name, value)))`)
    .eq('shoppingCartId', shoppingCartData.id).order('id', { ascending: true });;

    if (cartItemsError) {
        throw new Error('getAllShoppingCartItemsByUserId err:  ', cartItemsError.message);
    }
    const data = {
        ...shoppingCartData,
        cartItems,
    }
    return data;
};

export const deleteShoppingCartById = async ({cart, shoppingCartData, price }) => {
    if (!cart || !shoppingCartData) {
        throw new Error('xóa sản phẩm thất bại !');
    }
    const { error: attrsError } = await supabase.from('cartItemDetails').delete().eq('cartItemId', cart.id);
    if (attrsError) {
        throw new Error('deleteShoppingCartById err:  ', attrsError.message);
    }
    const { error: cartError } = await supabase.from('cartItems').delete().eq('id', cart.id);
    if (cartError) {
        throw new Error('deleteShoppingCartById err:  ', cartError.message);
    }
    const { error: shoppingCartError } = await supabase
        .from('shoppingCarts')
        .update({price: shoppingCartData.price - price})
        .eq('id', shoppingCartData.id);
    if (shoppingCartError) {
        throw new Error('updateCartQuantityById err:  ', shoppingCartError.message);
    }
};

export const updateCartItem = async ({ shoppingCartData, cartId, prevQuantity, currQuantity, price }) => {
    if (!shoppingCartData || !cartId || currQuantity === prevQuantity) {
        throw new Error('có lỗi xảy ra khi thay đổi số lương sản phẩm !');
    }
    const newPrice = (price / prevQuantity) * currQuantity;
    const { error } = await supabase
        .from('cartItems')
        .update({ quantity: currQuantity, price: newPrice })
        .eq('id', cartId);
    if (error) {
        throw new Error('updateCartQuantityById err:  ', error.message);
    }

    // update shoppingCart
    const { error: shoppingCartError } = await supabase
        .from('shoppingCarts')
        .update({price: shoppingCartData.price - price + newPrice})
        .eq('id', shoppingCartData.id);
    if (shoppingCartError) {
        throw new Error('updateCartQuantityById err:  ', shoppingCartError.message);
    }
};

export const getCartQuantity = async ({userId}) => {
    if (!userId) return 0;
    const { data, error } = await supabase
        .from('shoppingCarts')
        .select('quantity')
        .eq('userId', userId);
    if (error) {
        throw new Error('getCartQuantity err:  ', error.message);
    }
    if(data.length === 0) return 0;
    return data[0].quantity;
}