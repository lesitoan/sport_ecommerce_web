import { Link } from 'react-router-dom';
import { FaCheckCircle, FaFacebook, FaGoogle, FaMinus } from 'react-icons/fa';
import Button from './Button';
import { useForm } from 'react-hook-form';
import { useResetPassword } from '../hooks/authHook';
import Modal from './Modal';
import { useEffect, useState } from 'react';

const ResetPwForm = () => {
    const [showModal, setShowModal] = useState(false);
    const { isLoading, isSuccess, resetPassword } = useResetPassword();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, userName } = data;
        resetPassword({ email, userName });
    };

    useEffect(() => {
        if (isSuccess) {
            setShowModal(true);
        }
    }, [isSuccess]);

    return (
        <div className="flex justify-center">
            <div className="mt-[14vh] mb-[14vh] w-96 backdrop-blur-lg bg-opacity-80 shadow-2xl p-5 border border-slate-250">
                <h2 className="text-2xl font-[600] pb-5">Lấy lại mật khẩu</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block mb-1 text-[16px] font-[400]">Email</label>
                        <div className="md:col-span-5 w-[100%]">
                            <input
                                className="mb-1 h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 px-1 w-full placeholder:italic placeholder:text-gray-600 text-black"
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
                                <span className="text-red-700 italic text-[14px]">{errors.email?.message}</span>
                            )}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block mb-1 text-[16px] font-[400]">UserName</label>
                        <div className="md:col-span-5 w-[100%]">
                            <input
                                className="mb-1 h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 px-1 w-full placeholder:italic placeholder:text-gray-600 text-black"
                                placeholder="levantuan234 *"
                                type="text"
                                name="userName"
                                disabled={isLoading}
                                {...register('userName', {
                                    required: 'userName không được để trống',
                                    pattern: {
                                        value: /^[a-z0-9_]+$/,
                                        message: 'UserName chỉ chứa các kí tự a-z, A-Z, 0-9, _',
                                    },
                                    minLength: { value: 5, message: 'UserName phải lớn hơn 5 kí tự' },
                                })}
                            />
                            {errors?.userName && (
                                <span className="text-red-700 italic text-[14px]">{errors.userName?.message}</span>
                            )}
                        </div>
                    </div>
                    <Button disable={isLoading}>{!isLoading ? 'Lấy lại mật khẩu' : 'Đang thực hiện...'}</Button>
                </form>
                <div className="flex gap-2 items-center justify-center mt-4 text-[16px]">
                    <span className="italic">Đăng nhập bằng: </span>
                    <FaGoogle className="text-[25px] text-red-600 cursor-pointer"></FaGoogle>
                    <FaFacebook className="text-[25px] text-blue-600 cursor-pointer"></FaFacebook>
                </div>
                <div className="flex gap-2 items-center justify-center mt-4 text-[16px]">
                    <span className="italic">
                        Đã có tài khoản:
                        <span className="text-blue-600 font-[500] hover:underline cursor-pointer">
                            <Link to="/sign-in">Đăng nhập</Link>
                        </span>
                    </span>
                    <FaMinus />
                    <span className="italic">
                        chưa có tài khoản:
                        <span className="text-blue-600 font-[500] hover:underline cursor-pointer">
                            <Link to="/sign-up">Đăng kí</Link>
                        </span>
                    </span>
                </div>
            </div>
            <Modal show={showModal} onShow={setShowModal}>
                <div className="flex flex-col items-center justify-center gap-2">
                    <FaCheckCircle className="text-green-500 text-[40px]"></FaCheckCircle>
                    <h3>Lấy lại mật khẩu thành công, bạn hãy truy cập Email để xem mật khẩu</h3>
                </div>
            </Modal>
        </div>
    );
};

export default ResetPwForm;
