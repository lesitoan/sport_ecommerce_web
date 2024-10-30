import { FaFacebookMessenger } from "react-icons/fa";
import Button from "../ui/Button";
import { FaCartShopping } from "react-icons/fa6";
import CardProduct from "../ui/CardProduct";

const ProductDetailPage = () => {
    return <div>
        {/* image, price, size */}
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
                <h3 className="font-[700] text-[26px] mb-1">Áo bóng đá câu lạc bộ PSg tím than 2024-2025</h3>
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
        <hr className="border-t-2 border-main-color mb-2" />
        {/* ------------ */}
        <div>
            <h3 className="font-[600] text-[35px] mb-2">Chi tiết sản phẩm</h3>
            <p className="mb-8">3. HƯỚNG DẪN BẢO QUẢN
                - Không sử dụng chất tẩy <br />

                - Lật mặt trái trước khi giặt để màu sắc được luôn như mới<br />

                - Ủi mặt trái để giữ màu sắc áo lâu phai <br />

                - Giặt ở nhiệt độ bình thường <br />

                LƯU Ý: <br />

                - Đổi trả áo bóng đá trong vòng 7 ngày nếu sản phẩm có lỗi sản xuất hoặc không đúng mô tả<br />

                - Thời gian để chúng tôi xử lý yêu cầu đổi trả sản phẩm áo đá bóng có thể mất từ 3-5 ngày làm việc<br />

                - Tính từ ngày chúng tôi nhận lại được sản phẩm hoàn trả từ bạn.<br />

                - Không đổi trả đối với áo đã qua in nếu không có lỗi của NSX<br />


                Tìm hiểu thêm thông tin tại đây:<br />
                - Fanpage: shopaobongda.net1<br />

                - Shopee: aobongda.net<br />

                - Tiktok: aobongdanet.official<br />

                Hotline: 0989.248.835 - 094.303.9054<br />

                Hân hạnh được phục vụ Quý Khách!
            </p>
        </div>
        {/* ------------ */}
        <hr className="border-t-2 border-main-color mb-2" />
        <div className="mb-[40px] mt-[25px]">
            <h3 className="font-[600] text-[35px] mb-2">Sản phẩm liên quam</h3>
            <div className="w-[100%] flex justify-between">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
        </div>
    </div>
}

export default ProductDetailPage;