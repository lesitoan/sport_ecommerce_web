import { useGetOrderDetailByOrderId } from '../hooks/orderHook';

const OrderDetail = ({ isShow, order }) => {
    // const { id, created_at: orderDate, status, paymentMethod,
    //     totalPrice, addressDetail, address, numsProducs, deliveryFee
    // } = order;
    const { id, paymentMethod, totalPrice, addressDetail, address, deliveryFee } = order;

    const { orderDetails } = useGetOrderDetailByOrderId(id);
    if (orderDetails)
        return (
            <tr className={`border-b-2 border-gray-200 ${!isShow && 'hidden'}`}>
                <td className="px-3 py-4" colSpan={5}>
                    <ul className="flex flex-col">
                        {orderDetails.length > 0 &&
                            orderDetails.map((orderDetail, index) => (
                                <ul key={index} className="flex justify-between mb-1">
                                    <li>{orderDetail?.productName}</li>
                                    <li className="italic text-[15px]">{`${
                                        orderDetail?.type ? orderDetail?.type + ', ' : ''
                                    } ${orderDetail?.size ? 'size: ' + orderDetail?.size + ', ' : ''} ${
                                        orderDetail?.color ? orderDetail?.color : ''
                                    }`}</li>
                                    {/* <li>{`${prod?.price} đ`}</li> */}
                                </ul>
                            ))}
                        <li className="flex mb-1">
                            <span className="block font-[500] min-w-[200px]">Tổng tiền:</span>
                            <span>{totalPrice}</span>
                        </li>
                        <li className="flex mb-1">
                            <span className="block font-[500] min-w-[200px]">Phí giao hàng</span>
                            <span>{deliveryFee}</span>
                        </li>
                        <li className="flex mb-1">
                            <span className="block font-[500] min-w-[200px]">Phương thức thanh toán:</span>
                            <span>{paymentMethod}</span>
                        </li>
                        <li className="flex mb-1">
                            <span className="block font-[500] min-w-[200px]">Tổng cộng:</span>
                            <span className="text-red-500 font-[500]">
                                {Number(totalPrice) + Number(deliveryFee || 0)}
                            </span>
                        </li>
                        <li className="flex mb-1">
                            <span className="block font-[500] min-w-[200px]">Địa chỉ nhận hàng:</span>
                            <span>{address}</span>
                        </li>
                        <li className="flex mb-1">
                            <span className="block font-[500] min-w-[200px]">Địa chỉ nhận hàng cụ thể:</span>
                            <span>{addressDetail}</span>
                        </li>
                        <li className="flex mb-1">
                            <span className="block font-[500] min-w-[200px]">Ghi chú:</span>
                            {/* <span>{note}</span> */}
                        </li>
                    </ul>
                </td>
            </tr>
        );
};
export default OrderDetail;
