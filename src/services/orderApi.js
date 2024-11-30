import supabase from '../config/supabase';

export const createOrder = async ({ shippingInfo, userId, shoppingCarts }) => {
    console.log(shippingInfo);
    console.log(userId);
    console.log(shoppingCarts);

    const { addressDetail, fullName, phoneNumber, district, province, ward } = shippingInfo?.shippingAddress;
    const address = `${ward} - ${district} - ${province}`;
    const status = 'pending';
    const paymentMethod = shippingInfo?.paymentMethod;
    const totalProductPrice = shoppingCarts.reduce((total, cart) => total + cart?.price * cart?.quantity || 0, 0);
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
    console.log('b3');
    // 3. tạo dữ liệu trong bảng orderdetails
    const orderDetailData = shoppingCarts.map((cart) => ({
        productId: cart?.productId,
        orderId: order.id,
        quantity: cart?.quantity,
        price: cart?.price,
    }));

    const { data: orderDetails, error: orderDetailError } = await supabase
        .from('orderDetails')
        .insert(orderDetailData)
        .select();

    // 4. nếu lỗi bước 3 => xóa row vừa tạo trong  bảng orders => return
    if (orderDetailError || !orderDetails) {
        console.log(orderDetailError);
        await supabase.from('orders').delete().eq('id', order.id);
        throw new Error('có lỗi tạo đơn hàng chi tiết !!!!!!!!!!');
    }
    console.log('b4');
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
                        shoppingCartId: selectAttr.shoppingCartId,
                    }));
                }
                return undefined;
            });
        })
        .flat(2)
        .filter((item) => item !== undefined);
    console.log(shoppingCarts);
    console.log(NewSelectedAttributesData);
    console.log('b5');
    // 5.2 update dữ liệu trong bảng selectedAttributes (xóa cột shoppingCartId, thêm id vào cột orderDetailId)
    const { error: selectedAttributesError } = await supabase
        .from('selectedAttributes')
        .upsert(NewSelectedAttributesData, { onConflict: 'id' })
        .select();
    console.log('b6');
    // 6. nếu lỗi thì xóa dữ liệu trong bảng orders và orderDetails => return
    if (selectedAttributesError) {
        await supabase.from('orderDetails').delete().eq('orderId', order.id);
        await supabase.from('orders').delete().eq('id', order.id);
        console.log(selectedAttributesError);
        throw new Error('có lỗi tạo selectedAttributes !!!!!!!!!!');
    }
    console.log('b7');
    // 7. xóa dữ liệu trong bảng shoppingCarts
    const { error: deleteShoppingCartsError } = await supabase.from('shoppingCarts').delete().eq('userId', userId);
    if (deleteShoppingCartsError) {
        console.log(deleteShoppingCartsError);
        throw new Error('có lỗi xóa shoppingCarts !!!!!!!!!!');
    }
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

export const getOrderDetails = async ({ orderId }) => {
    if (!orderId) return;
    const { data: orderDetails, error } = await supabase
        .from('orderDetails')
        .select(`*, products (*, images (*)), selectedAttributes ( id, attributes (*))`)
        .eq('orderId', orderId);
    if (error) {
        console.log(error.message);
        throw new Error('có lỗi lấy đơn hàng chi tiết !!!!!!!!!!');
    }
    return { orderDetails };
};
