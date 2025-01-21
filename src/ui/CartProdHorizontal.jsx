const CardProdHorizontal = ({ cart }) => {
    const { productName, price, quantity, imageUrls, attributes } = cart;
    if (!productName || !price || !quantity || !imageUrls) return null;
    const image = imageUrls[0];

    return (
        <div className="flex  gap-6 w-full mb-2">
            <div className="w-1/4 lg:w-1/5">
                <img className="w-full " src={image} alt="product" />
            </div>
            <div className="w-3/4 lg:w-4/5">
                <h4 className="font-medium overflow-hidden">{productName}</h4>
                <span className="italic mb-2">
                    {attributes
                        .map((attr) => {
                            if (attr) {
                                return `${attr?.attrName}: ${attr?.attrValue}`;
                            } else {
                                return '';
                            }
                        })
                        .join(', ')}
                </span>

                <div className="flex justify-start gap-7">
                    <span className="text-red-600 font-semibold">
                        {price}
                        <span>&#8363;</span>
                    </span>
                    <div className="flex justify-start gap-2 items-center">
                        <span className="font-normal">{`Số lượng: ${quantity}`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProdHorizontal;
