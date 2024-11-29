import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import { UseUpdateCartQuantityById, UseDeleteShoppingCartById } from '../hooks/productsHooks';

const RowCart = ({ cart }) => {
    const id = cart?.id;
    const productName = cart?.products?.productName;
    const price = cart?.price || 0;
    const quantity = cart?.quantity;
    const attributes = cart?.selectedAttributes || [];
    const image = cart?.products?.images[0]?.url || '/productImages/1.webp';

    const [currQuantity, setCurrQuantity] = useState(quantity);

    const { updateCartQuantityById } = UseUpdateCartQuantityById();
    const { deleteShoppingCartById, isLoading: deleting } = UseDeleteShoppingCartById();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currQuantity !== quantity) {
                updateCartQuantityById({ cartId: id, prevQuantity: quantity, currQuantity: currQuantity, price });
            }
        }, 1400);
        return () => clearTimeout(timer);
    }, [currQuantity]);

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
                    <button
                        className="cursor-pointer hover:bg-main-color hover:text-white px-[3px] py-[3px] rounded opacity-50"
                        onClick={() => {
                            if (currQuantity > 1) {
                                setCurrQuantity((quan) => quan - 1);
                            }
                        }}
                        disabled={deleting}
                    >
                        <FaMinus />
                    </button>
                    <span>{currQuantity}</span>
                    <button
                        className="cursor-pointer hover:bg-main-color hover:text-white px-[3px] py-[3px] rounded opacity-50"
                        onClick={() => {
                            setCurrQuantity((quan) => quan + 1);
                        }}
                        disabled={deleting}
                    >
                        <FaPlus />
                    </button>
                </div>
            </td>
            <td className="pr-2 py-4">{price}</td>
            <td className="py-4">
                <button
                    className="flex gap-1 justify-center items-center bg-red-600 w-[80px] text-white py-[6px]  cursor-pointer rounded-md hover:bg-red-500"
                    onClick={() => deleteShoppingCartById({ cartId: id })}
                    disabled={deleting}
                >
                    <FaTrashAlt />
                    <span>xóa</span>
                </button>
            </td>
        </tr>
    );
};

export default RowCart;
