import OrderRow from './OrderRow';
import { useOrders } from '../hooks/ordersHook';
import Spinner from './Spinner';

const TableOrders = () => {
    const { isLoading, orders } = useOrders();

    if (isLoading) return <Spinner size={'md'} css={'mt-14'} />;
    if (!orders || orders?.length === 0) return <h4>Chưa có đơn hàng</h4>;

    return (
        <div className="">
            <table className="w-full text-left">
                <thead className=" bg-main-color text-white">
                    <tr>
                        <th scope="col" className="pl-3 pr-1 py-2">
                            Đơn hàng
                        </th>
                        <th scope="col" className="pr-3 py-2 hidden sm:table-cell">
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
