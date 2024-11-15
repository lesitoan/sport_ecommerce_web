import { FaMinus, FaPlus, FaTrashAlt } from "react-icons/fa";

const CardProdHorizontal = ({ product }) => {
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
                        <div className="flex justify-start gap-2 text-[15px] items-center">
                            <span className="font-[400]">{`Số lượng: ${quantity}`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}




export default CardProdHorizontal;
