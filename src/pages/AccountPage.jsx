import { FaSignOutAlt } from 'react-icons/fa';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import TableShoppingCard from '../ui/TableShoppingCard';
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
        <div className="flex gap-2 mt-8 mb-8 min-h-[100vh] text-[16px]">
            {/* navigation */}
            <div className="w-[30%]">
                {/* <hr className="border-t-2 border-main-color" /> */}

                <ul className="uppercase font-[500]">
                    <li
                        className={`${
                            activeSection === 'gioi_thieu' && 'bg-main-color text-white'
                        } px-3 py-3 mb-1 cursor-pointer hover:bg-main-color hover:text-white transition duration-300 ease-in-out`}
                        onClick={() => handleCLickNav('gioi_thieu')}
                    >
                        giới thiệu
                    </li>

                    <li
                        className={`${
                            activeSection === 'gio_hang' && 'bg-main-color text-white'
                        } px-3 py-3 mb-1 cursor-pointer hover:bg-main-color hover:text-white transition duration-300 ease-in-out`}
                        onClick={() => handleCLickNav('gio_hang')}
                    >
                        giỏ hàng
                    </li>

                    <li
                        className={`${
                            activeSection === 'don_hang' && 'bg-main-color text-white'
                        } px-3 py-3 mb-1 cursor-pointer hover:bg-main-color hover:text-white transition duration-300 ease-in-out`}
                        onClick={() => handleCLickNav('don_hang')}
                    >
                        đơn hàng
                    </li>
                    <li
                        className={`${
                            activeSection === 'dia_chi' && 'bg-main-color text-white'
                        } px-3 py-3 mb-1 cursor-pointer hover:bg-main-color hover:text-white transition duration-300 ease-in-out`}
                        onClick={() => handleCLickNav('dia_chi')}
                    >
                        Địa chỉ
                    </li>

                    <li
                        className={`${
                            activeSection === 'tai_khoan' && 'bg-main-color text-white'
                        } px-3 py-3 mb-1 cursor-pointer hover:bg-main-color hover:text-white transition duration-300 ease-in-out`}
                        onClick={() => handleCLickNav('tai_khoan')}
                    >
                        tài khoản
                    </li>

                    <li className="px-3 py-3 mb-1 cursor-pointer hover:bg-main-color hover:text-white transition duration-300 ease-in-out flex gap-1 items-center">
                        <FaSignOutAlt />
                        <Logout />
                    </li>
                </ul>
            </div>

            {/* content */}
            <div className=" w-[70%] px-4 ">
                <hr className="border-t-2 border-main-color mb-2" />
                {/* giới thiệu */}

                {activeSection === 'gioi_thieu' && (
                    <p className="text-[18px]">
                        Xin chào quý khách hàng đã tin tưởng và lựa chọn sản phẩm của chúng mình, nếu cần tư vấn hay có
                        bất kì lỗi gì hãy liên hệ với chúng mình để được giải quyết kịp thời. xin cảm ơn @@
                    </p>
                )}

                {/* giỏ hàng*/}
                {activeSection === 'gio_hang' && <TableShoppingCard />}

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
