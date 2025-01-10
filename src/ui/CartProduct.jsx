import { Link } from 'react-router-dom';

const CartProduct = ({ product }) => {
    // let thumnail = '/productImages/1.webp';
    // if (product?.images && product?.images.length > 0) {
    //     const img = product.images.find((img) => img.isThumbnail === true);
    //     thumnail = img?.url || thumnail;
    // }

    let thumnail = product?.imageUrls[0] || '/productImages/1.webp';
    return (
        <div className="w-[var(--card-width-xl)] 2xl:w-[var(--card-width-2xl)] bg-white mb-4">
            <div className="w-[100%] cursor-pointer">
                <Link to={`/products/${product?.slug}`}>
                    <img src={thumnail} alt="product" />
                </Link>
            </div>
            <h4 className="min-h-[60px] text-[18px] text-[#000] font-[700] mt-2">
                <Link to={`/products/${product?.slug}`}>{product?.name || 'unKnow'}</Link>
            </h4>

            <div className="min-h-[100px] text-[18px] text-[#000]">
                <h4 className="text-red-600 font-[600] mb-1">{`${product?.price || 0} `}&#8363;</h4>
                {/* <a className="underline underline-offset-4" href="#">Xem chi tiết</a> */}
                <button className="bg-white text-black w-[100%] border-2 border-main-color rounded-sm py-[8px] hover:bg-main-color hover:text-white transition-all">
                    <Link className="" to={`/products/${product?.slug}`}>
                        Xem chi tiết
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default CartProduct;
