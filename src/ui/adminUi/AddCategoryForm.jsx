import { useForm } from 'react-hook-form';
import Button from '../Button';

const AddCategoryForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="mt-5 backdrop-blur-lg bg-opacity-80 shadow-2xl p-5 border border-slate-250">
            <h2 className="text-[25px] font-[600] pb-5 uppercase">Thêm danh mục</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-wrap justify-between mb-5">
                    {/* name */}
                    <div className="md:col-span-5 w-[100%]">
                        <input
                            className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                            placeholder="Tên danh mục*"
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
                </div>
                <Button>Thêm danh mục</Button>
            </form>
        </div>
    );
};

export default AddCategoryForm;
