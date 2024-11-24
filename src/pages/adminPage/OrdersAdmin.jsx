import TableOrders from '../../ui/adminUi/TableOrders';

const OrdersAdmin = () => {
    return (
        <div className="min-h-[200vh]">
            <h3 className="font-[600] text-[28px] uppercase">Đơn đặt hàng</h3>
            <div className="w-[100%] h-[3px] bg-main-color mt-1 mb-6"></div>

            <TableOrders />
        </div>
    );
};

export default OrdersAdmin;
