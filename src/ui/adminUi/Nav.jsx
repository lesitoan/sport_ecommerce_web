import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { FaBox, FaChartBar, FaUser } from 'react-icons/fa6';
import { Link, Outlet } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="flex text-[16px]">
            <div className="w-[15vw] min-h-[100vh] bg-main-color text-white">
                <h3 className="pl-4 py-2 my-4 mx-4 font-[500] border-2 border-white rounded-md hover:bg-white hover:text-black">
                    Lê Sĩ Toàn
                </h3>
                <ul className="mx-3">
                    <li className="flex items-center px-4 py-2 mb-1 font-[500] cursor-pointer hover:text-black hover:bg-white transition-all">
                        <FaHome className="mr-2"></FaHome>
                        <Link to="">Trang chủ</Link>
                    </li>
                    <li className="flex items-center px-4 py-2 mb-1 font-[500] cursor-pointer hover:text-black hover:bg-white transition-all">
                        <FaBox className="mr-2"></FaBox>
                        <Link to="products">Sản phẩm</Link>
                    </li>
                    <li className="flex items-center px-4 py-2 mb-1 font-[500] cursor-pointer hover:text-black hover:bg-white transition-all">
                        <FaShoppingCart className="mr-2"></FaShoppingCart>
                        <Link to="orders">Đơn đặt hàng</Link>
                    </li>
                    <li className="flex items-center px-4 py-2 mb-1 font-[500] cursor-pointer hover:text-black hover:bg-white transition-all">
                        <FaUser className="mr-2"></FaUser>
                        <Link to="users">Khách hàng</Link>
                    </li>
                    <li className="flex items-center px-4 py-2 mb-1 font-[500] cursor-pointer hover:text-black hover:bg-white transition-all">
                        <FaChartBar className="mr-2"></FaChartBar>
                        <Link to="analysis">Thống kê</Link>
                    </li>
                </ul>
            </div>
            <div className="w-[85vw] min-h-[100vh] p-4">
                <Outlet />
            </div>
        </div>
    );
};

export default Nav;
