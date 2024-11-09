import { FaCartShopping } from "react-icons/fa6";
import Button from "./Button";
import { FaFacebookMessenger } from "react-icons/fa";
import Option from "./Option";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductInfoForm = ({ product }) => {
    // const [totalPrice, setTotalPrice] = useState(product?.price ? Number(product?.price) : 0);
    let totalPrice = product?.price ? Number(product?.price) : 0;
    const [type, setType] = useState({});
    const [size, setSize] = useState({});
    const [color, setColor] = useState({});
    const handleSetTotalPrice = () => {
        const priceDefault = product?.price ? Number(product?.price) : 0;
        const typeaddCharge = type?.addCharge ? Number(type?.addCharge) : 0;
        const sizeaddCharge = size?.addCharge ? Number(size?.addCharge) : 0;
        const coloraddCharge = color?.addCharge ? Number(color?.addCharge) : 0;
        // setTotalPrice(priceDefault + typeaddCharge + sizeaddCharge + coloraddCharge);
        totalPrice = priceDefault + typeaddCharge + sizeaddCharge + coloraddCharge;
    }
    handleSetTotalPrice();

    const handleAddToShoppingCard = () => {
        console.log('dsds')
    }

    return (
        <div className="flex justify-between mb-10 mt-10">
            <div className="w-[30%]">
                <img src="/productImages/4.webp" alt="product photo" />
                <ul className="flex justify-between flex-nowrap mt-3">
                    <li className="w-[80px]">
                        <img src="/productImages/4.webp" alt="product photo" />
                    </li>
                    <li className="w-[80px]">
                        <img src="/productImages/4.webp" alt="product photo" />
                    </li>
                    <li className="w-[80px]">
                        <img src="/productImages/4.webp" alt="product photo" />
                    </li>
                    <li className="w-[80px]">
                        <img src="/productImages/4.webp" alt="product photo" />
                    </li>
                    <li className="w-[80px]">
                        <img src="/productImages/4.webp" alt="product photo" />
                    </li>

                </ul>
            </div>
            <div className="w-[68%] p-3">
                <h3 className="font-[700] text-[26px] mb-1">{product.productName}</h3>
                <Option types={product?.type} onType={setType} currType={type} />
                <Option types={product?.size} onType={setSize} currType={size} />
                <Option types={product?.color} onType={setColor} currType={color} />

                <h3 className="font-[700] text-[26px] mb-4 text-red-600">{totalPrice}<span>&#8363;</span></h3>

                <div className="flex items-center justify-start gap-2">
                    <Button><Link to='/payment'>MUA NGAY</Link></Button>
                    <Button onClick={handleAddToShoppingCard}><FaCartShopping /></Button>
                    <Button><FaFacebookMessenger /></Button>
                </div>
            </div>
        </div>
    )
}

export default ProductInfoForm;