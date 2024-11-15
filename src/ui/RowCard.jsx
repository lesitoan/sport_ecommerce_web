import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

const RowCard = ({ product, dispatch }) => {
    const { id, productName, type, size, color, price, quantity } = product;
    if (!productName || !price) return null;

    return (
        <tr class="items-start">
            <td class="">
                <img src="/productImages/1.webp" class="w-12 max-w-full max-h-full" alt="Apple Watch" />
            </td>
            <td class="pr-10 py-4 max-w-[100px]">

                <h4>{productName}</h4>
                <span className="italic text-[15px]">{`${type ? type + ', ' : ''} ${size ? 'size: ' + size + ', ' : ''} ${color ? color : ''}`}</span>
            </td>
            <td class="pr-2 py-4">
                <div className="flex justify-start gap-2 items-center">
                    <span
                        className="cursor-pointer hover:bg-main-color hover:text-white px-[3px] py-[3px] rounded opacity-50"
                        onClick={() => dispatch({ type: 'decrease', payload: { id, type, size, color } })}
                    >
                        <FaMinus />
                    </span>
                    <span>{quantity}</span>
                    <span
                        className="cursor-pointer hover:bg-main-color hover:text-white px-[3px] py-[3px] rounded opacity-50"
                        onClick={() => dispatch({ type: 'increase', payload: { id, type, size, color } })}
                    >
                        <FaPlus />
                    </span>
                </div>
            </td>
            <td class="pr-2 py-4">
                {price * quantity}
            </td>
            <td class="py-4">
                <FaTrashAlt
                    className="cursor-pointer hover:text-red-500"
                    onClick={() => dispatch({ type: 'delete', payload: { id, type, size, color } })}

                ></FaTrashAlt>
            </td>
        </tr>

    )
}

export default RowCard;
