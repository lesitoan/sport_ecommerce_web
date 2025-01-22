import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { FaFacebookMessenger } from 'react-icons/fa';
import { toast } from 'react-toastify';

import Button from './Button';
import Option from './Option';
import { useAddProductToCart } from '../hooks/cartsHook';
import Modal from './Modal';

const ProductInfoForm = ({ product }) => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const [currAttributes, setCurrAttributes] = useState([]);
    const { addProductToCart, isLoading } = useAddProductToCart();

    const { attributes, name: productName, price, imageUrls: images } = product;
    if (!productName || !price || !images) return navigate(-1);

    let thumnail = images[0];

    const totalPrice = Number(price) + currAttributes.reduce((acc, curr) => acc + Number(curr.addPrice || 0), 0);

    const handleSetAttributes = (attr) => {
        const indexPrevAttr = currAttributes.findIndex((item) => item.attrName === attr.attrName);
        if (indexPrevAttr === -1) {
            setCurrAttributes([...currAttributes, attr]);
            return;
        }
        if (currAttributes[indexPrevAttr].attrValue === attr.attrValue) return;
        const newAttributes = [...currAttributes];
        newAttributes[indexPrevAttr] = attr;
        setCurrAttributes(newAttributes);
    };

    const handleAddToShoppingCard = () => {
        if (currAttributes.length !== attributes.length) {
            toast.error('Vui lòng chọn đầy đủ thuộc tính !', {
                position: 'top-center',
            });
            return;
        }

        const price =
            Number(product?.price || 0) + currAttributes.reduce((total, attr) => total + Number(attr.addPrice || 0), 0);
        const productAttributeIds = currAttributes.map((attr) => attr.productAttributeId);
        const productId = product.id;
        addProductToCart({ price, productAttributeIds, productId, quantity: 1 });
    };

    return (
        <div className="sm:flex justify-between mb-10 mt-10 gap-x-4 lg:gap-x-8">
            <Modal show={showModal} onShow={setShowModal} submit={handleAddToShoppingCard}>
                <h3>
                    Bạn chắc chắn muốn thêm vào giỏ hàng ?
                    <br />
                    sau khi thêm hãy đến giỏ hàng để thanh toán
                </h3>
            </Modal>

            <div className="sm:w-1/3">
                {/* thumnail */}
                <img src={thumnail} alt="ảnh sản phẩm" />
                <ul className="flex justify-start gap-2 flex-nowrap mt-3">
                    {images.length > 0 &&
                        images.map((url, index) => {
                            return (
                                <li className="w-20 cursor-pointer" key={index}>
                                    <img src={url} alt="ảnh sản phẩm" />
                                </li>
                            );
                        })}
                </ul>
            </div>

            <div className="sm:w-2/3">
                <h3 className="font-semibold text-xl sm:text-2xl xl:text-3xl my-4 sm:my-0">{productName}</h3>
                {attributes.length > 0 &&
                    attributes.map((attr, index) => (
                        <Option
                            key={index}
                            attrData={attr}
                            handleSetAttributes={handleSetAttributes}
                            currentAttribute={currAttributes.find((item) => item.attrName === attr.type)}
                        />
                    ))}
                <h3 className="font-bold text-xl sm:text-2xl 2xl:text-3xl my-4 text-red-600">
                    {totalPrice}
                    <span>&#8363;</span>
                </h3>

                <div className="sm:flex items-center justify-start gap-2 lg:w-2/3">
                    <Button>MUA NGAY</Button>
                    <div className="flex w-full gap-x-4 sm:gap-x-2">
                        <Button
                            onClick={() => {
                                setShowModal(true);
                            }}
                            disable={isLoading}
                            isLoadinng={isLoading}
                        >
                            <FaCartShopping className="w-full" />
                        </Button>
                        <Button>
                            <FaFacebookMessenger className="w-full" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInfoForm;
