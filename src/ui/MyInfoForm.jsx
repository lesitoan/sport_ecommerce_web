import { useForm } from 'react-hook-form';

import { useUser } from '../hooks/authHook';

const MyInfoForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => console.log(data);
    const { user } = useUser();

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-5">
            <h3 className="font-[600] text-[22px] mb-1">THÔNG TIN CÁ NHÂN</h3>
            <div className="flex flex-wrap justify-between">
                {/* name */}
                {/* <div className="md:col-span-5 w-[49%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Họ và tên *"
                        type="text"
                        name="fullName"
                        {...register("fullName", { required: "Họ và tên không được để trống*", maxLength: { value: 50, message: "Vượt quá 50 kí tự" } })}
                    />
                    {errors?.fullName && <span className='text-red-700 italic text-[14px] py-10'>{errors.fullName?.message}</span>}
                </div> */}

                {/* email */}
                <div className="md:col-span-5 w-[100%]">
                    <input
                        className="cursor-not-allowed h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="email *"
                        type="text"
                        name="email"
                        value={user?.user_metadata?.email}
                        disabled
                        {...register('email', {
                            required: 'SĐT không được để trống*',
                            maxLength: { value: 10, message: 'Vượt quá 10 kí tự' },
                        })}
                    />
                    {errors?.phoneNumber && (
                        <span className="text-red-700 italic text-[14px] py-10">{errors.phoneNumber?.message}</span>
                    )}
                </div>

                {/* userName */}
                <div className="md:col-span-5 w-[100%]">
                    <input
                        className="cursor-not-allowed h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Tên đăng nhập *"
                        type="text"
                        name="userName"
                        value={user?.user_metadata?.userName}
                        disabled
                        {...register('userName', {
                            required: 'địa chỉ này không được để trống*',
                            maxLength: { value: 100, message: 'Vượt quá 100 kí tự' },
                        })}
                    />
                    {errors?.address && (
                        <span className="text-red-700 italic text-[14px] py-10">{errors.address?.message}</span>
                    )}
                </div>
            </div>
            {/* <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Button onClick={(e) => {
                    event.preventDefault();
                }}>
                    <div className='flex items-center justify-center gap-2'>
                        Lưu thay đổi
                    </div>
                </Button>
            </div> */}
        </form>
    );
};

export default MyInfoForm;
