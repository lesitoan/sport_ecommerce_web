import { useForm } from 'react-hook-form';
import Button from '../Button';

const AddProductForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        return;
    };

    return (
        <div className="mt-5 backdrop-blur-lg bg-opacity-80 shadow-2xl p-5 border border-slate-250">
            <h2 className="text-[25px] font-[600] pb-5 uppercase">Tạo sản phẩm</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap justify-between">
                    {/* name */}
                    <div className="md:col-span-5 w-[100%]">
                        <input
                            className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                            placeholder="Tên sản phẩm*"
                            type="text"
                            name="fullName"
                            {...register('fullName', {
                                required: 'Họ và tên không được để trống*',
                                maxLength: { value: 50, message: 'Vượt quá 50 kí tự' },
                            })}
                        />
                        {errors?.fullName && (
                            <span className="text-red-700 italic text-[14px] py-10">{errors.fullName?.message}</span>
                        )}
                    </div>

                    <div className="md:col-span-5 w-[100%] md:w-[50%] xl:w-[20%]">
                        <input
                            className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                            placeholder="Size *"
                            type="text"
                            name="fullName"
                            {...register('fullName', {
                                required: 'Họ và tên không được để trống*',
                                maxLength: { value: 50, message: 'Vượt quá 50 kí tự' },
                            })}
                        />
                        {errors?.fullName && (
                            <span className="text-red-700 italic text-[14px] py-10">{errors.fullName?.message}</span>
                        )}
                    </div>
                    <div className="md:col-span-5 w-[100%] md:w-[50%] xl:w-[20%]">
                        <input
                            className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                            placeholder="Màu sắc *"
                            type="text"
                            name="fullName"
                            {...register('fullName', {
                                required: 'Họ và tên không được để trống*',
                                maxLength: { value: 50, message: 'Vượt quá 50 kí tự' },
                            })}
                        />
                        {errors?.fullName && (
                            <span className="text-red-700 italic text-[14px] py-10">{errors.fullName?.message}</span>
                        )}
                    </div>
                    <div className="md:col-span-5 w-[100%] md:w-[50%] xl:w-[20%]">
                        <input
                            className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                            placeholder="Tùy chọn khác *"
                            type="text"
                            name="fullName"
                            {...register('fullName', {
                                required: 'Họ và tên không được để trống*',
                                maxLength: { value: 50, message: 'Vượt quá 50 kí tự' },
                            })}
                        />
                        {errors?.fullName && (
                            <span className="text-red-700 italic text-[14px] py-10">{errors.fullName?.message}</span>
                        )}
                    </div>
                    <div className="md:col-span-5 w-[100%] md:w-[50%] xl:w-[20%]">
                        <input
                            className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                            placeholder="Số lượng *"
                            type="text"
                            name="fullName"
                            {...register('fullName', {
                                required: 'Họ và tên không được để trống*',
                                maxLength: { value: 50, message: 'Vượt quá 50 kí tự' },
                            })}
                        />
                        {errors?.fullName && (
                            <span className="text-red-700 italic text-[14px] py-10">{errors.fullName?.message}</span>
                        )}
                    </div>
                    <div className="md:col-span-5 w-[100%] md:w-[30%]">
                        <input
                            className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                            placeholder="Hãng sản xuất *"
                            type="text"
                            name="fullName"
                            {...register('fullName', {
                                required: 'Họ và tên không được để trống*',
                                maxLength: { value: 50, message: 'Vượt quá 50 kí tự' },
                            })}
                        />
                        {errors?.fullName && (
                            <span className="text-red-700 italic text-[14px] py-10">{errors.fullName?.message}</span>
                        )}
                    </div>
                    <div className="md:col-span-5 w-[100%] md:w-[30%]">
                        <input
                            className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                            placeholder="Giá *"
                            type="text"
                            name="fullName"
                            {...register('fullName', {
                                required: 'Họ và tên không được để trống*',
                                maxLength: { value: 50, message: 'Vượt quá 50 kí tự' },
                            })}
                        />
                        {errors?.fullName && (
                            <span className="text-red-700 italic text-[14px] py-10">{errors.fullName?.message}</span>
                        )}
                    </div>
                    <div className="md:col-span-5 w-[100%] md:w-[30%]">
                        <input
                            className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                            placeholder="Danh mục *"
                            type="text"
                            name="fullName"
                            {...register('fullName', {
                                required: 'Họ và tên không được để trống*',
                                maxLength: { value: 50, message: 'Vượt quá 50 kí tự' },
                            })}
                        />
                        {errors?.fullName && (
                            <span className="text-red-700 italic text-[14px] py-10">{errors.fullName?.message}</span>
                        )}
                    </div>
                    <div className="md:col-span-5 w-[100%] md:w-[30%] my-5">
                        <input type="file" id="upload" hidden />
                        <label
                            className="text-[16px] px-5 py-2 rounded-sm boder-2 border-orange-800 cursor-pointer hover:bg-slate-300 hover:text-white transition-all"
                            for="upload"
                        >
                            Tải lên hình ảnh
                        </label>
                    </div>
                </div>

                <Button>Tạo Sản phẩm</Button>
            </form>
        </div>
    );
};

export default AddProductForm;
