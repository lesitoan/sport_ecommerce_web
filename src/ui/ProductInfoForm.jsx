import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';
import { FaFacebookMessenger } from 'react-icons/fa';
import { toast } from 'react-toastify';

import Button from './Button';
import Option from './Option';
import { useAddProductToCart } from '../hooks/cartsHook';
import Modal from './Modal';
import { useAuth } from '../context/AuthContext';

const ProductInfoForm = ({ product }) => {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    const [currAttributes, setCurrAttributes] = useState([]);
    const { user } = useAuth();
    // const { addProductToCart, isLoading } = useAddProductToCart();

    const { attributes, name: productName, price, imageUrls: images } = product;
    if (!productName || !price || !images) return navigate(-1);

    let thumnail = images[0];

    const totalPrice = Number(price) + currAttributes.reduce((acc, curr) => acc + Number(curr.data.price || 0), 0);

    // const handleSetAttributes = (attr) => {
    //     const indexPrevAttr = currAttributes.findIndex((item) => item.name === attr.name);
    //     if (indexPrevAttr === -1) {
    //         setCurrAttributes([...currAttributes, attr]);
    //         return;
    //     }
    //     if (currAttributes[indexPrevAttr].data.value === attr.data.value) return;
    //     const newAttributes = [...currAttributes];
    //     newAttributes[indexPrevAttr] = attr;
    //     setCurrAttributes(newAttributes);
    // };

    // const handleAddToShoppingCard = () => {
    //     if (currAttributes.length !== attributes.length) {
    //         toast.error('Vui lòng chọn đầy đủ thuộc tính !', {
    //             position: 'top-center',
    //         });
    //         return;
    //     }

    //     if (!user) {
    //         toast.warning('Vui lòng đăng nhập để mua hàng !', {
    //             position: 'top-center',
    //         });
    //         navigate('/sign-in');
    //         return;
    //     }
    //     const price = Number(product?.price || 0) + currAttributes.reduce((total, attr) => total + Number(attr.data.price || 0), 0);
    //     let productDetailIds = [];
    //     if(currAttributes.length > 0) {
    //         productDetailIds = currAttributes.map((attr) => attr.data.productDetailId);
    //     } else {
    //         productDetailIds = [product.productDetailId];
    //     }
    //     addProductToCart({ userId: user.id, price, productDetailIds });
    // };

    return (
        <div className="flex justify-between mb-10 mt-10">
            {/* <Modal show={showModal} onShow={setShowModal} submit={handleAddToShoppingCard}>
                    <h3>Bạn chắc chắn muốn thêm vào giỏ hàng ? 
                        <br/>sau khi thêm hãy đến giỏ hàng để thanh toán</h3>
                </Modal> */}
            <div className="w-[30%]">
                {/* thumnail */}
                <img src={thumnail} alt="ảnh sản phẩm" />
                <ul className="flex justify-start gap-2 flex-nowrap mt-3">
                    {images.length > 0 &&
                        images.map((url, index) => {
                            return (
                                <li className="w-[80px] cursor-pointer" key={index}>
                                    <img src={url} alt="ảnh sản phẩm" />
                                </li>
                            );
                        })}
                </ul>
            </div>
            <div className="w-[68%] p-3">
                <h3 className="font-[700] text-[26px] mb-1">{productName}</h3>
                {/* {attributes.length > 0 &&
                    attributes.map((attr, index) => (
                        <Option
                            key={index}
                            attributeType={attr}
                            handleSetAttributes={handleSetAttributes}
                            currentAttribute={currAttributes.find((item) => item.name === attr.name)}
                        />
                    ))} */}
                <h3 className="font-[700] text-[26px] mb-4 text-red-600">
                    {totalPrice}
                    <span>&#8363;</span>
                </h3>

                <div className="flex items-center justify-start gap-2">
                    <Button>MUA NGAY</Button>
                    <Button
                        onClick={() => {
                            setShowModal(true);
                        }}
                        // disable={isLoading}
                    >
                        <FaCartShopping />
                        {/* {isLoading ? 'Đang thêm...' : <FaCartShopping />} */}
                    </Button>
                    <Button>
                        <FaFacebookMessenger />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default ProductInfoForm;
