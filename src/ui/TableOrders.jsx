import OrderRow from './OrderRow';
import { useGetOrderByUserId } from '../hooks/ordersHook';
import Spinner from './Spinner';
import { useAuth } from '../context/AuthContext';

const TableOrders = () => {
    const { user } = useAuth();
    const { isLoading, orders } = useGetOrderByUserId(user?.id);

    if (!orders || orders?.length === 0) return <h4>Chưa có đơn hàng</h4>;
    if (isLoading)
        return (
            <div className="m3-10">
                <Spinner />
            </div>
        );
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
                    {orders.map((order) => (
                        <OrderRow key={order.id} order={order} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TableOrders;
