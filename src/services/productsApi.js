// import supabase from '../config/supabase';
import axiosInstance from '../config/axios';

import { handleError } from '../utils/handleError';
import { NUMBER_ITEM_PER_PAGE } from '../utils/constant';

export const getProducts = async (filters) => {
    try {
        let { limit, page, category, q } = filters;
        limit = limit || NUMBER_ITEM_PER_PAGE;

        let url = `/products?limit=${limit}`;
        if (page) url += `&page=${page}`;
        if (category) url += `&category=${category}`;
        if (q) url += `&q=${q}`;

        const res = await axiosInstance.get(url);
        const data = res?.data;
        if (data?.stauts) delete data.status;
        return data;
    } catch (error) {
        handleError(error, 'Lấy sản phẩm thất bại');
    }
};

export const getProductBySlug = async ({ slug }) => {
    try {
        if (!slug) throw new Error("slug can't be empty");
        const url = `/products/${slug}`;
        const res = await axiosInstance.get(url);
        const product = res?.data?.product;

        //rewrite attributes
        if (product?.attributes) {
            const groupedAttributes = Object.values(
                product.attributes.reduce((acc, item) => {
                    const key = item.attrName; // Group by attrName
                    if (!acc[key]) {
                        acc[key] = { type: key, data: [] };
                    }
                    acc[key].data.push({
                        addPrice: item.addPrice,
                        attrValue: item.attrValue,
                        productAttributeId: item.productAttributeId,
                    });
                    return acc;
                }, {}),
            );
            product.attributes = groupedAttributes;
        }

        return product;
    } catch (error) {
        handleError(error, 'Lấy sản phẩm thất bại');
    }
};

// export const getCartItemsByUserId = async ({ userId }) => {
//     if (!userId) return [];

//     let { data: shoppingCartData, error } = await supabase.from('shoppingCarts').select(`*`).eq('userId', userId);
//     if (error) {
//         throw new Error('getAllShoppingCartItemsByUserId err:  ', error.message);
//     }
//     if (shoppingCartData.length === 0) return {};
//     shoppingCartData = shoppingCartData[0];

//     const { data: cartItems, error: cartItemsError } = await supabase
//         .from('cartItems')
//         .select(`*, cartItemDetails (id, productDetails (products(*, images(url)), attributes (name, value)))`)
//         .eq('shoppingCartId', shoppingCartData.id)
//         .order('id', { ascending: true });

//     if (cartItemsError) {
//         throw new Error('getAllShoppingCartItemsByUserId err:  ', cartItemsError.message);
//     }
//     const data = {
//         ...shoppingCartData,
//         cartItems,
//     };
//     return data;
// };

// export const deleteShoppingCartById = async ({ cart, shoppingCartData, price }) => {
//     if (!cart || !shoppingCartData) {
//         throw new Error('xóa sản phẩm thất bại !');
//     }
//     const { error: attrsError } = await supabase.from('cartItemDetails').delete().eq('cartItemId', cart.id);
//     if (attrsError) {
//         throw new Error('deleteShoppingCartById err:  ', attrsError.message);
//     }
//     const { error: cartError } = await supabase.from('cartItems').delete().eq('id', cart.id);
//     if (cartError) {
//         throw new Error('deleteShoppingCartById err:  ', cartError.message);
//     }
//     const { error: shoppingCartError } = await supabase
//         .from('shoppingCarts')
//         .update({ price: shoppingCartData.price - price })
//         .eq('id', shoppingCartData.id);
//     if (shoppingCartError) {
//         throw new Error('updateCartQuantityById err:  ', shoppingCartError.message);
//     }
// };

// export const updateCartItem = async ({ shoppingCartData, cartId, prevQuantity, currQuantity, price }) => {
//     if (!shoppingCartData || !cartId || currQuantity === prevQuantity) {
//         throw new Error('có lỗi xảy ra khi thay đổi số lương sản phẩm !');
//     }
//     const newPrice = (price / prevQuantity) * currQuantity;
//     const { error } = await supabase
//         .from('cartItems')
//         .update({ quantity: currQuantity, price: newPrice })
//         .eq('id', cartId);
//     if (error) {
//         throw new Error('updateCartQuantityById err:  ', error.message);
//     }

//     // update shoppingCart
//     const { error: shoppingCartError } = await supabase
//         .from('shoppingCarts')
//         .update({ price: shoppingCartData.price - price + newPrice })
//         .eq('id', shoppingCartData.id);
//     if (shoppingCartError) {
//         throw new Error('updateCartQuantityById err:  ', shoppingCartError.message);
//     }
// };

// export const getCartQuantity = async ({ userId }) => {
//     if (!userId) return 0;
//     const { data, error } = await supabase.from('shoppingCarts').select('quantity').eq('userId', userId);
//     if (error) {
//         throw new Error('getCartQuantity err:  ', error.message);
//     }
//     if (data.length === 0) return 0;
//     return data[0].quantity;
// };
