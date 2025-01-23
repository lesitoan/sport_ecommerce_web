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
            <h3 className="font-semibold text-xl lg:text-2xl  mb-3 uppercase">THAY ĐỔI MẬT KHẨU</h3>

            <div className="mb-4 text-sm sm:text-base">
                <label className="block mb-1 font-normal">Mật khẩu hiện tại</label>
                <>
                    <input
                        className="mb-1 px-3 py-2 bg-gray-200 shadow-lg focus:outline-0 border-solid border-1 border-sky-500 w-full placeholder:italic placeholder:text-gray-600 text-black rounded-md"
                        placeholder="**********"
                        type="password"
                        name="oldPassword"
                        disabled={isLoading}
                        {...register('oldPassword', {
                            required: 'Mật khẩu không được để trống',
                        })}
                    />
                    {errors?.password && (
                        <span className="text-red-700 italic text-[14px]">{errors.oldPassword?.message}</span>
                    )}
                </>
            </div>

            <div className="mb-4 text-sm sm:text-base">
                <label className="block mb-1 font-normal">Mật khẩu mới</label>
                <>
                    <input
                        className="mb-1 px-3 py-2 bg-gray-200 shadow-lg focus:outline-0 border-solid border-1 border-sky-500 w-full placeholder:italic placeholder:text-gray-600 text-black rounded-md"
                        placeholder="**********"
                        type="password"
                        name="newPassword"
                        disabled={isLoading}
                        {...register('newPassword', {
                            required: 'Mật khẩu không được để trống',
                            pattern: { value: /^[^\s]*$/, message: 'Mật khẩu mới không hợp lệ' },
                            minLength: { value: 8, message: 'Mật khẩu mới phải lớn hơn 8 kí tự' },
                        })}
                    />
                    {errors?.password && (
                        <span className="text-red-700 italic text-[14px]">{errors.newPassword?.message}</span>
                    )}
                </>
            </div>

            <div className="mb-4 text-sm sm:text-base">
                <label className="block mb-1 font-normal">Xác nhận mật khẩu mới</label>
                <>
                    <input
                        className="mb-1 px-3 py-2 bg-gray-200 shadow-lg focus:outline-0 border-solid border-1 border-sky-500 w-full placeholder:italic placeholder:text-gray-600 text-black rounded-md"
                        placeholder="**********"
                        type="password"
                        name="newPasswordConfirm"
                        disabled={isLoading}
                        {...register('newPasswordConfirm', {
                            required: 'mật khẩu không được để trống*',
                            validate: (curValue) =>
                                curValue === getValues().newPassword || 'không khớp với mật khẩu mới',
                        })}
                    />
                    {errors?.password && (
                        <span className="text-red-700 italic text-[14px]">{errors.newPasswordConfirm?.message}</span>
                    )}
                </>
            </div>

            <Button isLoadinng={isLoading} disable={isLoading}>
                <div className="flex items-center justify-center gap-2">Thay đổi mật khẩu</div>
            </Button>
        </form>
    );
};

export default ChangePasswordForm;
