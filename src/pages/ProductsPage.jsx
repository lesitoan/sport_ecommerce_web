import { useParams } from 'react-router-dom';
import Pagination from '../ui/Pagination';
import { useGetProducts } from '../hooks/productsHooks';
import BoxProducts from '../ui/BoxProducts';
import Spinner from '../ui/Spinner';
import { NUMBER_ITEM_PER_PAGE } from '../utils/constant';

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

    const numberPage = Math.ceil(data.count / NUMBER_ITEM_PER_PAGE);

    return (
        <>
            <h3 className="font-semibold text-lg sm:text-xl md:text-2xl xl:text-3xl mt-5 mb-2 uppercase">
                Áo bóng đá câu lạc bộ
            </h3>

            <div className="my-5 flex gap-y-5 flex-col lg:flex-row justify-between items-center text-sm sm:text-base 2xl:text-lg">
                <ul className="flex justify-start gap-x-2 gap-y-4 lg:w-3/4 flex-wrap">
                    <li>
                        <a
                            href="#"
                            className="text-sm sm:text-base rounded-md px-4 py-3 hover:bg-main-color hover:text-white transition duration-300 ease-in-out"
                        >
                            Ngoại Hạng Anh
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-sm sm:text-base rounded-md px-4 py-3 hover:bg-main-color hover:text-white transition duration-300 ease-in-out"
                        >
                            Laliga
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-sm sm:text-base rounded-md px-4 py-3 hover:bg-main-color hover:text-white transition duration-300 ease-in-out"
                        >
                            Bundesliga
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="text-sm sm:text-base rounded-md px-4 py-3 hover:bg-main-color hover:text-white transition duration-300 ease-in-out"
                        >
                            Ligue1
                        </a>
                    </li>
                </ul>
                <select
                    name="filter"
                    id="filter"
                    className="lg:w-1/4 block bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
            </div>

            <BoxProducts products={data.products} />
            <Pagination count={numberPage} />
            <hr className="border-t-2 border-main-color mt-6 mb-10" />
        </>
    );
};

export default ProductPage;
