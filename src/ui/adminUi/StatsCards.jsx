import { FaBox, FaUser } from 'react-icons/fa';
import { FaMoneyBillTransfer } from 'react-icons/fa6';

const StatsCards = () => {
    return (
        <div className="flex justify-between text-[18px] text-white uppercase">
            <div className="flex justify-between items-center px-5 py-2 w-[30%] min-h-[100px] bg-orange-600">
                <div className="">
                    <h4>Tổng số khách hàng</h4>
                    <span className="text-[30px] font-[500]">456</span>
                </div>
                <FaUser className="text-[45px]"></FaUser>
            </div>
            <div className="flex justify-between items-center px-5 py-2 w-[30%] min-h-[100px] bg-green-700">
                <div className="">
                    <h4>Tổng doanh thu</h4>
                    <span className="text-[30px] font-[500]">7.450.000 VNĐ</span>
                </div>
                <FaMoneyBillTransfer className="text-[45px]"></FaMoneyBillTransfer>
            </div>
            <div className="flex justify-between items-center px-5 py-2 w-[30%] min-h-[100px] bg-blue-600">
                <div className="">
                    <h4>Tổng sản phẩm đã Bán</h4>
                    <span className="text-[30px] font-[500]">211</span>
                </div>
                <FaBox className="text-[45px]"></FaBox>
            </div>
        </div>
    );
};

export default StatsCards;
