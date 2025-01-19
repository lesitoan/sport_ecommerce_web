import CartProduct from './CartProduct';

const BoxProducts = ({ products, limit, boxBaner }) => {
    if (products.length === 0) return null;
    if (limit) products = products.slice(0, limit);
    return (
        <div className="mb-10 mt-4 ">
            <div className="w-full flex justify-between flex-wrap gap-y-4">
                {/* show banner if home page */}
                {boxBaner && (
                    <div className="hidden xl:block w-56 2xl:w-64">
                        <img
                            className="w-full h-full object-cover"
                            src="../public/ao_bong_da_clb.png"
                            alt="Ảnh sản phẩm"
                        />
                    </div>
                )}
                {/*  */}

                {products.map((prod, index) => (
                    <CartProduct product={prod} key={index} />
                ))}
            </div>
        </div>
    );
};
export default BoxProducts;
