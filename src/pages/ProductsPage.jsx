import CardProduct from "../ui/CardProduct";
import Pagination from "../ui/Pagination";

const ProductPage = () => {
    return (
        <>
            <div className="mb-[60px] mt-[25px]">
                <h3 className="font-[600] text-[35px] mb-2">Áo câu lạc bộ</h3>
                <div className="w-[100%] flex justify-between flex-wrap">
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
                < Pagination />
                <hr className="border-t-2 border-main-color mt-3" />
            </div>
        </>
    )
}

export default ProductPage;