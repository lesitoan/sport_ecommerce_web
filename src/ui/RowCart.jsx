import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa';
import { updateCartQuantityById } from '../services/productsApi';

const RowCart = ({ cart }) => {
    const id = cart?.id;
    const productName = cart?.products?.productName;
    const price = cart?.price || 100000;
    const quantity = cart?.quantity;
    const attributes = cart?.selectedAttributes || [];
    const image = cart?.products?.images[0]?.url || '/productImages/1.webp';
    if (!id || !productName || !price || !quantity) return null;

    return (
        <tr className="items-start">
            <td className="">
                <img src={image} className="w-12 max-w-full max-h-full" alt="ảnh sản phẩm" />
            </td>
            <td className="pr-10 py-4 max-w-[100px]">
                <h4>{productName}</h4>
                <span className="italic text-[15px]">
                    {attributes.map((attr) => `${attr?.attributes.name}: ${attr?.attributes.value}`).join(', ')}
                </span>
            </td>
            <td className="pr-2 py-4">
                <div className="flex justify-start gap-2 items-center">
                    <span
                        className="cursor-pointer hover:bg-main-color hover:text-white px-[3px] py-[3px] rounded opacity-50"
                        onClick={() => {
                            if (quantity > 1) updateCartQuantityById({ cartId: id, quantity: quantity - 1 });
                        }}
                    >
                        <FaMinus />
                    </span>
                    <span>{quantity}</span>
                    <span
                        className="cursor-pointer hover:bg-main-color hover:text-white px-[3px] py-[3px] rounded opacity-50"
                        onClick={() => updateCartQuantityById({ cartId: id, quantity: quantity + 1 })}
                    >
                        <FaPlus />
                    </span>
                </div>
            </td>
            <td className="pr-2 py-4">{price * quantity}</td>
            <td className="py-4">
                <FaTrashAlt
                    className="cursor-pointer hover:text-red-500"
                    // onClick={() => dispatch({ type: 'delete', payload: { id, type, size, color } })}
                ></FaTrashAlt>
            </td>
        </tr>
    );
};

export default RowCart;
