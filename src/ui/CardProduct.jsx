const CardProduct = () => {
    return (
        <div className="w-[280px] bg-white mb-4">
            <div className="w-[100%] cursor-pointer">
                <img src="/productImages/1.webp" alt="product" />
            </div>
            <div className="text-[#000] p-2.5">
                <h4 className="font-[700] text-[16px] mb-1">Áo bóng đá câu lạc bộ PSg tím than 2024-2025</h4>
                <ul className="text-[14px]">
                    <li><span className="text-red-600 font-[600]">80.000Đ</span> (hang thun lạnh)</li>
                    <li><span className="text-red-600 font-[600]">80.000Đ</span> (hang thun lạnh)</li>
                    <li><span className="text-red-600 font-[600]">80.000Đ</span> (hang thun lạnh)</li>
                </ul>
                <a className="underline underline-offset-4" href="#">Xem chi tiết</a>
            </div>
        </div>
    )
}

export default CardProduct