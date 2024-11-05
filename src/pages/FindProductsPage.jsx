import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import Pagination from "../ui/Pagination";
import { useFindProductsByName } from "../hooks/productsHooks";
import BoxProducts from "../ui/BoxProducts";
import Spinner from "../ui/Spinner";
import { NUMBER_ITEM_PER_PAGE } from "../utils/constant";

const FindProductsPage = () => {
    const { prodSlug } = useParams();
    const [isLoading, products, count] = useFindProductsByName(prodSlug);

    if (isLoading) return <div className="h-[80vh] flex items-center justify-center"><Spinner /></div>
    if (products && products.length == 0) return <div className="h-[50vh] mt-10 mb-10 text-[40px] italic">KHÔNG TÌM THẤY SẢN PHẨM</div>
    return (
        <>
            <BoxProducts productsCategory={{ products }} numOfItems={NUMBER_ITEM_PER_PAGE} />
            <Pagination count={count} />
            <hr className="border-t-2 border-main-color mt-3 mb-10" />
        </>
    )
}

export default FindProductsPage;