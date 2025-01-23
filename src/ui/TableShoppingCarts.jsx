import RowCart from './RowCart';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import { UseGetShoppingCart } from '../hooks/cartsHook';
import Spinner from './Spinner';

const TableShoppingCarts = () => {
    const navigate = useNavigate();
    const { carts, isLoading } = UseGetShoppingCart();
    const totalPrice = carts?.reduce((acc, cart) => acc + cart.price, 0);

    if (isLoading) return <Spinner size={'md'} css={'mt-14'} />;
    if (!carts || carts.length === 0)
        return (
            <div className="mt-10 text-base sm:text-lg lg:text-xl text-center">
                Chưa có sản phẩm nào trong giỏ hàng 🤷‍♂️
            </div>
        );

    return (
        <div className="">
            <span className="italic text-red-600 md:hidden text-xs my-4 block">
                *Nếu không nhìn thấy nút +/- hoặc nút delete sản phẩm, thì hãy kéo sản phẩm sang trái để thao tác
            </span>
            <div className="overflow-x-scroll">
                <table className="w-full text-left min-w-[600px]">
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
            </div>
            {carts.length > 0 && (
                <>
                    <div className="flex items-center gap-2 mt-5 text-lg sm:text-xl lg:text-2xl">
                        <h6 className="font-normal">TỔNG CỘNG:</h6>
                        <h6 className="font-bold text-main-color">{totalPrice || 0}&#8363;</h6>
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
