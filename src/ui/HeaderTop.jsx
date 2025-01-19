import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import createSlug from '../utils/createSlug';
import { useAuth } from '../context/AuthContext';

const HeaderTop = () => {
    const navigate = useNavigate();
    const [findInput, setFindInput] = useState('');

    const { user } = useAuth();

    const handleSubmitFindBtn = () => {
        if (findInput) {
            const slug = createSlug(findInput);
            navigate(`/find/${slug}`);
            setFindInput('');
        }
    };
    const ShoppingCardLength = JSON.parse(localStorage.getItem('shoppingCard') || '[]').length;

    return (
        <div className="flex items-center justify-between px-2 py-2 xl:px-6 2xl:px-8">
            <Link to="/">
                <img src="/logo.png" alt="logo" />
            </Link>
            <div className="flex gap-7">
                <h5 className="hidden xl:inline-block">
                    Hotline: <span className="text-[red] font-[600]">012345347343 / 3246437432</span>
                </h5>
                <ul className="hidden gap-2 xxl:flex">
                    <li>Giới thiệu</li>
                    <li>Tin tức</li>
                    <li>Hệ thống</li>
                </ul>
                <div className="flex gap-1">
                    <input
                        className="focus:outline-0 rounded xl:min-w-[400px]"
                        type="text"
                        placeholder="Từ khóa tìm kiếm"
                        value={findInput}
                        onChange={(e) => {
                            setFindInput(e.target.value);
                        }}
                    />
                    <button onClick={handleSubmitFindBtn}>
                        <FaSearch />
                    </button>
                </div>
                <Link
                    to="my-account?section=gio_hang"
                    className="relative text-lg cursor-pointer hover:text-main-color"
                >
                    <FaShoppingCart />
                    {ShoppingCardLength ? (
                        <span className="flex justify-center min-w-[20px] text-[12px] font-[600] text-white absolute top-[-10px] right-[-10px] bg-red-600 leading-[20px] rounded-full">
                            {ShoppingCardLength}
                        </span>
                    ) : null}
                </Link>
            </div>

            {/* avatar / login btn */}
            <div className="hidden gap-[2px] justify-center md:flex">
                {user ? (
                    <>
                        <div className="flex justify-center items-center bg-main-color text-white px-3 py-[10px] rounded-md cursor-pointer">
                            <Link to={'my-account'}>{user?.userName || 'Không xác định'}</Link>
                        </div>
                    </>
                ) : (
                    <>
                        <Link
                            to="sign-in"
                            className="flex justify-center items-center bg-main-color text-white px-3 py-[10px] rounded-md cursor-pointer"
                        >
                            Đăng nhập
                        </Link>
                        <Link
                            to="sign-up"
                            className="flex justify-center items-center bg-main-color text-white px-3 py-[10px] rounded-md cursor-pointer"
                        >
                            Đăng kí
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
};

export default HeaderTop;
