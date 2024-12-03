import CartProduct from './CartProduct';

const BoxProducts = ({ products, categoryName, limit }) => {
    if (products.length === 0) return <div>KHÔNG CÓ SẢN PHẨM</div>;
    if (limit) products = products.slice(0, limit);
    return (
        <div className="mb-[40px] mt-[25px]">
            {categoryName && <h3 className="font-[600] text-[30px] mb-2 uppercase">{categoryName}</h3>}
            <div className="w-[100%] flex justify-start flex-wrap xl:gap-[calc((var(--max-width-xl)-var(--card-width-xl)*4)/3)] 2xl:gap-[calc((var(--max-width-2xl)-var(--card-width-2xl)*5)/4)]">
                {products.map((prod, index) => (
                    <CartProduct product={prod} key={index} />
                ))}
            </div>
        </div>
    );
};
export default BoxProducts;
