import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaMinus } from 'react-icons/fa';
import Button from './Button';

const SignUpForm = () => {
    return (
        <div className="flex justify-center">
            <div className="mt-[14vh] mb-[14vh] w-96 backdrop-blur-lg bg-opacity-80 shadow-2xl p-5 border border-slate-250">
                <h2 className="text-2xl font-[600] pb-5">Đăng kí tài khoản</h2>
                <form>
                    <div className="mb-4">
                        <label className="block mb-2 text-[16px] font-[400]">UserName</label>
                        <div className="md:col-span-5 w-[100%]">
                            <input
                                className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 px-1 w-full placeholder:italic placeholder:text-gray-600 text-black"
                                placeholder="levantuan234 *"
                                type="text"
                            // name="full_name"
                            // id="full_name"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-[16px] font-[400]">Email hoặc SĐT</label>
                        <div className="md:col-span-5 w-[100%]">
                            <input
                                className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 px-1 w-full placeholder:italic placeholder:text-gray-600 text-black"
                                placeholder="user@gmail.com *"
                                type="text"
                            // name="full_name"
                            // id="full_name"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-[16px] font-[400]">Mật khẩu</label>
                        <div className="md:col-span-5 w-[100%]">
                            <input
                                className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 px-1 w-full placeholder:italic placeholder:text-gray-600 text-black"
                                placeholder="**********"
                                type="text"
                            // name="full_name"
                            // id="full_name"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2 text-[16px] font-[400]">Xác nhận mật khẩu</label>
                        <div className="md:col-span-5 w-[100%]">
                            <input
                                className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 px-1 w-full placeholder:italic placeholder:text-gray-600 text-black"
                                placeholder="**********"
                                type="text"
                            // name="full_name"
                            // id="full_name"
                            />
                        </div>
                    </div>
                    <Button>Đăng kí</Button>
                </form>
                <div className='flex gap-2 items-center justify-center mt-4 text-[16px]'>
                    <span className='italic'>Đăng nhập bằng: </span>
                    <FaGoogle className='text-[25px] text-red-600 cursor-pointer'></FaGoogle>
                    <FaFacebook className='text-[25px] text-blue-600 cursor-pointer'></FaFacebook>
                </div>
                <div className='flex gap-2 items-center justify-center mt-4 text-[16px]'>
                    <span
                        className='italic'>
                        Đã có tài khoản:
                        <span
                            className='text-blue-600 font-[500] hover:underline cursor-pointer'
                        ><Link to='/sign-in'>Đăng nhập</Link></span>

                    </span>
                    <FaMinus />
                    <span
                        className='italic'>
                        Quên mật khẩu:
                        <a className='text-blue-600 font-[500] hover:underline ' href="#">  reset password</a>
                    </span>

                </div>
            </div>
        </div>
    )
}

export default SignUpForm;