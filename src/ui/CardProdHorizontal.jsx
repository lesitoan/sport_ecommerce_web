import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";


const CardProdHorizontal = ({ product, dispatch }) => {
    const { id, productName, type, size, color, price, quantity } = product;
    if (!productName || !price) return null;

    return (
        <div>
            <div className="flex gap-[3%] w-[100%]">
                <img className="w-[20%]" src="/productImages/1.webp" alt="product" />
                <div className="w-[77%]">
                    <h4 className="font-[500] text-[16px] max-h-[60px] overflow-hidden">{productName}</h4>
                    <span className="italic mb-2 text-[15px]">{`${type ? type + ', ' : ''} ${size ? 'size: ' + size + ', ' : ''} ${color ? color : ''}`}</span>
                    <div className="flex justify-start text-[16px] gap-7">
                        <span className="text-red-600 font-[600]">{price}<span>&#8363;</span></span>
                        <div className="flex justify-start gap-2 text-[12px] items-center">
                            <span
                                className="font-[400] cursor-pointer hover:bg-main-color hover:text-white px-[3px] py-[3px] rounded opacity-50"
                                onClick={() => dispatch({ type: 'decrease', payload: { id } })}
                            >
                                <FaMinus />
                            </span>
                            <span className="font-[600]">{quantity}</span>
                            <span
                                className="font-[400] cursor-pointer hover:bg-main-color hover:text-white px-[3px] py-[3px] rounded opacity-50"
                                onClick={() => dispatch({ type: 'increase', payload: { id } })}
                            >
                                <FaPlus />
                            </span>
                        </div>
                        <FaTrashAlt
                            className="ml-auto cursor-pointer hover:text-red-500"
                            onClick={() => dispatch({ type: 'delete', payload: { id, type, size, color } })}
                        ></FaTrashAlt>
                    </div>
                </div>
            </div>
            <span className="flex justify-end text-red-600 font-[600] text-[20px]">{price * quantity}<span>&#8363;</span></span>
        </div >
    )
}

export default CardProdHorizontal;
