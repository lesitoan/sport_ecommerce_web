import { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import { FaEllipsis } from 'react-icons/fa6';

const TableUsers = () => {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleShowDetails = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div className="overflow-x-auto">
            <div className="max-h-96 overflow-y-scroll">
                <table className="w-full text-[16px] text-left">
                    <thead className="bg-main-color text-white sticky top-0">
                        <tr>
                            <th scope="col" className="py-2 pl-4">
                                STT
                            </th>
                            <th scope="col" className="py-2 pr-4">
                                Tên
                            </th>
                            <th scope="col" className="py-2 px-4">
                                Email
                            </th>
                            <th scope="col" className="py-2 px-4">
                                Đăng kí lúc
                            </th>
                            <th scope="col" className="py-2 px-4">
                                Địa chỉ
                            </th>
                            <th scope="col" className="py-2 px-4">
                                hành động
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {Array.from({ length: 16 }).map((_, index) => {
                            const product = {
                                name: `Người dùng ${index + 1}`,
                                email: `user${index + 1}@example.com`,
                                createdAt: `2023-10-${String(index + 1).padStart(2, '0')} 12:00:00`,
                                address: `Địa chỉ ${index + 1}`,
                            };

                            return (
                                <tr
                                    key={index}
                                    className={`border-b ${
                                        index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'
                                    } hover:bg-gray-400`}
                                >
                                    <td className="py-2 pl-4">{index + 1}</td>
                                    <td className="py-2 pr-4 break-words xl:max-w-[250px]">{product.name}</td>
                                    <td className="py-2 px-4">{product.email}</td>
                                    <td className="py-2 px-4">{product.createdAt}</td>
                                    <td className="py-2 px-4">{product.address}</td>
                                    <td className=" py-2 px-4">
                                        <div className="flex gap-3 ">
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
export default TableUsers;
