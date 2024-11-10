import { FaGripLinesVertical, FaSearch, FaShoppingCart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import createSlug from '../utils/createSlug';

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

    return (
        <div className="flex justify-between items-center px-8 py-2">
            <Link to='/'><img src="/logo.png" alt="logo" /></Link>
            <div className='flex gap-7'>
                <h5>Hotline: <span className='text-[red] font-[600]'>012345347343 / 3246437432</span></h5>
                <ul className='flex gap-2'>
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
                <Link to="payment" className='text-lg cursor-pointer hover:text-main-color relative'>
                    <FaShoppingCart />
                    {ShoppingCardLength ? <span className="flex justify-center min-w-[20px] text-[12px] font-[600] text-white absolute top-[-10px] right-[-10px] bg-red-600 leading-[20px] rounded-full" >{ShoppingCardLength}</span> : null}
                </Link>
            </div>
            {/* avatar / login btn */}
            <div>
                {/* <div className='flex cursor-pointer justify-center items-center h-[45px] w-[45px] rounded-full border-solid border border-x-slate-400 shadow-2xl'>
                        <img className='h-[100%] rounded-full ' src="/avatar.jpg" alt="avatar" />
                    </div> */}
                <ul className='flex gap-1 justify-center items-center'>
                    <li className='hover:text-main-color hover:underline font-[500]'><Link to='login'>Đăng nhập</Link></li>
                    <li><FaGripLinesVertical /></li>
                    <li className='hover:text-main-color hover:underline font-[500]'><Link to='login'>Đăng kí</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default HeaderTop;