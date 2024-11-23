import { FaMoneyBill1Wave, FaPen, FaTruckFast } from 'react-icons/fa6';
import CardProdHorizontal from '../ui/CardProdHorizontal';
import Button from '../ui/Button';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useUser } from '../hooks/authHook';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateOrder } from '../hooks/orderHook';
import { useEffect } from 'react';

const PaymentPage = () => {
    const navigate = useNavigate();
    const products = JSON.parse(localStorage.getItem('shoppingCard') || '[]');
    const totalPrice = products.reduce((total, prod) => total + prod?.price * prod?.quantity || 0, 0);
    const { user } = useUser();
    const { createOrder, isSuccess } = useCreateOrder();

    const handleSumit = () => {
        const prods = JSON.parse(localStorage.getItem('shoppingCard') || '[]');
        if (prods.length === 0) return;
        const orderData = {
            products: prods,
            fullName: user?.user_metadata?.fullName,
            phoneNumber: user?.user_metadata?.phoneNumber,
            address: user?.user_metadata?.address,
            addressDetail: user?.user_metadata?.addressDetail,
            userId: user?.id,
        };
        createOrder({ data: orderData });
    };

    useEffect(() => {
        if (isSuccess) {
            navigate('/my-account?section=don_hang');
        }
    }, [isSuccess, navigate]);

    return (
        <div className="flex justify-between min-h-[80vh] mt-10 mb-10">
            <div className="w-[54%]">
                {/* <PaymentForm /> */}
                {!user?.user_metadata?.addressDetail ? (
                    <div className="text-[18px] text-center">
                        hãy ấn vào thêm địa chỉ và tiếp tục thanh toán đơn hàng
                        <br />
                        <Link className="text-blue-600 hover:underline" to="/my-account?section=dia_chi">
                            Thêm địa chỉ
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="mb-6">
                            <h3 className="font-[600] text-[22px] mb-1">THÔNG TIN GIAO HÀNG</h3>
                            {user?.user_metadata?.addressDetail && (
                                <div className="flex items-center justify-between text-[16px] border-b border-[#e1e1e1] py-2">
                                    <div>
                                        <p className="">{user?.user_metadata?.fullName}</p>
                                        <p className="">{user?.user_metadata?.phoneNumber}</p>
                                        <p className="">{user?.user_metadata?.address}</p>
                                        <p className="">{user?.user_metadata?.addressDetail}</p>
                                    </div>
                                    <div>
                                        <button
                                            className="text-[18px] mr-3"
                                            onClick={() => navigate('/my-account?section=dia_chi')}
                                        >
                                            <FaPen />
                                        </button>
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
                                    <span className="text-[14px]">
                                        Quý khách sẽ thanh toán bằng tiền mặt khi nhận hàng
                                    </span>
                                </p>
                            </div>
                            <div className="flex justify-between items-center border-solid border-2 p-2 gap-3 md:col-span-5 w-[49%] cursor-not-allowed opacity-80">
                                <FaMoneyBill1Wave className="text-[45px] text-orange-400"></FaMoneyBill1Wave>
                                <p>
                                    <span className="font-[600] text-[16px]">Thanh toán chuyển khoản</span>
                                    <br />
                                    <span className="text-[14px]">
                                        Thanh toán chuyển khoản qua số tài khoản ngân hàng
                                    </span>
                                </p>
                            </div>
                            <div className="md:col-span-5 w-[100%]">
                                <input
                                    className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black"
                                    value={`Quý khách sẽ thanh toán bằng tiền mặt khi nhận hàng`}
                                    type="text"
                                    name="full_name"
                                    id="full_name"
                                    onChange={() => ''}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap justify-center gap-4 mt-2">
                            <Button
                                onClick={(e) => {
                                    e.preventDefault();
                                    // navigate(-1)
                                }}
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <FaArrowCircleLeft className="text-[25px]"></FaArrowCircleLeft>
                                    Tiếp tục mua hàng
                                </div>
                            </Button>
                            <Button onClick={handleSumit}>HOÀN TẤT ĐƠN HÀNG</Button>
                        </div>
                    </>
                )}
            </div>

            <div className="w-[31%]">
                <h3 className="font-[600] text-[22px] mb-4">ĐƠN HÀNG CỦA BẠN</h3>
                <div className="flex flex-col justify-center gap-3">
                    {products.length === 0 ? (
                        <h4>Chưa có sản phẩm</h4>
                    ) : (
                        products.map((prod, index) => <CardProdHorizontal key={index} product={prod} />)
                    )}
                </div>
                {products.length !== 0 && (
                    <>
                        <div className="flex items-center gap-2 mt-2">
                            <h6 className="font-[400] text-[20px]">TỔNG CỘNG:</h6>
                            <h6 className="font-[600] text-main-color text-[30px]">{totalPrice}&#8363;</h6>
                        </div>
                        <span className="italic">Giá trên chưa bao gồm phí vận chuyển</span>
                    </>
                )}
            </div>
        </div>
    );
};

export default PaymentPage;
