import OrderRow from "./OrderRow";
import { useGetOrderByUserId, useGetOrderDetailByOrderId } from "../hooks/orderHook";
import Spinner from "./Spinner";
import { useUser } from "../hooks/authHook";
import { getOrderDetails } from "../services/orderApi";
import { useEffect } from "react";

const fakeOrders = [
    {
        id: 1,
        orderDate: "10/10/2024",
        status: "chưa nhận hàng",
        paymentMethod: "thanh toán khi nhận hàng",
        products: [
            { id: 147, productName: "Túi Đứng Kamito Cool 3.0", price: 20000, image: null, quantity: 2 },
            { id: 133, productName: "Áo Bóng Đá Đội Tuyển Bỉ Xanh Ngọc Loang Euro 2024-2025", price: 75000, image: null, qunatity: 1, size: "M", type: "hàng thun lạnh" }
        ],
        totalPrice: "500000",
        note: "cảm ơn shop đã bán hàng giá rẻ. hihi",
        orderAddress: "BÌnh Quế, Thăng Bình, Quảng Nam",
        numsProducs: 6,
        ShippingFee: "30000",
    },
    {
        id: 2,
        orderDate: "15/11/2024",
        status: "đã nhận hàng",
        paymentMethod: "thanh toán khi nhận hàng",
        products: [
            { id: 147, productName: "Túi Đứng Kamito Cool 3.0", price: 20000, image: null, quantity: 2 },
            { id: 133, productName: "Áo Bóng Đá Đội Tuyển Bỉ Xanh Ngọc Loang Euro 2024-2025", price: 75000, image: null, qunatity: 1, size: "M", type: "hàng thun lạnh" }
        ],
        totalPrice: "350000",
        note: "cảm ơn shop đã bán hàng giá rẻ. hihi",
        orderAddress: "BÌnh Quế, Thăng Bình, Quảng Nam",
        numsProducs: 6,
        ShippingFee: "30000",
    }
]

const TableOrders = () => {
    // const orders = fakeOrders;
    const { user } = useUser();
    const { isLoading, orders } = useGetOrderByUserId(user?.id)

    if (orders?.length === 0) return <h4>Chưa có đơn hàng</h4>
    if (isLoading) return <div className="mt-10"><Spinner /></div>
    return (
        <div className="">
            <table className="w-full text-[16px] text-left">
                <thead className=" bg-main-color text-white">
                    <tr>
                        <th scope="col" className="pl-3 pr-1 py-2">
                            Đơn hàng
                        </th>
                        <th scope="col" className="pr-3 py-2">
                            Ngày đặt hàng
                        </th>
                        <th scope="col" className="pr-3 py-2">
                            Tình trạng
                        </th>
                        <th scope="col" className="pr-3 py-2">
                            Tổng giá tiền
                        </th>
                        <th scope="col" className="py-2">
                            Thao tác
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {fakeOrders.map((order) => (
                        <OrderRow
                            key={order.id}
                            order={order}
                        />
                    ))} */}
                    {orders.map((order) => (
                        <OrderRow
                            key={order.id}
                            order={order}
                        />
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TableOrders;
