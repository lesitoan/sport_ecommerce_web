import { Link, useNavigate } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaMinus } from 'react-icons/fa';
import Button from './Button';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { getCurrentUser } from '../services/authApi';

const SignInForm = () => {
    const navigate = useNavigate();
    const { user, signin, siginLoading } = useAuth();

    useEffect(() => {
        if (user) {
            if (user?.role === 'admin') {
                navigate('/admin', { replace: true });
            } else {
                navigate(-1);
            }
        }
    }, [user, navigate]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        signin(email, password);
    };

    return (
        <div className="flex justify-center">
            <div className="mt-[14vh] mb-[14vh] w-96 backdrop-blur-lg bg-opacity-80 shadow-2xl p-5 border border-slate-250">
                <h2 className="text-2xl font-[600] pb-5">Đăng nhập</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block mb-1 text-[16px] font-[400]">Email</label>
                        <div className="md:col-span-5 w-[100%]">
                            <input
                                className="mb-1 h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 px-1 w-full placeholder:italic placeholder:text-gray-600 text-black"
                                placeholder="user@gmail.com *"
                                type="email"
                                name="email"
                                disabled={siginLoading}
                                {...register('email', {
                                    required: 'email không được để trống',
                                    pattern: { value: /\S+@\S+\.\S+/, message: 'email không hợp lệ' },
                                })}
                            />
                            {errors?.email && (
                                <span className="text-red-700 italic text-[14px]">{errors.email?.message}</span>
                            )}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1 text-[16px] font-[400]">Mật khẩu</label>
                        <div className="md:col-span-5 w-[100%]">
                            <input
                                className="mb-1 h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 px-1 w-full placeholder:italic placeholder:text-gray-600 text-black"
                                placeholder="**********"
                                type="password"
                                name="password"
                                disabled={siginLoading}
                                {...register('password', {
                                    required: 'Mật khẩu không được để trống',
                                    // pattern: { value: /^[^\s]*$/, message: "Mật khẩu không hợp lệ" },
                                    // minLength: { value: 8, message: "Mật khẩu phải lớn hơn 8 kí tự" }
                                })}
                            />
                            {errors?.password && (
                                <span className="text-red-700 italic text-[14px]">{errors.password?.message}</span>
                            )}
                        </div>
                    </div>
                    <Button disable={siginLoading}>{!siginLoading ? 'Đăng nhập' : 'Đang đăng nhập...'}</Button>
                </form>
                <div className="flex gap-2 items-center justify-center mt-4 text-[16px]">
                    <span className="italic">Đăng nhập bằng: </span>
                    <FaGoogle className="text-[25px] text-red-600 cursor-pointer"></FaGoogle>
                    <FaFacebook className="text-[25px] text-blue-600 cursor-pointer"></FaFacebook>
                </div>
                <div className="flex gap-2 items-center justify-center mt-4 text-[16px]">
                    <span className="italic">
                        chưa có tài khoản:
                        <span className="text-blue-600 font-[500] hover:underline cursor-pointer">
                            <Link to="/sign-up">Đăng kí</Link>
                        </span>
                    </span>
                    <FaMinus />
                    <span className="italic">
                        Quên mật khẩu:
                        <p className="text-blue-600 font-[500] hover:underline "> reset password</p>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
