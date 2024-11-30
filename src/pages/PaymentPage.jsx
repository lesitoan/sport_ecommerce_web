import { useState } from 'react';

import CartProdHorizontal from '../ui/CartProdHorizontal';
import Button from '../ui/Button';
import Spinner from '../ui/Spinner';

import { useUser } from '../hooks/authHook';
import { useCreateOrder } from '../hooks/orderHook';
import { useGetShoppingCartsByUserId } from '../hooks/productsHooks';
import { useGetShippingAddresses } from '../hooks/addressHook';
import ShippingInfo from '../ui/ShippingInfo';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from '../ui/Modal';

const PaymentPage = () => {
    const navigate = useNavigate();
    const { user } = useUser();
    const [shippingInfo, setShippingInfo] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const { shoppingCarts, isLoading: cartLoading } = useGetShoppingCartsByUserId(user?.id);
    const { shippingAddresses, isLoading: addressesLoading } = useGetShippingAddresses(user?.id);

    const { createOrder, isSuccess, isLoading: isCreating } = useCreateOrder();

    const handleSumit = () => {
        if (!shippingInfo) {
            toast.error('Vui lòng chọn địa chỉ giao hàng !', {
                position: 'top-center',
            });
            return;
        }
        createOrder({ shippingInfo, userId: user.id, shoppingCarts });
    };

    if (isSuccess) {
        navigate('/my-account?section=don_hang');
    }

    if (addressesLoading || cartLoading)
        return (
            <div className="min-h-[80vh] flex items-center justify-center">
                <Spinner />
            </div>
        );
    if (!shoppingCarts || shoppingCarts.length === 0)
        return (
            <div className="h-[50vh] mt-10 mb-10 text-[40px] italic">
                <span>HÃY CHỌN SẢN PHẨM TRƯỚC KHI THANH TOÁN !</span>
                <Link to="/" className="text-blue-600 underline ml-3">
                    Trang chủ
                </Link>
            </div>
        );

    const totalPrice = shoppingCarts.reduce((total, cart) => total + cart?.price * cart?.quantity || 0, 0);

    return (
        <div className="flex justify-between min-h-[80vh] mt-10 mb-10">
            <div className="w-[54%]">
                {/* <PaymentForm /> */}
                <Modal show={showModal} onShow={setShowModal} submit={handleSumit}>
                    <h3>Bạn chắc chắn muốn đăt đơn hàng này ?</h3>
                </Modal>
                <ShippingInfo
                    shippingAddresses={shippingAddresses}
                    onShippingInfo={setShippingInfo}
                    shippingInfo={shippingInfo}
                />
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <Button
                        onClick={(e) => {
                            e.preventDefault();
                            navigate(-1);
                        }}
                        disable={isCreating}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <FaArrowCircleLeft className="text-[25px]"></FaArrowCircleLeft>
                            Quay lại giỏ hàng
                        </div>
                    </Button>
                    <Button onClick={() => setShowModal(true)} disable={isCreating}>
                        {isCreating ? 'Đang đặt đơn...' : 'Xác nhận đơn hàng'}
                    </Button>
                </div>
            </div>

            <div className="w-[31%]">
                <h3 className="font-[600] text-[22px] mb-4">ĐƠN HÀNG CỦA BẠN</h3>
                <div className="flex flex-col justify-center gap-3">
                    {shoppingCarts.map((cart, index) => (
                        <CartProdHorizontal key={index} cart={cart} />
                    ))}
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <h6 className="font-[400] text-[20px]">TỔNG CỘNG:</h6>
                    <h6 className="font-[600] text-main-color text-[30px]">{totalPrice}&#8363;</h6>
                </div>
                <span className="italic">Giá trên chưa bao gồm phí vận chuyển, phí vận chuyển là 30.000đ</span>
            </div>
        </div>
    );
};

export default PaymentPage;
