import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";
import { toast } from 'react-toastify';

import Button from "./Button";
import Option from "./Option";


const ProductInfoForm = ({ product }) => {
    const navigate = useNavigate();

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
        try {
            const cartItem = {
                id: product.id,
                productName: product.productName,
                price: totalPrice ? totalPrice : 0,
                type: type ? type.name : null,
                color: color ? color.name : null,
                size: size ? size.name : null,
                image: null
            }
            let productLocalStorage = localStorage.getItem('shoppingCard');
            let txt;
            if (productLocalStorage) {
                productLocalStorage = JSON.parse(productLocalStorage);
                if (productLocalStorage.length >= 7) {
                    toast.error("Giỏ hàng đã đầy, hãy thanh toán ngay để mua thêm !", {
                        position: "top-center"
                    });
                    return null;
                }
                txt = JSON.stringify([...productLocalStorage, cartItem]);
            } else {
                txt = JSON.stringify([cartItem]);
            }
            localStorage.setItem('shoppingCard', `${txt}`);
            toast.success('Đã thêm vào giỏ hàng thành công !', {
                position: "top-center"
            });
            return 1;
        } catch (err) {
            toast.error('Có lỗi xảy ra, vui lòng thử lại !', {
                position: "top-center"
            });
            return null;
        }
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
                    <Button onClick={() => {
                        const check = handleAddToShoppingCard();
                        console.log(check)
                        if (check) navigate("/payment");
                    }}>MUA NGAY</Button>
                    <Button onClick={handleAddToShoppingCard}><FaCartShopping /></Button>
                    <Button ><FaFacebookMessenger /></Button>
                </div>
            </div>
        </div>
    )
}

export default ProductInfoForm;