import CardProduct from "./CardProduct";

const BoxProducts = ({ productsCategory, numOfItems }) => {
    console.log("productsCategory:", productsCategory)
    if (!productsCategory || !productsCategory.products) return <div>KHÔNG CÓ SẢN PHẨM</div>
    const categoryName = productsCategory.categoryName;
    let products = productsCategory.products;
    if (numOfItems) products = products.slice(0, numOfItems);

    return (
        <div className="mb-[40px] mt-[25px]">
            <h3 className="font-[600] text-[30px] mb-2 uppercase">{categoryName}</h3>
            <div className="w-[100%] flex justify-between flex-wrap">
                {products.map((prod, index) => <CardProduct product={prod} key={index} />)}
            </div>
        </div>
    )
}
export default BoxProducts