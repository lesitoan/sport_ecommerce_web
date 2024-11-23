import { FaEllipsis } from 'react-icons/fa6';
import OrderDetail from './OrderDetails';
import { useState } from 'react';

const OrderRow = ({ order }) => {
    const { id, created_at: orderDate, status, totalPrice } = order;
    const [showDetal, setShowDetail] = useState(false);

    if (!id) return null;

    return (
        <>
            <tr
                className={`${!showDetal && 'bg-gray-300'} border-b-2 border-gray-200 hover:bg-gray-300 transition-all`}
            >
                <td className="pl-3">
                    <span>{`#${id}`}</span>
                </td>
                <td className="pr-3 py-4 max-w-[100px]">
                    <span>
                        {new Date(orderDate).getDate() +
                            '/' +
                            (new Date(orderDate).getMonth() + 1) +
                            '/' +
                            new Date(orderDate).getFullYear()}
                    </span>
                </td>
                <td className="pr-3 py-4">
                    <span className={`${status === 'đã nhận hàng' ? 'text-green-500' : 'text-yellow-400'} font-[500]`}>
                        {status || 'Chờ nhận hàng'}
                    </span>
                </td>
                <td className="pr-3 py-4">
                    <span>{totalPrice}</span>
                </td>
                <td className="py-4 cursor-pointer" onClick={() => setShowDetail((prevStatus) => !prevStatus)}>
                    <FaEllipsis />
                </td>
            </tr>
            {showDetal && <OrderDetail isShow={showDetal} order={order} />}
        </>
    );
};

export default OrderRow;

// products: [
//     { id: 147, productName: "Túi Đứng Kamito Cool 3.0", price: 20000, image: null, quantity: 2 },
//     { id: 133, productName: "Áo Bóng Đá Đội Tuyển Bỉ Xanh Ngọc Loang Euro 2024-2025", price: 75000, image: null, qunatity: 1, size: "M", type: "hàng thun lạnh" }
// ],
