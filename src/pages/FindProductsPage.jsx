import { useParams } from 'react-router-dom';
import Pagination from '../ui/Pagination';
import { useGetProducts } from '../hooks/productsHooks';
import BoxProducts from '../ui/BoxProducts';
import Spinner from '../ui/Spinner';
import { NUMBER_ITEM_PER_PAGE } from '../utils/constant';
import SortSelector from '../ui/SortSelector';

const FindProductsPage = () => {
    const { prodSlug } = useParams();
    const { isLoading, data } = useGetProducts({ q: prodSlug });

    if (isLoading) return <Spinner size={'lg'} css={'w-full h-[100vh]'} />;

    if (!data || !data?.products || data?.products.length === 0) {
        return (
            <div className="h-screen mt-10 text-base sm:text-lg lg:text-xl text-center">
                Sản phẩm bạn tìm không tồn tại 😢
            </div>
        );
    }
    const numberPage = Math.ceil(data.count / NUMBER_ITEM_PER_PAGE);
    return (
        <>
            <h6 className="text-base sm:text-lg lg:text-xl mt-5">
                <span className="font-semibold">{data.count}</span> {`kết quả tìm kiếm cho: `}
                <span className="font-semibold">{prodSlug}</span>
            </h6>
            <div className="flex justify-end my-3">
                <SortSelector />
            </div>
            <BoxProducts products={data.products} />
            <Pagination count={numberPage} />
            <hr className="border-t-2 border-main-color mt-3 mb-10" />
        </>
    );
};

export default FindProductsPage;
