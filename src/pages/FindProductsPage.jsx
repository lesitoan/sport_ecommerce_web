import { useParams } from 'react-router-dom';
import Pagination from '../ui/Pagination';
import { useGetProducts } from '../hooks/productsHooks';
import BoxProducts from '../ui/BoxProducts';
import Spinner from '../ui/Spinner';

const FindProductsPage = () => {
    const { prodSlug } = useParams();
    const { isLoading, data } = useGetProducts({ q: prodSlug });

    if (isLoading) return <Spinner size={'lg'} css={'w-full h-[100vh]'} />;

    if (!data || !data?.products || data?.products.length === 0) {
        return <div className="h-[50vh] mt-10 mb-10 text-[40px] italic">CHƯA CÓ SẢN PHẨM</div>;
    }
    console.log(data);
    return (
        <>
            <BoxProducts products={data.products} />
            <Pagination />
            <hr className="border-t-2 border-main-color mt-3 mb-10" />
        </>
    );
};

export default FindProductsPage;
