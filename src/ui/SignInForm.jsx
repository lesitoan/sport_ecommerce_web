import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaMinus } from 'react-icons/fa';
import Button from './Button';

const SignInForm = () => {
    return (
        <div class="flex justify-center">
            <div class="mt-[14vh] mb-[14vh] w-96 backdrop-blur-lg bg-opacity-80 shadow-2xl p-5 border border-slate-250">
                <h2 class="text-2xl font-[600] pb-5">Đăng nhập</h2>
                <form>
                    <div class="mb-4">
                        <label for="email" class="block mb-2 text-[16px] font-[400]">Email hoặc SĐT</label>
                        <div class="md:col-span-5 w-[100%]">
                            <input
                                className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 px-1 w-full placeholder:italic placeholder:text-black text-black"
                                placeholder="user@gmail.com *"
                                type="text"
                            // name="full_name"
                            // id="full_name"
                            />
                        </div>
                    </div>
                    <div class="mb-4">
                        <label for="email" class="block mb-2 text-[16px] font-[400]">Mật khẩu</label>
                        <div class="md:col-span-5 w-[100%]">
                            <input
                                className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 px-1 w-full placeholder:italic placeholder:text-black text-black"
                                placeholder="**********"
                                type="text"
                            // name="full_name"
                            // id="full_name"
                            />
                        </div>
                    </div>
                    <Button>Đăng nhập</Button>
                </form>
                <div className='flex gap-2 items-center justify-center mt-4 text-[16px]'>
                    <span className='italic'>Đăng nhập bằng: </span>
                    <FaGoogle className='text-[25px] text-red-600 cursor-pointer'></FaGoogle>
                    <FaFacebook className='text-[25px] text-blue-600 cursor-pointer'></FaFacebook>
                </div>
                <div className='flex gap-2 items-center justify-center mt-4 text-[16px]'>
                    <span
                        className='italic'>
                        chưa có tài khoản:
                        <span
                            className='text-blue-600 font-[500] hover:underline cursor-pointer'
                        ><Link to='/sign-up'>Đăng kí</Link></span>
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

export default SignInForm;