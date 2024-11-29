import { useEffect } from 'react';
import { FaMoneyBill1Wave, FaTruckFast } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ShippingInfo = ({ shippingAddresses, onShippingInfo, shippingInfo }) => {
    useEffect(() => {
        if (shippingAddresses && shippingAddresses.length > 0) {
            onShippingInfo({
                shippingAddress: shippingAddresses[0],
                paymentMethod: 'thanh_toan_khi_nhan_hang',
            });
        }
    }, [onShippingInfo, shippingAddresses]);
    if (!shippingAddresses || shippingAddresses.length === 0)
        return (
            <div className="text-[18px] text-center">
                hãy ấn vào thêm địa chỉ và tiếp tục thanh toán đơn hàng
                <br />
                <Link className="text-blue-600 hover:underline" to="/my-account?section=dia_chi">
                    Thêm địa chỉ
                </Link>
            </div>
        );

    return (
        <>
            <div className="mb-6">
                <h3 className="font-[600] text-[22px] mb-1">THÔNG TIN GIAO HÀNG</h3>
                <label className="mt-3 font-[500] block text-[18px] text-gray-800">Chọn địa chỉ của bạn:</label>
                <select
                    id="options"
                    name="options"
                    className="mt-2 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-[18px] text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    onChange={(e) => {
                        const shippingAddress = shippingAddresses.find((add) => add.id === Number(e.target.value));
                        onShippingInfo({ shippingAddress, paymentMethod: 'thanh_toan_khi_nhan_hang' });
                    }}
                >
                    {shippingAddresses.map((address, index) => (
                        <option
                            value={address.id}
                            key={index}
                            className="bg-slate-200 truncate  mb-2 px-4 py-2 rounded-sm"
                        >
                            {`${address?.fullName} - ${address.addressDetail}`}
                        </option>
                    ))}
                </select>
                <label className="mt-3 mb-1 font-[500] block text-[18px] text-gray-800">Bạn đang chọn địa chỉ:</label>
                {shippingInfo && (
                    <div className="bg-slate-200 shadow-lg flex justify-between mb-2 px-4 py-2 rounded-sm">
                        <div>
                            <p>{shippingInfo?.shippingAddress?.fullName}</p>
                            <p>{shippingInfo?.shippingAddress?.phoneNumber}</p>
                            <p>{`${shippingInfo?.shippingAddress?.ward} - ${shippingInfo?.shippingAddress?.district} - ${shippingInfo?.shippingAddress?.province}`}</p>
                            <p>{shippingInfo?.shippingAddress?.addressDetail}</p>
                        </div>
                    </div>
                )}
            </div>
            <h3 className="font-[600] text-[22px] mb-2 mt-5">PHƯƠNG THỨC THANH TOÁN</h3>
            <div className="flex flex-wrap justify-between">
                <div className="flex justify-between items-center border-solid border-2 border-main-color p-2 gap-3 md:col-span-5 w-[49%] cursor-pointer hover:bg-main-color hover:text-white">
                    <FaTruckFast className="text-[45px] text-orange-400"></FaTruckFast>
                    <p>
                        <input
                            type="text"
                            name="paymentMethod"
                            className="hidden"
                            defaultValue="thanh_toan_khi_nhan_hang"
                        />
                        <span className="font-[600] text-[16px]">Thanh toán khi nhận hàng </span>
                        <br />
                        <span className="text-[14px]">Quý khách sẽ thanh toán bằng tiền mặt khi nhận hàng</span>
                    </p>
                </div>
                <div className="flex justify-between items-center border-solid border-2 p-2 gap-3 md:col-span-5 w-[49%] cursor-not-allowed opacity-80">
                    <FaMoneyBill1Wave className="text-[45px] text-orange-400"></FaMoneyBill1Wave>
                    <p>
                        <span className="font-[600] text-[16px]">Thanh toán chuyển khoản</span>
                        <br />
                        <span className="text-[14px]">Thanh toán chuyển khoản qua số tài khoản ngân hàng</span>
                    </p>
                </div>
                <div className="md:col-span-5 w-[100%]">
                    <input
                        className="h-7 bg-slate-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black"
                        value={`Quý khách sẽ thanh toán bằng tiền mặt khi nhận hàng`}
                        type="text"
                        onChange={() => ''}
                    />
                </div>
            </div>
        </>
    );
};

export default ShippingInfo;
