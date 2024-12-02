import { useGetCartsInOrder } from '../hooks/orderHook';
import CartProdHorizontal from './CartProdHorizontal';

const OrderDetail = ({ isShow, order }) => {
    const { carts } = useGetCartsInOrder(order.id);
    console.log(carts);
    if (!carts || carts.length === 0) {
        return null;
    }
    return (
        <tr className={`border-b-2 border-gray-200 ${!isShow && 'hidden'}`}>
            <td className="px-3 py-4" colSpan={5}>
                <ul className="flex flex-col">
                    {carts.map((cart, index) => (
                        <CartProdHorizontal cart={cart} />
                    ))}
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Tên người nhận:</span>
                        <span>{order?.fullName}</span>
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Ngày đặt:</span>
                        <span>
                            {new Date(order?.createdAt).getDate() +
                                '/' +
                                (new Date(order?.createdAt).getMonth() + 1) +
                                '/' +
                                new Date(order?.createdAt).getFullYear()}
                        </span>
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Trạng thái:</span>
                        {order?.status === 'pending' && <span className="text-yellow-600 font-[500]">Chờ xử lý</span>}
                        {order?.status === 'success' && <span className="text-green-600 font-[500]">Thành công</span>}
                        {order?.status === 'error' && <span className="text-red-600 font-[500]">Thất bại</span>}
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Phương thức thanh toán:</span>
                        <span>{'Thanh toán khi nhận hàng'}</span>
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Số điện thoại nhận hàng:</span>
                        <span>{order?.phoneNumber}</span>
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Địa chỉ nhận hàng:</span>
                        <span>{order?.address}</span>
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Địa chỉ nhận hàng cụ thể:</span>
                        <span>{order?.addressDetail}</span>
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Ghi chú:</span>
                    </li>

                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Tổng tiền sản phẩm:</span>
                        <span>{order?.totalProductPrice}&#8363;</span>
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Phí giao hàng</span>
                        <span>{order?.deliveryFee}&#8363;</span>
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Tổng cộng:</span>
                        <span className="text-red-500 font-[500]">
                            {Number(order?.totalProductPrice) + Number(order?.deliveryFee || 0)}&#8363;
                        </span>
                    </li>
                </ul>
            </td>
        </tr>
    );
};
export default OrderDetail;
