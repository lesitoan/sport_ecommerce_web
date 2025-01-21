import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineInfoCircle, AiOutlineShoppingCart } from 'react-icons/ai';
import { BsCardChecklist } from 'react-icons/bs';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BiLogOut } from 'react-icons/bi';

import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import TableShoppingCarts from '../ui/TableShoppingCarts';
import TableOrders from '../ui/TableOrders';
import MyInfoForm from '../ui/MyInfoForm';
import ChangePasswordForm from '../ui/ChangePasswordForm';
import Logout from '../ui/Logout';
import AddresssSession from '../ui/AddressSession';

const AccountPage = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeSection, setActiveSection] = useState(searchParams.get('section') || 'gioi_thieu');

    const handleCLickNav = (param) => {
        setActiveSection(param);
        setSearchParams({ section: param });
    };

    return (
        <div className="sm:flex gap-6 my-8 min-h-screen text-sm sm:text-base 2xl:text-lg">
            {/* navigation */}
            <div className="sm:w-1/3">
                <ul className="flex justify-evenly flex-wrap sm:block gap-2 sm:gap-0 uppercase font-medium">
                    <li
                        className={`${
                            activeSection === 'gioi_thieu' && 'bg-main-color text-white'
                        } w-2/5 sm:w-full flex items-center gap-2 px-3 py-3 mb-1 cursor-pointer hover:bg-main-color hover:text-white transition duration-300 ease-in-out`}
                        onClick={() => handleCLickNav('gioi_thieu')}
                    >
                        <AiOutlineInfoCircle />
                        giới thiệu
                    </li>

                    <li
                        className={`${
                            activeSection === 'gio_hang' && 'bg-main-color text-white'
                        } w-2/5 sm:w-full flex items-center gap-2 px-3 py-3 mb-1 cursor-pointer hover:bg-main-color hover:text-white transition duration-300 ease-in-out`}
                        onClick={() => handleCLickNav('gio_hang')}
                    >
                        <AiOutlineShoppingCart />
                        giỏ hàng
                    </li>

                    <li
                        className={`${
                            activeSection === 'don_hang' && 'bg-main-color text-white'
                        } w-2/5 sm:w-full flex items-center gap-2 px-3 py-3 mb-1 cursor-pointer hover:bg-main-color hover:text-white transition duration-300 ease-in-out`}
                        onClick={() => handleCLickNav('don_hang')}
                    >
                        <BsCardChecklist />
                        đơn hàng
                    </li>
                    <li
                        className={`${
                            activeSection === 'dia_chi' && 'bg-main-color text-white'
                        } w-2/5 sm:w-full flex items-center gap-2 px-3 py-3 mb-1 cursor-pointer hover:bg-main-color hover:text-white transition duration-300 ease-in-out`}
                        onClick={() => handleCLickNav('dia_chi')}
                    >
                        <HiOutlineLocationMarker />
                        Địa chỉ
                    </li>

                    <li
                        className={`${
                            activeSection === 'tai_khoan' && 'bg-main-color text-white'
                        } w-2/5 sm:w-full flex items-center gap-2 px-3 py-3 mb-1 cursor-pointer hover:bg-main-color hover:text-white transition duration-300 ease-in-out`}
                        onClick={() => handleCLickNav('tai_khoan')}
                    >
                        <FaUserCircle />
                        tài khoản
                    </li>

                    <li className="w-2/5 sm:w-full flex items-center gap-2 px-3 py-3 mb-1 cursor-pointer hover:bg-main-color hover:text-white transition duration-300 ease-in-out">
                        <BiLogOut />
                        <Logout />
                    </li>
                </ul>
            </div>

            {/* content */}
            <div className=" sm:w-2/3">
                <hr className="border-t-2 border-main-color mb-4 w-full" />
                {/* giới thiệu */}

                {activeSection === 'gioi_thieu' && (
                    <p className="text-base sm:text-lg 2xl:text-xl border-solid border-2 border-main-color rounded-md p-2 sm:p-4">
                        Xin chào quý khách hàng đã tin tưởng và lựa chọn sản phẩm của chúng mình, nếu cần tư vấn hay có
                        bất kì lỗi gì hãy liên hệ với chúng mình để được giải quyết kịp thời. xin cảm ơn @@
                    </p>
                )}

                {/* giỏ hàng*/}
                {activeSection === 'gio_hang' && <TableShoppingCarts />}

                {/* đơn hàng */}
                {activeSection === 'don_hang' && <TableOrders />}

                {/* địa chỉ */}
                {activeSection === 'dia_chi' && <AddresssSession />}

                {/* tài khoản */}
                {activeSection === 'tai_khoan' && (
                    <>
                        <MyInfoForm />
                        <ChangePasswordForm />
                    </>
                )}
            </div>
        </div>
    );
};

export default AccountPage;
