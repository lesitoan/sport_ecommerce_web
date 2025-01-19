import { Link } from 'react-router-dom';

const CartProduct = ({ product }) => {
    let thumnail = product?.imageUrls[0];
    const { name, price, slug } = product;
    if (!name || !slug || !thumnail) return null;

    return (
        <div className="w-[48%] sm:w-[30%] lg:w-56 2xl:w-64 bg-white mb-4 text-sm sm:text-base 2xl:text-lg">
            <div className="w-full cursor-pointer">
                <Link to={`/products/${slug}`}>
                    <img src={thumnail} alt="product" />
                </Link>
            </div>
            <h4 className="min-h-8  text-[#000] font-[700] mt-2">
                <Link to={`/products/${slug}`}>{name || 'unKnow'}</Link>
            </h4>

            <div className="min-h-12 text-[#000]">
                <h4 className="text-red-600 font-semibold mb-1">{`${price || 0} `}&#8363;</h4>
                {/* <a className="underline underline-offset-4" href="#">Xem chi tiết</a> */}
                <button className="bg-white text-black w-[100%] border-2 border-main-color rounded-sm py-2 hover:bg-main-color hover:text-white transition-all">
                    <Link className="" to={`/products/${slug}`}>
                        Xem chi tiết
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default CartProduct;
