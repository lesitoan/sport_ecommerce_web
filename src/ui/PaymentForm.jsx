import { FaArrowCircleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaMoneyBill1Wave, FaTruckFast } from "react-icons/fa6";
import { useForm } from "react-hook-form"

import Button from './Button';

const PaymentForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-[600] text-[22px] mb-1">THÔNG TIN GIAO HÀNG</h3>
            <div className="flex flex-wrap justify-between">
                <div className="md:col-span-5 w-[49%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Họ và tên *"
                        type="text"
                        name="fullName"
                        {...register("fullName", { required: "Họ và tên không được để trống*", maxLength: { value: 50, message: "Vượt quá 50 kí tự" } })}
                    />
                    {errors.fullName && <span className='text-red-700 italic text-[14px] py-10'>{errors.fullName?.message}</span>}
                </div>
                <div className="md:col-span-5 w-[49%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Số điện thoại *"
                        type="text"
                    // name="full_name"
                    />
                </div>
                <div className="md:col-span-5 w-[31.5%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Thành phố *"
                        type="text"
                        name="city"
                        {...register("city", { required: true, maxLength: 50 })}
                    />
                    {errors.fullName && <span className='text-red-700 italic text-[14px] py-10'>Hãy điền vào ô còn thiếu</span>}
                </div>
                <div className="md:col-span-5 w-[31.5%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Quận huyện *"
                        type="text"
                    // name="full_name"
                    />
                </div>
                <div className="md:col-span-5 w-[31.5%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Xã *"
                        type="text"
                    // name="full_name"
                    />
                </div>
                <div className="md:col-span-5 w-[100%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Địa chỉ nhận hàng *"
                        type="text"
                    // name="full_name"
                    />
                </div>
                <div className="md:col-span-5 w-[100%]">
                    <textarea
                        className="h-[100px] bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 p-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Ghi chú"
                    ></textarea>
                </div>
            </div>


            <h3 className="font-[600] text-[22px] mb-2 mt-5">PHƯƠNG THỨC THANH TOÁN</h3>
            <div className="flex flex-wrap justify-between">

                <div className="flex justify-between items-center border-solid border-2 border-main-color p-2 gap-3 md:col-span-5 w-[49%]">
                    <FaTruckFast className="text-[45px] text-orange-400"></FaTruckFast>
                    <p>
                        <span className="font-[600] text-[16px]">Thanh toán khi nhận hàng </span><br />
                        <span className="text-[14px]">Quý khách sẽ thanh toán bằng tiền mặt khi nhận hàng</span>
                    </p>
                </div>
                <div className="flex justify-between items-center border-solid border-2 border-main-color p-2 gap-3 md:col-span-5 w-[49%]">
                    <FaMoneyBill1Wave className="text-[45px] text-orange-400"></FaMoneyBill1Wave>
                    <p>
                        <span className="font-[600] text-[16px]">Thanh toán chuyển khoản</span><br />
                        <span className="text-[14px]">Thanh toán chuyển khoản qua số tài khoản ngân hàng</span>
                    </p>
                </div>
                <div className="md:col-span-5 w-[100%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black"
                        value={`Quý khách sẽ thanh toán bằng tiền mặt khi nhận hàng`}
                        type="text"
                        name="full_name"
                        id="full_name"
                        onChange={() => ""}
                    />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Button onClick={(e) => {
                    event.preventDefault();
                    navigate(-1)
                }}>
                    <div className='flex items-center justify-center gap-2'>
                        <FaArrowCircleLeft className='text-[25px]'></FaArrowCircleLeft>
                        Tiếp tục mua hàng
                    </div>
                </Button>
                <Button>HOÀN TẤT ĐƠN HÀNG</Button>
            </div>
        </form>
    )
}

export default PaymentForm;