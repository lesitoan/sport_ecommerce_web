import { FaGripLinesVertical, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import createSlug from '../utils/createSlug';
import { useUser } from '../hooks/authHook';

const HeaderTop = () => {
    const navigate = useNavigate();
    const [findInput, setFindInput] = useState("");

    const handleSubmitFindBtn = () => {
        if (findInput) {
            const slug = createSlug(findInput)
            navigate(`/find/${slug}`);
            setFindInput("");
        }
    }
    const ShoppingCardLength = JSON.parse(localStorage.getItem("shoppingCard") || "[]").length;
    const { user } = useUser();

    return (
        <div className="flex justify-between items-center px-8 py-2">
            <Link to='/'><img src="/logo.png" alt="logo" /></Link>
            <div className='flex gap-7'>
                <h5 className='hidden xl:inline-block'>Hotline: <span className='text-[red] font-[600]'>012345347343 / 3246437432</span></h5>
                <ul className='gap-2 hidden lg:flex'>
                    <li>Giới thiệu</li>
                    <li>Tin tức</li>
                    <li>Hệ thống</li>
                </ul>
                <div className='flex gap-1'>
                    <input
                        className='focus:outline-0 rounded xl:min-w-[400px]'
                        type="text" placeholder='Từ khóa tìm kiếm'
                        value={findInput}
                        onChange={e => { setFindInput(e.target.value) }}
                    />
                    <button onClick={handleSubmitFindBtn}><FaSearch /></button>
                </div>
                <Link to="my-account?section=gio_hang" className='text-lg cursor-pointer hover:text-main-color relative'>
                    <FaShoppingCart />
                    {ShoppingCardLength ? <span className="flex justify-center min-w-[20px] text-[12px] font-[600] text-white absolute top-[-10px] right-[-10px] bg-red-600 leading-[20px] rounded-full" >{ShoppingCardLength}</span> : null}
                </Link>
            </div>
            {/* avatar / login btn */}
            <div>
                {/* <div className='flex cursor-pointer justify-center items-center h-[45px] w-[45px] rounded-full border-solid border border-x-slate-400 shadow-2xl'>
                        <img className='h-[100%] rounded-full ' src="/avatar.jpg" alt="avatar" />
                    </div> */}
                {/* <ul className='flex gap-1 justify-center items-center bg-main-color text-white px-3 py-[10px] rounded-md'>
                    <li className='hover:text-main-color hover:text-red-600 font-[500]'><Link to='sign-in'>Đăng nhập</Link></li>
                    <li><FaGripLinesVertical /></li>
                    <li className='hover:text-main-color hover:text-red-600 font-[500]'><Link to='sign-up'>Đăng kí</Link></li>
                </ul> */}
                {
                    (user) ? (
                        <div className='flex gap-[2px] justify-center items-center'>
                            <div className='flex justify-center items-center bg-main-color text-white px-3 py-[10px] rounded-md cursor-pointer'>
                                <Link to={'my-account'}>{user?.user_metadata?.userName || "Không xác định"}</Link>
                            </div>
                        </div>
                    ) : (
                        // <ul className='flex gap-1 justify-center items-center bg-main-color text-white px-3 py-[10px] rounded-md'>
                        //     <li className='hover:text-main-color hover:text-red-600 font-[500]'><Link to='sign-in'>Đăng nhập</Link></li>
                        //     <li><FaGripLinesVertical /></li>
                        //     <li className='hover:text-main-color hover:text-red-600 font-[500]'><Link to='sign-up'>Đăng kí</Link></li>
                        // </ul>
                        <div className='flex gap-[2px] justify-center items-center'>
                            <Link to='sign-in' className='flex justify-center items-center bg-main-color text-white px-3 py-[10px] rounded-md cursor-pointer'>Đăng nhập</Link>
                            <Link to='sign-up' className='flex justify-center items-center bg-main-color text-white px-3 py-[10px] rounded-md cursor-pointer'>Đăng kí</Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default HeaderTop;