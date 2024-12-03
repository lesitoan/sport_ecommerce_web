import supabase from '../config/supabase';

export const createOrder = async ({ shippingInfo, userId, shoppingCartData }) => {

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
    // 2. nếu lỗi thì return
    if (orderError) {
        throw new Error('có lỗi tạo đơn hàng !!!!!!!!!!');
    }
    if (!order?.id) return;

    // 5. update dữ liệu trong bảng cartItems
    // const cartItemIds = shoppingCartData.cartItems.map((cart) => ({
    //     id: cart.id,
    //     shoppingCartId: null,
    //     orderDetailId: order?.id,
    // }));
    const { error: cartItemsError } = await supabase
        .from('cartItems')
        .update({ orderId: order.id, shoppingCartId: null })
        .eq('shoppingCartId', shoppingCartData.id);
    if (cartItemsError) {
        await supabase.from('orders').delete().eq('id', order.id);
        throw new Error('có lỗi cập nhật cartItems !!!!!!!!!!');
    }
    // reset shoppingCartId
    await supabase
        .from('shoppingCarts')
        .update({ price: 0, quantity: 0 })
        .eq('id', shoppingCartData.id);

    return;
};

export const getOrdersByUserId = async ({ userId }) => {
    const { data: orders, error } = await supabase.from('orders').select('*').eq('userId', userId);
    if (error) {
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
        throw new Error('getAllShoppingCartItemsByUserId err:  ', cartItemsError.message);
    }
    return cartItems;
};
