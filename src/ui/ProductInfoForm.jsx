import { FaCartShopping } from "react-icons/fa6";
import Button from "./Button";
import { FaFacebookMessenger } from "react-icons/fa";

const ProductInfoForm = ({ product }) => {
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
                {/* loại vải */}
                <h6 className="mb-1">Bạn đang chọn: <span className="font-[600]">Hàng thun lạnh</span></h6>
                <ul className="flex justify-start gap-2 mb-4">
                    <li
                        className="flex flex-col items-center justify-center rounded
                        w-[150px] h-[60px] border border-main-color cursor-pointer hover:bg-blue-200"
                    >
                        <p>Hàng thun lạnh</p>
                        <p className="font-[600] text-red-600">80.000đ</p>
                    </li>
                    <li
                        className="flex flex-col items-center justify-center rounded
                        w-[150px] h-[60px] border border-main-color cursor-pointer hover:bg-blue-200"
                    >
                        <p>Hàng thun co giãn</p>
                        <p className="font-[600] text-red-600">100.000đ</p>
                    </li>
                    <li
                        className="flex flex-col items-center justify-center rounded
                        w-[150px] h-[60px] border border-main-color cursor-pointer hover:bg-blue-200"
                    >
                        <p>Hàng mè caro</p>
                        <p className="font-[600] text-red-600">120.000đ</p>
                    </li>
                </ul>
                {/* -------- */}
                <h6 className="mb-1">Bạn đang chọn: <span className="font-[600]">Size S</span></h6>
                <ul className="flex justify-start gap-2 mb-4">
                    <li
                        className="flex flex-col items-center justify-center rounded
                        w-[100px] h-[40px] border border-main-color cursor-pointer hover:bg-blue-200"
                    >
                        <p>S</p>
                    </li>
                    <li
                        className="flex flex-col items-center justify-center rounded
                        w-[100px] h-[40px] border border-main-color cursor-pointer hover:bg-blue-200"
                    >
                        <p>M</p>
                    </li>
                    <li
                        className="flex flex-col items-center justify-center rounded
                        w-[100px] h-[40px] border border-main-color cursor-pointer hover:bg-blue-200"
                    >
                        <p>L</p>
                    </li>
                    <li
                        className="flex flex-col items-center justify-center rounded
                        w-[100px] h-[40px] border border-main-color cursor-pointer hover:bg-blue-200"
                    >
                        <p>XL</p>
                    </li>
                    <li
                        className="flex flex-col items-center justify-center rounded
                        w-[100px] h-[40px] border border-main-color cursor-pointer hover:bg-blue-200"
                    >
                        <p>XXL</p>
                    </li>
                </ul>
                <div className="flex items-center justify-start gap-2">
                    <Button>MUA NGAY</Button>
                    <Button><FaCartShopping /></Button>
                    <Button><FaFacebookMessenger /></Button>
                </div>
            </div>
        </div>
    )
}

export default ProductInfoForm;