import { useEffect, useState } from 'react';
import { useOrder, useDeleteOrder } from '../hooks/ordersHook';
import CartProdHorizontal from './CartProdHorizontal';
import Modal from './Modal';
import Spinner from './Spinner';

const OrderDetail = ({ isShow, orderId }) => {
    const { isLoading, order } = useOrder(orderId);
    const { isLoading: isDeleting, deleteOrder, isSuccess } = useDeleteOrder(orderId);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (isSuccess) {
            window.location.reload();
        }
    }, [isSuccess]);

    if (isLoading) {
        return (
            <div className="m3-10">
                <Spinner />
            </div>
        );
    }

    if (!order) {
        return null;
    }

    return (
        <tr className={`border-b-2 border-gray-200 ${!isShow && 'hidden'}`}>
            <Modal show={showModal} onShow={setShowModal} submit={() => deleteOrder(orderId)}>
                bạn có chắc muốn HỦY đơn hàng hày không
            </Modal>

            <td className="px-3 py-4" colSpan={5}>
                <ul className="flex flex-col">
                    {order.products.map((product) => (
                        <CartProdHorizontal cart={product} key={product.productId} />
                    ))}
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Tên người nhận:</span>
                        <span>{order.address.fullName}</span>
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Ngày đặt:</span>
                        <span>
                            {new Date(order.createAt).getDate() +
                                '/' +
                                (new Date(order.createAt).getMonth() + 1) +
                                '/' +
                                new Date(order.createAt).getFullYear()}
                        </span>
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Trạng thái:</span>
                        {order.orderStatus === 'pending' && (
                            <span className="text-yellow-600 font-[500]">Chờ xử lý</span>
                        )}
                        {order.orderStatus === 'confirmed' && (
                            <span className="text-orange-600 font-[500]">Đã xác nhận</span>
                        )}
                        {order.orderStatus === 'inTransit' && (
                            <span className="text-blue-600 font-[500]">Đang vận chuyển</span>
                        )}
                        {order.orderStatus === 'completed' && (
                            <span className="text-green-600 font-[500]">Thành công</span>
                        )}
                        {order.orderStatus === 'error' && <span className="text-red-600 font-[500]">Thất bại</span>}
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Phương thức thanh toán:</span>
                        <span>{'Thanh toán khi nhận hàng'}</span>
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Số điện thoại nhận hàng:</span>
                        <span>{order.address.phoneNumber}</span>
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Địa chỉ nhận hàng:</span>
                        <span>{`${order.address.ward} - ${order.address.district} - ${order.address.province}`}</span>
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Địa chỉ nhận hàng cụ thể:</span>
                        <span>{order.address.addressDetail}</span>
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Ghi chú:</span>
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Tổng tiền sản phẩm:</span>
                        <span>{order.price}&#8363;</span>
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Phí giao hàng</span>
                        <span>{order.shippingFee}&#8363;</span>
                    </li>
                    <li className="flex mb-1">
                        <span className="block font-[500] min-w-[200px]">Tổng cộng:</span>
                        <span className="text-red-500 font-[500]">
                            {Number(order.price) + Number(order.shippingFee || 0)}&#8363;
                        </span>
                    </li>
                    {order.orderStatus === 'pending' && (
                        <div className="flex width-[100%] justify-center">
                            <button
                                className=" bg-red-600 w-[200px] h-[38px] mt-2 text-white py-[2px]  cursor-pointer rounded-md hover:bg-red-500"
                                onClick={() => {
                                    setShowModal(true);
                                }}
                                disabled={isDeleting}
                            >
                                <span>Hủy đơn hàng</span>
                            </button>
                        </div>
                    )}
                </ul>
            </td>
        </tr>
    );
};
export default OrderDetail;
