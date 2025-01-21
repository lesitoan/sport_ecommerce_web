import { FaEllipsis } from 'react-icons/fa6';
import OrderDetail from './OrderDetails';
import { useState } from 'react';

const OrderRow = ({ order }) => {
    const { id, createAt, orderStatus, price, shippingFee } = order;
    const [showDetal, setShowDetail] = useState(false);

    if (!id || !createAt || !orderStatus || !price || !shippingFee) return null;

    return (
        <>
            <tr className={`${showDetal && 'bg-gray-300'} border-b-2 border-gray-200 hover:bg-gray-300 transition-all`}>
                <td className="pl-3">
                    <span>{`#${id}`}</span>
                </td>
                <td className="pr-3 py-4 max-w-24 hidden sm:table-cell">
                    <span>
                        {new Date(createAt).getDate() +
                            '/' +
                            (new Date(createAt).getMonth() + 1) +
                            '/' +
                            new Date(createAt).getFullYear()}
                    </span>
                </td>
                <td className="pr-3 py-4">
                    {orderStatus === 'pending' && <span className="text-yellow-600 font-medium">Chờ xử lý</span>}
                    {orderStatus === 'confirmed' && <span className="text-orange-600 font-medium">Đã xác nhận</span>}
                    {orderStatus === 'inTransit' && <span className="text-blue-600 font-medium">Đang vận chuyển</span>}
                    {orderStatus === 'completed' && <span className="text-green-600 font-medium">Thành công</span>}
                    {orderStatus === 'error' && <span className="text-red-600 font-medium">Thất bại</span>}
                </td>
                <td className="pr-3 py-4 font-medium">
                    <span>{Number(price) + Number(shippingFee)}&#8363;</span>
                </td>
                <td className="py-4 cursor-pointer" onClick={() => setShowDetail((prevStatus) => !prevStatus)}>
                    <FaEllipsis />
                </td>
            </tr>
            {showDetal && <OrderDetail isShow={showDetal} orderId={order.id} />}
        </>
    );
};

export default OrderRow;
