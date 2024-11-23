import { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { FaEllipsis } from 'react-icons/fa6';

const TableProducts = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleShowDetails = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div className="overflow-x-auto">
            <div className="mb-2">
                <select
                    name="category"
                    className="bg-main-color text-white font-[500] mt-1 block w-[20vw] px-3 py-2  outline-none cursor-pointer rounded-sm"
                >
                    <option value="1">Áo bóng đá</option>
                    <option value="2">Giày bóng đá</option>
                    <option value="3">Phụ kiện bóng đá</option>
                    <option value="4">Quần áo bóng chuyền</option>
                    <option value="5">Danh mục 5</option>
                    <option value="6">Danh mục 6</option>
                    <option value="7">Danh mục 7</option>
                </select>
            </div>
            <div className="max-h-96 overflow-y-scroll">
                <table className="w-full text-[16px] text-left">
                    <thead className="bg-main-color text-white sticky top-0">
                        <tr>
                            <th scope="col" className="py-2 pl-4">
                                STT
                            </th>
                            <th scope="col" className="py-2 pr-4">
                                Tên sản phẩm
                            </th>
                            <th scope="col" className="py-2 px-4">
                                Danh mục
                            </th>
                            <th scope="col" className="py-2 px-4">
                                Số lượng
                            </th>

                            <th scope="col" className="py-2 px-4">
                                giá tiền
                            </th>
                            <th scope="col" className="py-2 px-4">
                                hành động
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {Array.from({ length: 16 }).map((_, index) => {
                            const product = {
                                name: `Sản phẩm ${index + 1}`,
                                quantity: Math.floor(Math.random() * 100),
                                price: (Math.random() * 1000000).toFixed(2),
                                brand: `Hãng ${index + 1}`,
                                color: `Màu ${index + 1}`,
                                size: `Size ${index + 1}`,
                                option: `Tùy chọn ${index + 1}`,
                                imageUrl: `https://via.placeholder.com/50?text=Image+${index + 1}`,
                            };

                            return (
                                <tr
                                    key={index}
                                    className={`border-b ${
                                        index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'
                                    } hover:bg-gray-400`}
                                >
                                    <td className="py-2 pl-4">{index + 1}</td>
                                    <td className="py-2 pr-4 break-words xl:max-w-[250px]">
                                        Áo Bóng Đá Đội Tuyển Bồ Đào Nha Đen Loang 2024-2025
                                    </td>
                                    <td className="py-2 px-4">Áo bóng đá</td>
                                    <td className="py-2 px-4">{product.quantity}</td>
                                    <td className="py-2 px-4">{product.price} VND</td>
                                    <td className=" py-2 px-4">
                                        <div className="flex gap-3 ">
                                            <FaPen className="cursor-pointer hover:text-main-color transition-all"></FaPen>
                                            <FaTrash className="cursor-pointer hover:text-red-600 transition-all"></FaTrash>
                                            <FaEllipsis
                                                className="cursor-pointer hover:text-main-color transition-all"
                                                onClick={() => handleShowDetails(product)}
                                            ></FaEllipsis>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            {selectedProduct && (
                <div className="mt-4 p-4 border rounded bg-gray-100">
                    <h2 className="text-xl font-bold mb-2">Chi tiết sản phẩm</h2>
                    <p>
                        <strong>Tên sản phẩm:</strong> {selectedProduct.name}
                    </p>
                    <p>
                        <strong>Số lượng:</strong> {selectedProduct.quantity}
                    </p>
                    <p>
                        <strong>Giá tiền:</strong> {selectedProduct.price} VND
                    </p>
                    <p>
                        <strong>Hãng sản xuất:</strong> {selectedProduct.brand}
                    </p>
                    <p>
                        <strong>Màu:</strong> {selectedProduct.color}
                    </p>
                    <p>
                        <strong>Size:</strong> {selectedProduct.size}
                    </p>
                    <p>
                        <strong>Tùy chọn khác:</strong> {selectedProduct.option}
                    </p>
                    <p>
                        <strong>Hình ảnh:</strong>{' '}
                        <a href={selectedProduct.imageUrl} target="_blank" rel="noopener noreferrer">
                            Link hình ảnh
                        </a>
                    </p>
                </div>
            )}
        </div>
    );
};
export default TableProducts;
