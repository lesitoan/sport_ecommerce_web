import supabase from '../config/supabase';

export const createOrder = async ({ data }) => {
    const { products, address, addressDetail, fullName, phoneNumber, userId } = data;
    if (!userId) return;

    const totalQuantity = products.reduce((total, prod) => total + prod.quantity, 0);
    const totalPrice = products.reduce((total, prod) => total + prod.price * prod.quantity, 0);
    console.log(totalQuantity)
    console.log(totalPrice)
    const { data: order, error } = await supabase.from('orders').insert([{
        // products,
        address,
        paymentStatus: false,
        deliveryFee: 30000,
        addressDetail,
        fullName,
        phoneNumber,
        totalQuantity,
        totalPrice,
        _userId: userId
    }]).select();
    console.log("order: ", order);
    if (error) {
        console.log(error);
        throw new Error("có lỗi tạo đơn hàng !!!!!!!!!!");
    }
    const orderDetailsData = products.map((prod) => {
        return {
            productId: prod.id,
            orderId: order[0].id,
            productName: prod.productName,
            type: prod.type,
            size: prod.size,
            color: prod.color,
            quantity: prod.quantity,
        }
    })
    console.log("orderDetailsData: ", orderDetailsData);
    const { data: orderDetails, error: errorDetail } = await supabase.from('orderDetails').insert(orderDetailsData).select();
    if (errorDetail) {
        console.log(errorDetail);
        throw new Error("có lỗi tạo đơn hàng !!!!!!!!!!");
    }
    console.log(orderDetails)
    return { orderDetails };
}

export const getOrders = async ({ userId }) => {
    const { data: orders, error } = await supabase.from('orders').select('*').eq('_userId', userId);
    if (error) {
        console.log(error);
        throw new Error("có lỗi lấy đơn hàng !!!!!!!!!!");
    }
    console.log(orders)
    return { orders };
}