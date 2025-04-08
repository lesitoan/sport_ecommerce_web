import { Link } from 'react-router-dom';
import { FaFacebook, FaGoogle, FaMinus } from 'react-icons/fa';
import Button from './Button';
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useSignIn } from '../hooks/authHook';

const SignInForm = () => {
    const { signIn, isLoading, isSuccess, user } = useSignIn();
    const { setUser } = useAuth();

    useEffect(() => {
        if (isSuccess && user) {
            setUser(user);
        }
    }, [user, isSuccess, setUser]);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;
        signIn({ email, password });
    };

    return (
        <div className="flex justify-center items-center h-[80vh] min-h-min">
            <div className="h-max w-96 lg:w-[500px] backdrop-blur-lg shadow-2xl p-5 rounded-md border-slate-250">
                <h2 className="text-center text-xl lg:text-2xl font-semibold mb-5 uppercase">Đăng nhập</h2>
                <h4 className="mb-2 text-center text-green-500">tk demo: user@gmail.com | 123456789</h4>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4 text-sm sm:text-base">
                        <label className="block mb-1 font-normal">Email</label>
                        <>
                            <input
                                className="mb-1 px-3 py-2 bg-gray-200 shadow-lg focus:outline-0 border-solid border-1 border-sky-500 w-full placeholder:italic placeholder:text-gray-600 text-black rounded-md"
                                placeholder="user@gmail.com *"
                                type="email"
                                name="email"
                                disabled={isLoading}
                                {...register('email', {
                                    required: 'email không được để trống',
                                    pattern: { value: /\S+@\S+\.\S+/, message: 'email không hợp lệ' },
                                })}
                            />
                            {errors?.email && (
                                <span className="text-red-700 italic text-sm">{errors.email?.message}</span>
                            )}
                        </>
                    </div>

                    <div className="mb-4 text-sm sm:text-base">
                        <label className="block mb-1 font-normal">Mật khẩu</label>
                        <>
                            <input
                                className="mb-1 px-3 py-2 bg-gray-200 shadow-lg focus:outline-0 border-solid border-1 border-sky-500 w-full placeholder:italic placeholder:text-gray-600 text-black rounded-md"
                                placeholder="**********"
                                type="password"
                                name="password"
                                disabled={isLoading}
                                {...register('password', {
                                    required: 'Mật khẩu không được để trống',
                                    // pattern: { value: /^[^\s]*$/, message: "Mật khẩu không hợp lệ" },
                                    // minLength: { value: 8, message: "Mật khẩu phải lớn hơn 8 kí tự" }
                                })}
                            />
                            {errors?.password && (
                                <span className="text-red-700 italic text-sm">{errors.password?.message}</span>
                            )}
                        </>
                    </div>

                    <Button disable={isLoading} isLoadinng={isLoading}>
                        Đăng nhập
                    </Button>
                </form>

                <div className="flex gap-2 items-center justify-center my-4 text-sm sm:text-base">
                    <span className="italic">Đăng nhập bằng: </span>
                    <FaGoogle className="text-2xl text-red-600 cursor-pointer"></FaGoogle>
                    <FaFacebook className="text-2xl text-blue-600 cursor-pointer"></FaFacebook>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center text-sm sm:text-base">
                    <span className="italic">
                        chưa có tài khoản:
                        <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                            <Link to="/sign-up">Đăng kí</Link>
                        </span>
                    </span>
                    <span className="italic">
                        Quên mật khẩu:
                        <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                            <Link to="/reset-password">Lấy lại mật khẩu</Link>
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SignInForm;
