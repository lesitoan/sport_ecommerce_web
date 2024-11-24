import { memo, useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';
import { FaEllipsis } from 'react-icons/fa6';

const TableOrders = memo(() => {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const handleShowDetails = (product) => {
        setSelectedProduct(product);
    };
    console.log('aaa');

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
                                Tên khách hàng
                            </th>
                            <th scope="col" className="py-2 px-4">
                                Trạng thái
                            </th>
                            <th scope="col" className="py-2 px-4">
                                Giá tiền
                            </th>
                            <th scope="col" className="py-2 px-4">
                                hành động
                            </th>
                        </tr>
                    </thead>
                    <tbody className="">
                        {Array.from({ length: 16 }).map((_, index) => {
                            const order = {
                                customerName: `Khách hàng ${index + 1}`,
                                status: `Trạng thái ${index + 1}`,
                                price: (Math.random() * 1000000).toFixed(2),
                            };

                            return (
                                <tr
                                    key={index}
                                    className={`border-b ${
                                        index % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'
                                    } hover:bg-gray-400`}
                                >
                                    <td className="py-2 pl-4">{index + 1}</td>
                                    <td className="py-2 pr-4 break-words xl:max-w-[250px]">{order.customerName}</td>
                                    <td className="py-2 px-4">{order.status}</td>
                                    <td className="py-2 px-4">{order.price} VND</td>
                                    <td className="py-2 px-4">
                                        <div className="flex gap-3">
                                            <FaPen className="cursor-pointer hover:text-main-color transition-all"></FaPen>
                                            <FaTrash className="cursor-pointer hover:text-red-600 transition-all"></FaTrash>
                                            <FaEllipsis
                                                className="cursor-pointer hover:text-main-color transition-all"
                                                onClick={() => handleShowDetails(order)}
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
});
export default TableOrders;
