import { useParams } from "react-router-dom";
import Pagination from "../ui/Pagination";
import { useGetProductsByCategory } from "../hooks/productsHooks";
import BoxProducts from "../ui/BoxProducts";
import Spinner from "../ui/Spinner";
import { NUMBER_ITEM_PER_PAGE } from "../utils/constant";

const ProductPage = () => {
    const { categorySlug } = useParams();
    const [isLoading, products] = useGetProductsByCategory(categorySlug);
    if (isLoading) return <div className="h-[80vh] flex items-center justify-center"><Spinner /></div>
    if (products?.products && products?.products.length == 0) return <div className="h-[50vh] mt-10 mb-10 text-[40px] italic">CHƯA CÓ SẢN PHẨM</div>
    return (
        <>
            <BoxProducts productsCategory={products} numOfItems={NUMBER_ITEM_PER_PAGE} />
            {/* {products?.products && products?.products.length > NUMBER_ITEM_PER_PAGE && <Pagination currPage={1} numberPages={10} />} */}
            <hr className="border-t-2 border-main-color mt-3 mb-10" />
        </>
    )
}

export default ProductPage;