import { Link } from "react-router-dom"

const CardProduct = ({ product }) => {
    return (
        <div className="w-[280px] bg-white mb-4">
            <div className="w-[100%] cursor-pointer">
                <Link to='/products/dsdsd'>
                    <img src="/productImages/1.webp" alt="product" />
                </Link>
            </div>
            <div className="text-[#000] p-2.5">
                <Link to='/products/dsdsd'>
                    <h4 className="font-[700] text-[16px] mb-1">{product?.productName || 'unKnow'}</h4>
                </Link>
                <ul className="text-[14px]">
                    <li><span className="text-red-600 font-[600]">80.000Đ</span> (hang thun lạnh)</li>
                    <li><span className="text-red-600 font-[600]">80.000Đ</span> (hang thun lạnh)</li>
                    <li><span className="text-red-600 font-[600]">80.000Đ</span> (hang thun lạnh)</li>
                </ul>
                {/* <a className="underline underline-offset-4" href="#">Xem chi tiết</a> */}
                <Link className="underline underline-offset-4" to='/products/dsdsd'>Xem chi tiết</Link>
            </div>
        </div>
    )
}

export default CardProduct