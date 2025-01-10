import CartProduct from './CartProduct';

const BoxProducts = ({ products, limit }) => {
    if (products.length === 0) return null;
    if (limit) products = products.slice(0, limit);
    return (
        <div className="mb-[40px] mt-[25px]">
            <div className="w-[100%] flex justify-start flex-wrap xl:gap-[calc((var(--max-width-xl)-var(--card-width-xl)*4)/3)] 2xl:gap-[calc((var(--max-width-2xl)-var(--card-width-2xl)*5)/4)]">
                {products.map((prod, index) => (
                    <CartProduct product={prod} key={index} />
                ))}
            </div>
        </div>
    );
};
export default BoxProducts;
