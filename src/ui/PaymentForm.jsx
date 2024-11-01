import { FaArrowAltCircleLeft, FaArrowCircleLeft } from 'react-icons/fa';
import Button from './Button';
import { FaMoneyBill1Wave, FaTruckFast } from "react-icons/fa6";

const PaymentForm = () => {
    return (
        <>
            <h3 className="font-[600] text-[22px] mb-1">THÔNG TIN GIAO HÀNG</h3>
            <div className="flex flex-wrap justify-between">
                <div class="md:col-span-5 w-[49%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black"
                        placeholder="Họ và tên *"
                        type="text"
                        name="full_name"
                        id="full_name"
                    />
                </div>
                <div class="md:col-span-5 w-[49%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black"
                        placeholder="Số điện thoại *"
                        type="text"
                    // name="full_name"
                    // id="full_name"
                    />
                </div>
                <div class="md:col-span-5 w-[31.5%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black"
                        placeholder="Thành phố *"
                        type="text"
                    // name="full_name"
                    // id="full_name"
                    />
                </div>
                <div class="md:col-span-5 w-[31.5%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black"
                        placeholder="Quận huyện *"
                        type="text"
                    // name="full_name"
                    // id="full_name"
                    />
                </div>
                <div class="md:col-span-5 w-[31.5%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black"
                        placeholder="Xã *"
                        type="text"
                    // name="full_name"
                    // id="full_name"
                    />
                </div>
                <div class="md:col-span-5 w-[100%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black"
                        placeholder="Địa chỉ nhận hàng *"
                        type="text"
                    // name="full_name"
                    // id="full_name"
                    />
                </div>
                <div class="md:col-span-5 w-[100%]">
                    <textarea
                        className="h-[100px] bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 p-1 w-full placeholder:italic placeholder:text-black"
                        placeholder="Ghi chú"
                    ></textarea>
                </div>
            </div>


            <h3 className="font-[600] text-[22px] mb-2 mt-5">PHƯƠNG THỨC THANH TOÁN</h3>
            <div className="flex flex-wrap justify-between">

                <div class="flex justify-between items-center border-solid border-2 border-main-color p-2 gap-3 md:col-span-5 w-[49%]">
                    <FaTruckFast className="text-[45px] text-orange-400"></FaTruckFast>
                    <p>
                        <span className="font-[600] text-[16px]">Thanh toán khi nhận hàng </span><br />
                        <span className="text-[14px]">Quý khách sẽ thanh toán bằng tiền mặt khi nhận hàng</span>
                    </p>
                </div>
                <div class="flex justify-between items-center border-solid border-2 border-main-color p-2 gap-3 md:col-span-5 w-[49%]">
                    <FaMoneyBill1Wave className="text-[45px] text-orange-400"></FaMoneyBill1Wave>
                    <p>
                        <span className="font-[600] text-[16px]">Thanh toán chuyển khoản</span><br />
                        <span className="text-[14px]">Thanh toán chuyển khoản qua số tài khoản ngân hàng</span>
                    </p>
                </div>
                <div class="md:col-span-5 w-[100%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black"
                        value={`Quý khách sẽ thanh toán bằng tiền mặt khi nhận hàng`}
                        type="text"
                        name="full_name"
                        id="full_name"
                    />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Button>
                    <div className='flex items-center justify-center gap-2'>
                        <FaArrowCircleLeft className='text-[25px]'></FaArrowCircleLeft>
                        Tiếp tục mua hàng
                    </div>
                </Button>
                <Button>HOÀN TẤT ĐƠN HÀNG</Button>
            </div>
        </>
    )
}

export default PaymentForm;