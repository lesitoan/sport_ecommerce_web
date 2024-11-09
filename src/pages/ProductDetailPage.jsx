import { useParams } from "react-router-dom";
import CardProduct from "../ui/CardProduct";
import ProductInfoForm from "../ui/ProductInfoForm";
import { useGetProductBySlug } from "../hooks/productsHooks";
import Spinner from "../ui/Spinner";
import { useState } from "react";

const ProductDetailPage = () => {
    const { prodSlug } = useParams();
    const { isLoading, product } = useGetProductBySlug(prodSlug);
    console.log(product);
    if (isLoading) return <div className="h-[80vh] flex items-center justify-center"><Spinner /></div>
    if (!product) return <div className="h-[50vh] mt-10 mb-10 text-[40px] italic">KHÔNG TÌM THẤY SẢN PHẨM</div>
    return <div>
        {/* image, price, size */}
        <ProductInfoForm product={product} />
        <hr className="border-t-2 border-main-color mb-2" />
        {/* ------------ */}
        {/* <div>
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
        </div> */}
        {/* ------------ */}
        <hr className="border-t-2 border-main-color mb-2" />
        {/* <div className="mb-[40px] mt-[25px]">
            <h3 className="font-[600] text-[35px] mb-2">Sản phẩm liên quam</h3>
            <div className="w-[100%] flex justify-between">
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
                <CardProduct />
            </div>
        </div> */}
    </div>
}

export default ProductDetailPage;