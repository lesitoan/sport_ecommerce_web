import supabase from '../config/supabase';

export const createOrder = async ({ shippingInfo, userId, shoppingCartData }) => {
    console.log(shippingInfo);
    console.log(userId);
    console.log(shoppingCartData);

    const { addressDetail, fullName, phoneNumber, district, province, ward } = shippingInfo?.shippingAddress;
    const address = `${ward} - ${district} - ${province}`;
    const status = 'pending';
    const paymentMethod = shippingInfo?.paymentMethod;
    const totalProductPrice = shoppingCartData?.price;
    const quantity = shoppingCartData?.cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const deliveryFee = '30000';

    if (
        !userId ||
        !address ||
        !fullName ||
        !phoneNumber ||
        !district ||
        !province ||
        !ward ||
        !paymentMethod ||
        !addressDetail ||
        shoppingCartData.cartItems.length === 0
    )
        return;
    console.log('b1');
    // 1. tạo dữ liệu trong bảng orders
    const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert([
            {
                paymentMethod,
                address,
                totalProductPrice,
                deliveryFee,
                addressDetail,
                phoneNumber,
                userId,
                fullName,
                status,
                quantity
            },
        ])
        .select()
        .single();
    console.log('b2');
    // 2. nếu lỗi thì return
    if (orderError) {
        console.log(orderError);
        throw new Error('có lỗi tạo đơn hàng !!!!!!!!!!');
    }
    if (!order?.id) return;

    // 5. update dữ liệu trong bảng cartItems
    const cartItemIds = shoppingCartData.cartItems.map((cart) => ({
        id: cart.id,
        shoppingCartId: null,
        orderDetailId: order?.id,
    }));
    const { data: cartItems, error: cartItemsError } = await supabase
        .from('cartItems')
        .update({ orderId: order.id, shoppingCartId: null })
        .eq('shoppingCartId', shoppingCartData.id);
    if (cartItemsError) {
        await supabase.from('orders').delete().eq('id', order.id);
        console.log("cartItemsError: ", cartItemsError);
        throw new Error('có lỗi cập nhật cartItems !!!!!!!!!!');
    }
    // reset shoppingCartId
    const { data: shoppingCart, error: shoppingCartError } = await supabase
        .from('shoppingCarts')
        .update({ price: 0, quantity: 0 })
        .eq('id', shoppingCartData.id);

    return;
};

export const getOrdersByUserId = async ({ userId }) => {
    const { data: orders, error } = await supabase.from('orders').select('*').eq('userId', userId);
    if (error) {
        console.log(error);
        throw new Error('có lỗi lấy đơn hàng !!!!!!!!!!');
    }
    return { orders };
};

export const getCartsInOrder = async ({ orderId }) => {
    if (!orderId) return;

    const { data: cartItems, error: cartItemsError } = await supabase
    .from('cartItems')
    .select(`*, cartItemDetails (id, productDetails (products(*, images(url)), attributes (name, value)))`)
    .eq('orderId', orderId).order('id', { ascending: true });;

    if (cartItemsError) {
        console.log('cartItemsError: ', cartItemsError.message);
        throw new Error('getAllShoppingCartItemsByUserId err:  ', cartItemsError.message);
    }
    return cartItems;
};
