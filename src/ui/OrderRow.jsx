import { useState } from "react";
import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";
import { FaEllipsis } from "react-icons/fa6";

const OrderRow = ({ order }) => {
    const { id, orderDate, status, paymentMethod, products,
        totalPrice, note, orderAddress, numsProducs, ShippingFee
    } = order;
    const [showDetal, setShowDetail] = useState(true);


    if (!id || !products) return null;

    return (
        <>
            <tr className={`${!showDetal && 'bg-gray-300'} border-b-2 border-gray-200 hover:bg-gray-300 transition-all`}>
                <td className="pl-3">
                    <span>{`#${id}`}</span>
                </td>
                <td className="pr-3 py-4 max-w-[100px]">
                    <span>{orderDate}</span>
                </td>
                <td className="pr-3 py-4">
                    <span className={`${status === "đã nhận hàng" ? 'text-green-500' : 'text-yellow-400'} font-[500]`}>{status}</span>

                </td>
                <td className="pr-3 py-4">
                    <span>{totalPrice}</span>
                </td>
                <td
                    className="py-4 cursor-pointer"
                    onClick={() => setShowDetail(prevStatus => !prevStatus)}
                >
                    <FaEllipsis />
                </td>
            </tr>
            <tr className={`border-b-2 border-gray-200 ${showDetal && 'hidden'}`}>
                <td className="px-3 py-4" colSpan={5}>
                    <ul className="flex flex-col">
                        {products.length > 0 && (
                            products.map((prod, index) => (
                                <ul key={index} className="flex justify-between mb-1">
                                    <li>{prod?.productName}</li>
                                    <li className="italic text-[15px]">{`${prod?.type ? prod?.type + ', ' : ''} ${prod?.size ? 'size: ' + prod?.size + ', ' : ''} ${prod?.color ? prod?.color : ''}`}</li>
                                    <li>{`${prod?.price} đ`}</li>
                                </ul>
                            ))
                        )}
                        <li className="flex mb-1">
                            <span className="block font-[500] min-w-[200px]">Tổng tiền:</span>
                            <span>{totalPrice}</span>

                        </li>
                        <li className="flex mb-1">
                            <span className="block font-[500] min-w-[200px]">Phí giao hàng</span>
                            <span>{ShippingFee}</span>
                        </li>
                        <li className="flex mb-1">
                            <span className="block font-[500] min-w-[200px]">Phương thức thanh toán:</span>
                            <span>{paymentMethod}</span>
                        </li>
                        <li className="flex mb-1">
                            <span className="block font-[500] min-w-[200px]">Tổng cộng:</span>
                            <span className="text-red-500 font-[500]">{Number(totalPrice) + Number(ShippingFee || 0)}</span>
                        </li>
                        <li className="flex mb-1">
                            <span className="block font-[500] min-w-[200px]">Địa chỉ nhận hàng:</span>
                            <span>{orderAddress}</span>
                        </li>
                        <li className="flex mb-1">
                            <span className="block font-[500] min-w-[200px]">Ghi chú:</span>
                            <span>{note}</span>
                        </li>
                    </ul>
                </td>
            </tr>
        </>
    )
}

export default OrderRow;

// products: [
//     { id: 147, productName: "Túi Đứng Kamito Cool 3.0", price: 20000, image: null, quantity: 2 },
//     { id: 133, productName: "Áo Bóng Đá Đội Tuyển Bỉ Xanh Ngọc Loang Euro 2024-2025", price: 75000, image: null, qunatity: 1, size: "M", type: "hàng thun lạnh" }
// ],
