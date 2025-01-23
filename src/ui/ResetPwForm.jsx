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
        <div className="flex justify-center items-center h-[80vh] min-h-min">
            <div className="h-max w-96 lg:w-[500px] backdrop-blur-lg shadow-2xl p-5 rounded-md border-slate-250">
                <h2 className="text-center text-xl lg:text-2xl font-semibold mb-5 uppercase">Lấy lại mật khẩu</h2>
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
                        <label className="block mb-1 font-normal">UserName</label>
                        <>
                            <input
                                className="mb-1 px-3 py-2 bg-gray-200 shadow-lg focus:outline-0 border-solid border-1 border-sky-500 w-full placeholder:italic placeholder:text-gray-600 text-black rounded-md"
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
                                <span className="text-red-700 italic text-sm">{errors.userName?.message}</span>
                            )}
                        </>
                    </div>
                    <Button disable={isLoading} isLoadinng={isLoading}>
                        Lấy lại mật khẩu
                    </Button>
                </form>
                <div className="flex gap-2 items-center justify-center my-4 text-sm sm:text-base">
                    <span className="italic">Đăng nhập bằng: </span>
                    <FaGoogle className="text-2xl text-red-600 cursor-pointer"></FaGoogle>
                    <FaFacebook className="text-2xl text-blue-600 cursor-pointer"></FaFacebook>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center text-sm sm:text-base">
                    <span className="italic">
                        Đã có tài khoản:
                        <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                            <Link to="/sign-in">Đăng nhập</Link>
                        </span>
                    </span>
                    <span className="italic">
                        chưa có tài khoản:
                        <span className="text-blue-600 font-medium hover:underline cursor-pointer">
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
