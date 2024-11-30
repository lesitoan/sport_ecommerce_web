import { FaEllipsis } from 'react-icons/fa6';
import OrderDetail from './OrderDetails';
import { useState } from 'react';

const OrderRow = ({ order }) => {
    console.log(order);
    const { id, createdAt, status, totalProductPrice, deliveryFee } = order;
    const [showDetal, setShowDetail] = useState(false);

    if (!id || !createdAt || !status || !totalProductPrice || !deliveryFee) return null;

    return (
        <>
            <tr className={`${showDetal && 'bg-gray-300'} border-b-2 border-gray-200 hover:bg-gray-300 transition-all`}>
                <td className="pl-3">
                    <span>{`#${id}`}</span>
                </td>
                <td className="pr-3 py-4 max-w-[100px]">
                    <span>
                        {new Date(createdAt).getDate() +
                            '/' +
                            (new Date(createdAt).getMonth() + 1) +
                            '/' +
                            new Date(createdAt).getFullYear()}
                    </span>
                </td>
                <td className="pr-3 py-4">
                    {status === 'pending' && <span className="text-yellow-600 font-[500]">Chờ xử lý</span>}
                    {status === 'success' && <span className="text-green-600 font-[500]">Thành công</span>}
                    {status === 'error' && <span className="text-red-600 font-[500]">Thất bại</span>}
                </td>
                <td className="pr-3 py-4">
                    <span>{Number(totalProductPrice) + Number(deliveryFee)}&#8363;</span>
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
