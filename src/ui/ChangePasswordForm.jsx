import { useForm } from "react-hook-form"

import Button from './Button';

const ChangePasswordForm = () => {
    const { register, handleSubmit, formState: { errors }, watch } = useForm()

    const onSubmit = (data) => console.log(data)

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
                        name="password"
                        {...register("password", { required: "địa chỉ này không được để trống*", maxLength: { value: 100, message: "Vượt quá 100 kí tự" } })}
                    />
                    {errors?.address && <span className='text-red-700 italic text-[14px] py-10'>{errors.address?.message}</span>}
                </div>

                {/* new pw */}
                <div className="md:col-span-5 w-[100%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Mật khẩu mới *"
                        type="password"
                        name="newPassword"
                        {...register("newPassword", { required: "địa chỉ này không được để trống*", maxLength: { value: 100, message: "Vượt quá 100 kí tự" } })}
                    />
                    {errors?.address && <span className='text-red-700 italic text-[14px] py-10'>{errors.address?.message}</span>}
                </div>
                {/* new pw confirm */}
                <div className="md:col-span-5 w-[100%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Xác nhận mật khẩu mới *"
                        type="password"
                        name="newPasswordConfirm"
                        {...register("newPasswordConfirm", { required: "địa chỉ này không được để trống*", maxLength: { value: 100, message: "Vượt quá 100 kí tự" } })}
                    />
                    {errors?.address && <span className='text-red-700 italic text-[14px] py-10'>{errors.address?.message}</span>}
                </div>

            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Button onClick={(e) => {
                    event.preventDefault();
                }}>
                    <div className='flex items-center justify-center gap-2'>
                        Thay đổi mật khẩu
                    </div>
                </Button>
            </div>
        </form>
    )
}

export default ChangePasswordForm;