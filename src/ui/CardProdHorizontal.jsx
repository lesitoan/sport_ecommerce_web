import { FaMinus, FaPlus, FaTrash, FaTrashAlt } from "react-icons/fa";

const CardProdHorizontal = () => {
    return (
        <div>
            <div className="flex gap-[3%] w-[100%]">
                <img className="w-[20%]" src="/productImages/1.webp" alt="product" />
                <div className="w-[77%]">
                    <h4 className="font-[400] text-[16px] mb-1 max-h-[60px] overflow-hidden">Áo bóng đá câu lạc bộ PSg tím than 2024-2025</h4>
                    <div className="flex justify-start text-[16px]">
                        <span className="text-red-600 font-[600]">80.000Đ</span>
                        <span className="px-[50px] font-[600]">X1</span>
                        <FaTrashAlt className="ml-auto cursor-pointer hover:text-red-500"></FaTrashAlt>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CardProdHorizontal;