const CardProdHorizontal = ({ cart }) => {
    const productName = cart?.products?.productName;
    const price = cart?.price || 0;
    const quantity = cart?.quantity;
    const image = cart?.products?.images[0]?.url || '/productImages/1.webp';
    const attributes = cart?.selectedAttributes || [];
    if (!productName || !price || !quantity) return null;

    return (
        <div className="flex gap-[3%] w-[100%] mb-2">
            <div className="w-[20%]">
                <img className="w-[85px]" src={image} alt="product" />
            </div>
            <div className="w-[77%]">
                <h4 className="font-[500] text-[16px] max-h-[60px] overflow-hidden">{productName}</h4>
                {attributes.map((attr) => `${attr?.attributes.name}: ${attr?.attributes.value}`).join(', ')}
                <span className="italic mb-2 text-[15px]"></span>
                <div className="flex justify-start text-[16px] gap-7">
                    <span className="text-red-600 font-[600]">
                        {price}
                        <span>&#8363;</span>
                    </span>
                    <div className="flex justify-start gap-2 text-[15px] items-center">
                        <span className="font-[400]">{`Số lượng: ${quantity}`}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardProdHorizontal;
