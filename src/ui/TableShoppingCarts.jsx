import RowCart from './RowCart';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { UseGetShoppingCart } from '../hooks/cartsHook';
import Spinner from './Spinner';

const TableShoppingCarts = () => {
    const navigate = useNavigate();
    const { carts, isLoading } = UseGetShoppingCart();
    const totalPrice = carts?.reduce((acc, cart) => acc + cart.price, 0);

    if (isLoading) return <Spinner />;
    if (!carts || carts.length === 0) return <h4>Chưa có sản phẩm</h4>;

    return (
        <div className="">
            <table className="w-full text-[16px] text-left">
                <thead className=" bg-main-color text-white">
                    <tr>
                        <th scope="col" className="pl-2 pr-1 py-2">
                            Hình ảnh
                        </th>
                        <th scope="col" className="pr-10 py-2">
                            Tên sản phẩm
                        </th>
                        <th scope="col" className="pr-2 py-2">
                            Số lượng
                        </th>
                        <th scope="col" className="pr-2 py-2">
                            Giá tiền
                        </th>
                        <th scope="col" className=" py-2">
                            Hành động
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {carts.map((cart) => (
                        <RowCart key={cart.cartItemId} cart={cart} />
                    ))}
                </tbody>
            </table>
            {carts.length > 0 && (
                <>
                    <div className="flex items-center gap-2 mt-2">
                        <h6 className="font-[400] text-[20px]">TỔNG CỘNG:</h6>
                        <h6 className="font-[600] text-main-color text-[30px]">{totalPrice || 0}&#8363;</h6>
                    </div>
                    <p className="italic">Giá trên chưa bao gồm phí vận chuyển</p>
                </>
            )}
            <div className="flex justify-center mt-5">
                <Button
                    onClick={() => {
                        navigate('/payment');
                    }}
                >
                    HOÀN TẤT ĐƠN HÀNG
                </Button>
            </div>
        </div>
    );
};

export default TableShoppingCarts;
