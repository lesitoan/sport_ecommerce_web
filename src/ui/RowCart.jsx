import { FaMinus, FaPlus, FaTrashAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';

import { useUpdateCartItem, UseDeleteShoppingCartById } from '../hooks/cartsHook';

const RowCart = ({ cart }) => {
    const { cartItemId, productName, price, quantity, attributes, imageUrls } = cart;
    const image = imageUrls[0];

    const [currQuantity, setCurrQuantity] = useState(quantity);

    const { updateCartItem } = useUpdateCartItem();
    const { deleteShoppingCartById, isLoading: isDeleting } = UseDeleteShoppingCartById();

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currQuantity !== quantity) {
                updateCartItem({ cartId: cartItemId, quantity: currQuantity });
            }
        }, 1400);
        return () => clearTimeout(timer);
    }, [cartItemId, updateCartItem, currQuantity, quantity]);

    if (!cartItemId || !productName || !price || !quantity) return null;

    return (
        <tr className="items-start">
            <td className="">
                <img src={image} className="w-20 h-full" alt="ảnh sản phẩm" />
            </td>
            <td className="pr-10 py-4 max-w-24">
                <h4>{productName}</h4>
                <span className="italic mb-2">
                    {attributes
                        .map((attr) => {
                            if (attr) {
                                return `${attr?.attrName}: ${attr?.attrValue}`;
                            } else {
                                return '';
                            }
                        })
                        .join(', ')}
                </span>
            </td>
            <td className="pr-2 py-4">
                <div className="flex justify-start gap-2 items-center">
                    <button
                        className="cursor-pointer hover:bg-main-color hover:text-white px-1 py-1 rounded opacity-50"
                        onClick={() => {
                            if (currQuantity > 1) {
                                setCurrQuantity((quan) => quan - 1);
                            }
                        }}
                        disabled={isDeleting}
                    >
                        <FaMinus />
                    </button>
                    <span>{currQuantity}</span>
                    <button
                        className="cursor-pointer hover:bg-main-color hover:text-white px-1 py-1 rounded opacity-50"
                        onClick={() => {
                            if (currQuantity < 15) {
                                setCurrQuantity((quan) => quan + 1);
                            }
                        }}
                        disabled={isDeleting}
                    >
                        <FaPlus />
                    </button>
                </div>
            </td>
            <td className="pr-2 py-4">{price}</td>
            <td className="py-4">
                <button
                    className="flex gap-1 justify-center items-center bg-red-600 w-14 h-7 sm:w-16 lg:w-20 sm:h-9 text-white py-[2px]  cursor-pointer rounded-md hover:bg-red-500"
                    onClick={() => deleteShoppingCartById({ cartId: cartItemId })}
                    disabled={isDeleting}
                >
                    <FaTrashAlt />
                    <span>xóa</span>
                </button>
            </td>
        </tr>
    );
};

export default RowCart;
