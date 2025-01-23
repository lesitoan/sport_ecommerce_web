import { useParams } from 'react-router-dom';
import ProductInfoForm from '../ui/ProductInfoForm';
import { useGetProduct } from '../hooks/productsHooks';
import Spinner from '../ui/Spinner';

const ProductDetailPage = () => {
    const { prodSlug } = useParams();
    const { isLoading, product } = useGetProduct(prodSlug);
    console.log('product: ', product);

    if (isLoading) return <Spinner size={'lg'} css={'w-full h-[100vh]'} />;

    if (!product) return <div className="h-[50vh] mt-10 mb-10 text-[40px] italic">KHÔNG TÌM THẤY SẢN PHẨM</div>;

    return (
        <div>
            {<ProductInfoForm product={product} />}
            <hr className="border-t-2 border-main-color mb-2" />
            {/* ------------ */}
            <div className="text-base sm:text-lg 2xl:text-xl">
                <h3 className="font-semibold text-xl sm:text-2xl xl:text-3xl my-3 uppercase">Chi tiết sản phẩm</h3>
                <p className="mb-8">
                    3. HƯỚNG DẪN BẢO QUẢN - Không sử dụng chất tẩy <br />
                    - Lật mặt trái trước khi giặt để màu sắc được luôn như mới
                    <br />
                    - Ủi mặt trái để giữ màu sắc áo lâu phai <br />
                    - Giặt ở nhiệt độ bình thường <br />
                    LƯU Ý: <br />
                    - Đổi trả áo bóng đá trong vòng 7 ngày nếu sản phẩm có lỗi sản xuất hoặc không đúng mô tả
                    <br />
                    - Thời gian để chúng tôi xử lý yêu cầu đổi trả sản phẩm áo đá bóng có thể mất từ 3-5 ngày làm việc
                    <br />
                    - Tính từ ngày chúng tôi nhận lại được sản phẩm hoàn trả từ bạn.
                    <br />
                    - Không đổi trả đối với áo đã qua in nếu không có lỗi của NSX
                    <br />
                    Tìm hiểu thêm thông tin tại đây:
                    <br />
                    - Fanpage: shopaobongda.net1
                    <br />
                    - Shopee: aobongda.net
                    <br />
                    - Tiktok: aobongdanet.official
                    <br />
                    Hotline: 0989.248.835 - 094.303.9054
                    <br />
                    Hân hạnh được phục vụ Quý Khách!
                </p>
            </div>
        </div>
    );
};

export default ProductDetailPage;
