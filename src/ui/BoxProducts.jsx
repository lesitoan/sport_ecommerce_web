import CardProduct from "./CardProduct";

const BoxProducts = ({ products, categoryName, limit }) => {
    if (products.length == 0) return <div>KHÔNG CÓ SẢN PHẨM</div>
    if (limit) products = products.slice(0, limit);
    return (
        <div className="mb-[40px] mt-[25px]">
            {categoryName && <h3 className="font-[600] text-[30px] mb-2 uppercase">{categoryName}</h3>}
            <div className="w-[100%] flex justify-between flex-wrap">
                {products.map((prod, index) => <CardProduct product={prod} key={index} />)}
            </div>
        </div>
    )
}
export default BoxProducts
