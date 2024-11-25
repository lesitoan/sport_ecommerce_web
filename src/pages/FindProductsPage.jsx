import { useParams } from 'react-router-dom';
import Pagination from '../ui/Pagination';
import { useFindProductsByName } from '../hooks/productsHooks';
import BoxProducts from '../ui/BoxProducts';
import Spinner from '../ui/Spinner';

const FindProductsPage = () => {
    const { prodSlug } = useParams();
    const { isLoading, data } = useFindProductsByName(prodSlug);

    if (isLoading)
        return (
            <div className="h-[80vh] flex items-center justify-center">
                <Spinner />
            </div>
        );
    if (data?.products && data?.products.length === 0)
        return <div className="h-[50vh] mt-10 mb-10 text-[40px] italic">KHÔNG TÌM THẤY SẢN PHẨM</div>;
    return (
        <>
            <BoxProducts products={data.products} />
            <Pagination count={data?.count} />
            <hr className="border-t-2 border-main-color mt-3 mb-10" />
        </>
    );
};

export default FindProductsPage;
