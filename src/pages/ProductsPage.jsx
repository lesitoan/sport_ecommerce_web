import { useParams } from 'react-router-dom';
import Pagination from '../ui/Pagination';
import { useGetProductsByCategory } from '../hooks/productsHooks';
import BoxProducts from '../ui/BoxProducts';
import Spinner from '../ui/Spinner';

const ProductPage = () => {
    const { categorySlug } = useParams();
    const { isLoading, data } = useGetProductsByCategory(categorySlug);
    if (isLoading)
        return (
            <div className="h-[80vh] flex items-center justify-center">
                <Spinner />
            </div>
        );
    if (!data || !data?.products || !data?.products.length === 0) {
        return <div className="h-[50vh] mt-10 mb-10 text-[40px] italic">CHƯA CÓ SẢN PHẨM</div>;
    }
    return (
        <>
            <BoxProducts products={data.products} category={data?.categoryName} />
            <Pagination count={data.count} />
            <hr className="border-t-2 border-main-color mt-3 mb-10" />
        </>
    );
};

export default ProductPage;
