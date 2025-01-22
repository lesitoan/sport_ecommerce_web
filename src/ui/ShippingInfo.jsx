import { useEffect } from 'react';
import { FaMoneyBill1Wave, FaTruckFast } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const ShippingInfo = ({ addresses, onShippingInfo, shippingInfo }) => {
    useEffect(() => {
        if (addresses && addresses.length > 0) {
            onShippingInfo({
                ...addresses[0],
            });
        }
    }, [onShippingInfo, addresses]);

    if (!addresses || addresses.length === 0) {
        return (
            <div className="text-[18px] text-center">
                hãy ấn vào thêm địa chỉ và tiếp tục thanh toán đơn hàng
                <br />
                <Link className="text-blue-600 hover:underline" to="/my-account?section=dia_chi">
                    Thêm địa chỉ
                </Link>
            </div>
        );
    }

    return (
        <>
            <div className="mb-6 text-sm sm:text-base lg:test-lg font-medium">
                <h3 className="font-semibold text-xl lg:text-2xl  mb-2 uppercase">THÔNG TIN GIAO HÀNG</h3>
                <label className=" text-gray-800">Chọn địa chỉ của bạn:</label>
                <select
                    id="options"
                    name="options"
                    className="my-2 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    onChange={(e) => {
                        const shippingAddress = addresses.find((add) => add.id === Number(e.target.value));
                        onShippingInfo({ ...shippingAddress });
                    }}
                >
                    {addresses.map((address, index) => (
                        <option
                            value={address.id}
                            key={address.id}
                            className="bg-slate-200 truncate mb-2 px-4 py-2 rounded-sm"
                        >
                            {`${address?.fullName} - ${address.ward} - ${address.district} - ${address.province}`}
                        </option>
                    ))}
                </select>
                <label className="mt-3 mb-1 text-gray-800">Bạn đang chọn địa chỉ:</label>
                {shippingInfo && (
                    <div className="bg-slate-200 shadow-lg flex justify-between my-2 px-4 py-2 rounded-sm">
                        <div>
                            <p>{shippingInfo?.fullName}</p>
                            <p>{shippingInfo.phoneNumber}</p>
                            <p>{`${shippingInfo.ward} - ${shippingInfo.district} - ${shippingInfo.province}`}</p>
                            <p>{shippingInfo.addressDetail}</p>
                        </div>
                    </div>
                )}
            </div>
            <h3 className="font-semibold text-xl lg:text-2xl  mb-3 uppercase">PHƯƠNG THỨC THANH TOÁN</h3>
            <div className="flex flex-wrap justify-between gap-3 sm:gap-0 md:gap-3">
                <div className="flex justify-start items-center border-solid border-2 border-main-color p-2 gap-3 w-full sm:w-[49%] md:w-full xl:w-[49%] cursor-pointer hover:bg-main-color hover:text-white">
                    <FaTruckFast className="text-3xl text-orange-400"></FaTruckFast>
                    <p>
                        <input type="text" name="paymentMethod" className="hidden" />
                        <span className="font-semibold text-inherit">Thanh toán khi nhận hàng </span>
                        <br />
                        <span className=" text-inherit">Quý khách sẽ thanh toán bằng tiền mặt khi nhận hàng</span>
                    </p>
                </div>
                <div className="flex justify-start items-center border-solid border-2 p-2 gap-3 w-full sm:w-[49%] md:w-full xl:w-[49%] cursor-not-allowed opacity-70">
                    <FaMoneyBill1Wave className="text-3xl text-orange-400"></FaMoneyBill1Wave>
                    <p>
                        <span className="font-semibold text-inherit">Thanh toán chuyển khoản</span>
                        <br />
                        <span className=" text-inherit">Thanh toán chuyển khoản qua số tài khoản ngân hàng</span>
                    </p>
                </div>
            </div>
        </>
    );
};

export default ShippingInfo;
