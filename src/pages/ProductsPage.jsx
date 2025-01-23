import { useParams } from 'react-router-dom';
import Pagination from '../ui/Pagination';
import { useGetProducts } from '../hooks/productsHooks';
import BoxProducts from '../ui/BoxProducts';
import Spinner from '../ui/Spinner';

const ProductPage = () => {
    const { categorySlug } = useParams();
    const { isLoading, data } = useGetProducts({
        category: categorySlug,
    });
    if (isLoading) return <Spinner size={'lg'} css={'w-full h-[100vh]'} />;

    if (!data || !data?.products || data?.products.length === 0) {
        return (
            <div className="h-screen mt-10 text-base sm:text-lg lg:text-xl text-center">
                Chân thành xin lỗi, sản phẩm danh mục này đã hết, bạn hãy quay lại sau nhé 😢
            </div>
        );
    }
    return (
        <>
            <BoxProducts products={data.products} />
            <Pagination />
            <hr className="border-t-2 border-main-color mt-3 mb-10" />
        </>
    );
};

export default ProductPage;
