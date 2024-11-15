import { FaMinus, FaPlus, FaSignOutAlt, FaTrashAlt } from "react-icons/fa";
import TableShoppingCard from "../ui/TableShoppingCard";

const AccountPage = () => {
    return (
        <div className="flex gap-2 mt-8 mb-8 min-h-[100vh] text-[16px]">
            {/* navigation */}
            <div className="w-[30%]">
                {/* <hr className="border-t-2 border-main-color" /> */}

                <ul className="uppercase font-[500]">
                    <li className="px-3 py-3 mb-1 cursor-pointer hover:bg-main-color hover:text-white transition duration-300 ease-in-out">giới thiệu</li>
                    <li className="px-3 py-3 mb-1 cursor-pointer hover:bg-main-color hover:text-white transition duration-300 ease-in-out">giỏ hàng</li>
                    <li className="px-3 py-3 mb-1 cursor-pointer hover:bg-main-color hover:text-white transition duration-300 ease-in-out">đơn hàng</li>
                    <li className="px-3 py-3 mb-1 cursor-pointer hover:bg-main-color hover:text-white transition duration-300 ease-in-out">Địa chỉ</li>
                    <li className="px-3 py-3 mb-1 cursor-pointer hover:bg-main-color hover:text-white transition duration-300 ease-in-out">tài khoản</li>
                    <li className="px-3 py-3 mb-1 cursor-pointer hover:bg-main-color hover:text-white transition duration-300 ease-in-out flex gap-1 items-center">
                        <FaSignOutAlt /><span>Đăng xuất</span>
                    </li>
                </ul>
            </div>

            {/* content */}
            <div className=" w-[70%] px-4 ">
                <hr className="border-t-2 border-main-color mb-2" />
                {/* giới thiệu */}
                {/* <p className="text-[18px]">Xin chào quý khách hàng đã tin tưởng và lựa chọn sản phẩm của chúng mình, nếu cần tư vấn hay có bất kì lỗi gì hãy
                    liên hệ với chúng mình để được giải quyết kịp thời. xin cảm ơn @@
                </p> */}

                {/* giỏ hàng*/}
                <TableShoppingCard />


                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    {/* <table class="w-full text-[16px] text-left rtl:text-right">
                        <thead class="text-xs">
                            <tr>
                                <th scope="col" class="pr-1 py-3">
                                    Hình ảnh
                                </th>
                                <th scope="col" class="pr-10 py-3">
                                    Tên sản phẩm
                                </th>
                                <th scope="col" class="pr-2 py-3">
                                    Số lượng
                                </th>
                                <th scope="col" class="pr-2 py-3">
                                    Tổng giá tiền
                                </th>
                                <th scope="col" class="py-3">
                                    Hành động
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="items-start">
                                <td class="">
                                    <img src="/productImages/1.webp" class="w-12 max-w-full max-h-full" alt="Apple Watch" />
                                </td>
                                <td class="pr-10 py-4 max-w-[100px]">

                                    <h4>Áo Bóng Đá Đội Tuyển Bỉ Xanh Ngọc Loang Euro 2024-2025</h4>
                                    <span className="italic text-[15px]">hàng thun lạnh, size M</span>
                                </td>
                                <td class="pr-2 py-4">
                                    <div className="flex justify-start gap-2 items-center">
                                        <span
                                            className="cursor-pointer hover:bg-main-color hover:text-white px-[3px] py-[3px] rounded opacity-50"
                                        >
                                            <FaMinus />
                                        </span>
                                        <span>10</span>
                                        <span
                                            className="cursor-pointer hover:bg-main-color hover:text-white px-[3px] py-[3px] rounded opacity-50"
                                        >
                                            <FaPlus />
                                        </span>
                                    </div>
                                </td>
                                <td class="pr-2 py-4">
                                    $599
                                </td>
                                <td class="pr-2 py-4">
                                    <FaTrashAlt
                                        className="cursor-pointer hover:text-red-500"
                                    ></FaTrashAlt>
                                </td>
                            </tr>
                            <tr class="items-start">
                                <td class="">
                                    <img src="/productImages/1.webp" class="w-12 max-w-full max-h-full" alt="Apple Watch" />
                                </td>
                                <td class="pr-10 py-4 max-w-[100px]">

                                    <h4>Áo Bóng Đá Đội Tuyển Bỉ Xanh Ngọc Loang Euro 2024-2025</h4>
                                    <span className="italic text-[15px]">hàng thun lạnh, size M</span>
                                </td>
                                <td class="pr-2 py-4">
                                    <div className="flex justify-start gap-2 items-center">
                                        <span
                                            className="cursor-pointer hover:bg-main-color hover:text-white px-[3px] py-[3px] rounded opacity-50"
                                        >
                                            <FaMinus />
                                        </span>
                                        <span>10</span>
                                        <span
                                            className="cursor-pointer hover:bg-main-color hover:text-white px-[3px] py-[3px] rounded opacity-50"
                                        >
                                            <FaPlus />
                                        </span>
                                    </div>
                                </td>
                                <td class="pr-2 py-4">
                                    $599
                                </td>
                                <td class="pr-2 py-4">
                                    <FaTrashAlt
                                        className="cursor-pointer hover:text-red-500"
                                    ></FaTrashAlt>
                                </td>
                            </tr>
                            <tr class="items-start">
                                <td class="">
                                    <img src="/productImages/1.webp" class="w-12 max-w-full max-h-full" alt="Apple Watch" />
                                </td>
                                <td class="pr-10 py-4 max-w-[100px]">

                                    <h4>Áo Bóng Đá Đội Tuyển Bỉ Xanh Ngọc Loang Euro 2024-2025</h4>
                                    <span className="italic text-[15px]">hàng thun lạnh, size M</span>
                                </td>
                                <td class="pr-2 py-4">
                                    <div className="flex justify-start gap-2 items-center">
                                        <span
                                            className="cursor-pointer hover:bg-main-color hover:text-white px-[3px] py-[3px] rounded opacity-50"
                                        >
                                            <FaMinus />
                                        </span>
                                        <span>10</span>
                                        <span
                                            className="cursor-pointer hover:bg-main-color hover:text-white px-[3px] py-[3px] rounded opacity-50"
                                        >
                                            <FaPlus />
                                        </span>
                                    </div>
                                </td>
                                <td class="pr-2 py-4">
                                    $599
                                </td>
                                <td class="pr-2 py-4">
                                    <FaTrashAlt
                                        className="cursor-pointer hover:text-red-500"
                                    ></FaTrashAlt>
                                </td>
                            </tr>
                            <tr class="items-start">
                                <td class="">
                                    <img src="/productImages/1.webp" class="w-12 max-w-full max-h-full" alt="Apple Watch" />
                                </td>
                                <td class="pr-10 py-4 max-w-[100px]">

                                    <h4>Áo Bóng Đá Đội Tuyển Bỉ Xanh Ngọc Loang Euro 2024-2025</h4>
                                    <span className="italic text-[15px]">hàng thun lạnh, size M</span>
                                </td>
                                <td class="pr-2 py-4">
                                    <div className="flex justify-start gap-2 items-center">
                                        <span
                                            className="cursor-pointer hover:bg-main-color hover:text-white px-[3px] py-[3px] rounded opacity-50"
                                        >
                                            <FaMinus />
                                        </span>
                                        <span>10</span>
                                        <span
                                            className="cursor-pointer hover:bg-main-color hover:text-white px-[3px] py-[3px] rounded opacity-50"
                                        >
                                            <FaPlus />
                                        </span>
                                    </div>
                                </td>
                                <td class="pr-2 py-4">
                                    $599
                                </td>
                                <td class="pr-2 py-4">
                                    <FaTrashAlt
                                        className="cursor-pointer hover:text-red-500"
                                    ></FaTrashAlt>
                                </td>
                            </tr>

                        </tbody>
                    </table> */}
                </div>

            </div>
        </div>
    )
}

export default AccountPage;