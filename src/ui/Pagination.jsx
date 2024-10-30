const Pagination = () => {
    return (
        <div className="flex justify-end items-center gap-2 mt-3">
            <h6 className="text-[16px]">Tổng <span className="font-[600]">20 </span>trang</h6>
            <ul className="flex gap-2 items-center">
                <li className="px-2.5 py-1.5 border border-main-color hover:bg-main-color hover:text-[#fff]  cursor-pointer font-[500] text-[#000]">1</li>
                <li className="px-2.5 py-1.5 border border-main-color hover:bg-main-color hover:text-[#fff]  cursor-pointer font-[500] text-[#000]">2</li>
                <li className="px-2.5 py-1.5 border border-main-color hover:bg-main-color hover:text-[#fff]  cursor-pointer font-[500] text-[#000]">3</li>
                <li className="px-2.5 py-1.5 border border-main-color hover:bg-main-color hover:text-[#fff]  cursor-pointer font-[500] text-[#000]">4</li>
                <li className="px-2.5 py-1.5 border border-main-color hover:bg-main-color hover:text-[#fff]  cursor-pointer font-[500] text-[#000]">5</li>
                <li className="px-2.5 py-1.5 border border-main-color hover:bg-main-color hover:text-[#fff]  cursor-pointer font-[500] text-[#000]">6</li>
                <li className="px-2.5 py-1.5 border border-main-color hover:bg-main-color hover:text-[#fff]  cursor-pointer font-[500] text-[#000]">7</li>
                <li className="px-2.5 py-1.5 border border-main-color hover:bg-main-color hover:text-[#fff]  cursor-pointer font-[500] text-[#000]">...</li>
                <li className="px-2.5 py-1.5 border border-main-color hover:bg-main-color hover:text-[#fff]  cursor-pointer font-[500] text-[#000]">19</li>
                <li className="px-2.5 py-1.5 border border-main-color hover:bg-main-color hover:text-[#fff]  cursor-pointer font-[500] text-[#000]">20</li>
            </ul>
        </div>
    )
}

export default Pagination;