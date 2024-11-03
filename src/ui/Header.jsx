import { FaGripLinesVertical, FaMinus, FaSearch, FaShoppingCart, FaSlack } from 'react-icons/fa';


const Header = () => {
    return (
        <div>
            {/* header top */}
            <div className="flex justify-between items-center px-8 py-2">
                <img src="/logo.png" alt="logo" />
                <div className='flex gap-7'>
                    <h5>Hotline: <span className='text-[red] font-[600]'>012345347343 / 3246437432</span></h5>
                    <ul className='flex gap-2'>
                        <li>Giới thiệu</li>
                        <li>Tin tức</li>
                        <li>Hệ thống</li>
                    </ul>
                    <div className='flex gap-1'>
                        <input className='focus:outline-0 rounded xl:min-w-[400px]' type="text" placeholder='Từ khóa tìm kiếm' />
                        <button><FaSearch /></button>
                    </div>
                    <h5 className='text-lg'><FaShoppingCart /></h5>
                </div>
                {/* avatar / login btn */}
                <div>
                    {/* <div className='flex cursor-pointer justify-center items-center h-[45px] w-[45px] rounded-full border-solid border border-x-slate-400 shadow-2xl'>
                        <img className='h-[100%] rounded-full ' src="/avatar.jpg" alt="avatar" />
                    </div> */}
                    <ul className='flex gap-1 justify-center items-center'>
                        <li className='hover:text-main-color hover:underline font-[500]'><a href="/login">Đăng nhập</a></li>
                        <li><FaGripLinesVertical /></li>
                        <li className='hover:text-main-color hover:underline font-[500]'><a href="/login">Đăng kí</a></li>
                    </ul>
                </div>
            </div>

            {/* header bottom */}
            <div className='bg-main-color w-full' >
                <ul
                    className='w-[1500px] m-auto flex gap-x-6 gap-y-2 flex-wrap py-3 text-[#fff] text-[14px]
                font-[500] cursor-pointer
            '>
                    <li>ÁO TUYỂN QUỐC GIA</li>
                    <li>ÁO CÂU LẠC BỘ</li>
                    <li>ÁO KHÔNG LOGO</li>
                    <li>GIÀY BÓNG ĐÁ</li>
                    <li>GIÀY THỂ THAO</li>
                    <li>ÁO KHOÁC</li>
                    <li>ĐỒ CẦU LÔNG</li>
                    <li>ĐỒ BÓNG CHUYỀN</li>
                    <li>ĐỒ BÓNG RỖ</li>
                    <li>PHỤ KIỆN BÓNG ĐÁ</li>
                    <li>ĐỒ CẦU LÔNG</li>
                    <li>ĐỒ BÓNG CHUYỀN</li>
                    <li>ĐỒ BÓNG RỖ</li>
                    <li>PHỤ KIỆN BÓNG ĐÁ</li>
                    <li>ĐỒ CẦU LÔNG</li>
                    <li>ĐỒ BÓNG CHUYỀN</li>
                    <li>ĐỒ BÓNG RỖ</li>
                    <li>PHỤ KIỆN BÓNG ĐÁ</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;