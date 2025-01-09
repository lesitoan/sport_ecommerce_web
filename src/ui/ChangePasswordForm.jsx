import { useForm } from 'react-hook-form';

import Button from './Button';
import { useChangePassword } from '../hooks/authHook';

const ChangePasswordForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm();
    const { changePassword, isLoading } = useChangePassword();

    const onSubmit = (data) => {
        changePassword(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-[600] text-[22px] mb-1">THAY ĐỔI MẬT KHẨU</h3>
            <div className="flex flex-wrap justify-between">
                {/* pw */}
                <div className="md:col-span-5 w-[100%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Mật khẩu cũ *"
                        type="password"
                        name="oldPassword"
                        disabled={isLoading}
                        {...register('oldPassword', { required: 'mật khẩu không được để trống*' })}
                    />
                    {errors?.oldPassword && (
                        <span className="text-red-700 italic text-[14px] py-10">{errors.oldPassword?.message}</span>
                    )}
                </div>

                {/* new pw */}
                <div className="md:col-span-5 w-[100%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Mật khẩu mới *"
                        type="password"
                        name="newPassword"
                        disabled={isLoading}
                        {...register('newPassword', {
                            required: 'Mật khẩu không được để trống',
                            pattern: { value: /^[^\s]*$/, message: 'Mật khẩu mới không hợp lệ' },
                            minLength: { value: 8, message: 'Mật khẩu mới phải lớn hơn 8 kí tự' },
                        })}
                    />

                    {errors?.newPassword && (
                        <span className="text-red-700 italic text-[14px] py-10">{errors.newPassword?.message}</span>
                    )}
                </div>
                {/* new pw confirm */}
                <div className="md:col-span-5 w-[100%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Xác nhận mật khẩu mới *"
                        type="password"
                        name="newPasswordConfirm"
                        disabled={isLoading}
                        {...register('newPasswordConfirm', {
                            required: 'mật khẩu không được để trống*',
                            validate: (curValue) =>
                                curValue === getValues().newPassword || 'không khớp với mật khẩu mới',
                        })}
                    />
                    {errors?.newPasswordConfirm && (
                        <span className="text-red-700 italic text-[14px] py-10">
                            {errors.newPasswordConfirm?.message}
                        </span>
                    )}
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Button>
                    <div className="flex items-center justify-center gap-2">Thay đổi mật khẩu</div>
                </Button>
            </div>
        </form>
    );
};

export default ChangePasswordForm;
