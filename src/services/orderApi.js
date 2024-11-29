import supabase from '../config/supabase';

export const createOrder = async ({ shippingInfo, userId, shoppingCarts }) => {
    console.log(shippingInfo);
    console.log(userId);
    console.log(shoppingCarts);

    const { addressDetail, fullName, phoneNumber, district, province, ward } = shippingInfo?.shippingAddress;
    const address = `${ward} - ${district} - ${province}`;
    const statusMessage = 'Đang chờ xử lý';
    const paymentMethod = shippingInfo?.paymentMethod;
    const totalPrice = shoppingCarts.reduce((total, cart) => total + cart?.price * cart?.quantity || 0, 0);
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
        shoppingCarts.length === 0
    )
        return;
    // 1. tạo dữ liệu trong bảng orders
    const { data: order, error: orderError } = await supabase
        .from('orders')
        .insert([
            {
                paymentMethod,
                address,
                totalPrice,
                deliveryFee,
                addressDetail,
                phoneNumber,
                userId,
                fullName,
                statusMessage,
            },
        ])
        .select()
        .single();
    // 2. nếu lỗi thì return
    if (orderError) {
        console.log(orderError);
        throw new Error('có lỗi tạo đơn hàng !!!!!!!!!!');
    }
    if (!order?.id) return;

    // 3. tạo dữ liệu trong bảng orderdetails
    const orderDetailData = shoppingCarts.map((cart) => ({
        productId: cart?.productId,
        orderId: order.id,
        quantity: cart?.quantity,
        price: cart?.price,
    }));

    // 4. nếu lỗi bước 2 => xóa row vừa tạo trong  bảng orders => return
    const { data: orderDetails, error: orderDetailError } = await supabase
        .from('orderDetails')
        .insert(orderDetailData)
        .select();

    if (orderDetailError || !orderDetails) {
        console.log(orderDetailError);
        await supabase.from('orders').delete().eq('id', order.id);
        throw new Error('có lỗi tạo đơn hàng chi tiết !!!!!!!!!!');
    }
    console.log(orderDetails);

    // 5. update dữ liệu trong bảng selectedAttributes
    // 5.1 lấy ra dữ liệu các {selectedAttributes, productId} từ bảng shoppingCarts
    // sau đó merge nó với orderDetails để có được các {orderDetailId, selltedAttributeId}
    const NewSelectedAttributesData = orderDetails
        .map((orderDetail) => {
            return shoppingCarts.map((cart) => {
                if (cart.productId === orderDetail.productId) {
                    return cart.selectedAttributes.map((selectAttr) => ({
                        orderDetailId: orderDetail.id,
                        id: selectAttr.id,
                        shoppingCartId: null,
                    }));
                }
                return undefined;
            });
        })
        .flat(2)
        .filter((item) => item !== undefined);

    // 5.2 update dữ liệu trong bảng selectedAttributes (xóa cột shoppingCartId, thêm id vào cột orderDetailId)
    const { error: selectedAttributesError } = await supabase
        .from('selectedAttributes')
        .upsert(NewSelectedAttributesData, { onConflict: 'id' })
        .select();
    // 6. nếu lỗi thì xóa dữ liệu trong bảng orders và orderDetails => return
    if (selectedAttributesError) {
        await supabase.from('orders').delete().eq('id', order.id);
        await supabase.from('orderDetails').delete().eq('orderId', order.id);
        console.log(selectedAttributesError);
        throw new Error('có lỗi tạo selectedAttributes !!!!!!!!!!');
    }
    // 7. xóa dữ liệu trong bảng shoppingCarts
    const { error: deleteShoppingCartsError } = await supabase.from('shoppingCarts').delete().eq('userId', userId);
    if (deleteShoppingCartsError) {
        console.log(deleteShoppingCartsError);
        throw new Error('có lỗi xóa shoppingCarts !!!!!!!!!!');
    }
    return;
};

export const getOrders = async ({ userId }) => {
    const { data: orders, error } = await supabase.from('orders').select('*').eq('_userId', userId);
    if (error) {
        console.log(error);
        throw new Error('có lỗi lấy đơn hàng !!!!!!!!!!');
    }
    console.log(orders);
    return { orders };
};

export const getOrderDetails = async ({ orderId }) => {
    const { data: orderDetails, error } = await supabase.from('orderDetails').select('*').eq('orderId', orderId);
    if (error) {
        console.log(error);
        throw new Error('có lỗi lấy đơn hàng chi tiết !!!!!!!!!!');
    }
    console.log(orderDetails);
    return { orderDetails };
};
