import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Search from '../Search';

const HeaderTop = () => {
    const { user } = useAuth();

    return (
        <div className="flex items-center gap-3 md:gap-6 px-2 py-2 xl:px-6 2xl:px-8">
            <Link to="/" className="w-36 sm:w-44 lg:w-48">
                <img src="/logo.png" alt="logo" />
            </Link>
            <div className="flex gap-7 items-center ml-auto">
                <h5 className="hidden xl:inline-block">
                    Hotline: <span className="text-[red] font-[600]">012345347343 / 3246437432</span>
                </h5>
                <ul className="hidden gap-2 xxl:flex">
                    <li>Giới thiệu</li>
                    <li>Tin tức</li>
                    <li>Hệ thống</li>
                </ul>

                <div className="hidden md:block w-72 xl:w-96">
                    <Search />
                </div>
                <Link
                    to="my-account?section=gio_hang"
                    className="relative text-lg cursor-pointer hover:text-main-color"
                >
                    <FaShoppingCart className="text-2xl" />
                    {true ? (
                        <span className="flex justify-center item-center min-w-4 text-xs font-[600] text-white absolute -top-2 -right-2 bg-red-600 leading-4 rounded-full">
                            5
                        </span>
                    ) : null}
                </Link>
            </div>

            {/* avatar / login btn */}
            <div className="flex gap-0.5 justify-center font-medium">
                {user ? (
                    <div className="flex justify-center items-center bg-main-color text-white px-2 py-2.5 rounded-md cursor-pointer">
                        <Link to={'my-account'}>{user?.userName || 'Không xác định'}</Link>
                    </div>
                ) : (
                    <Link
                        to="sign-in"
                        className="flex justify-center items-center bg-main-color text-white px-2 py-2.5 rounded-md cursor-pointer"
                    >
                        Đăng nhập
                    </Link>
                )}
            </div>
        </div>
    );
};

export default HeaderTop;
