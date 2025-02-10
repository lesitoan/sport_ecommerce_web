import { useParams } from 'react-router-dom';
import Pagination from '../ui/Pagination';
import { useGetProducts } from '../hooks/productsHooks';
import BoxProducts from '../ui/BoxProducts';
import Spinner from '../ui/Spinner';
import { NUMBER_ITEM_PER_PAGE } from '../utils/constant';

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
            <select
                name="filter"
                id="filter"
                className="my-5 ml-auto lg:w-1/4 block bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm sm:text-base 2xl:text-lg"
            >
                <option className="bg-slate-200 truncate mb-2 px-4 py-2 rounded-sm" value="default">
                    Sắp xếp theo mặc định
                </option>
                <option className="bg-slate-200 truncate mb-2 px-4 py-2 rounded-sm" value="price">
                    Giá tăng dần
                </option>
                <option className="bg-slate-200 truncate mb-2 px-4 py-2 rounded-sm" value="price">
                    Giá giảm dần
                </option>
                <option className="bg-slate-200 truncate mb-2 px-4 py-2 rounded-sm" value="price">
                    Hàng mới nhất
                </option>
                <option className="bg-slate-200 truncate mb-2 px-4 py-2 rounded-sm" value="price">
                    Hàng cũ nhất
                </option>
                <option className="bg-slate-200 truncate mb-2 px-4 py-2 rounded-sm" value="price">
                    A - Z
                </option>
                <option className="bg-slate-200 truncate mb-2 px-4 py-2 rounded-sm" value="price">
                    Z - A
                </option>
            </select>
            <BoxProducts products={data.products} />
            <Pagination count={numberPage} />
            <hr className="border-t-2 border-main-color mt-3 mb-10" />
        </>
    );
};

export default FindProductsPage;
