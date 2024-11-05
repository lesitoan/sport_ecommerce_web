import { useSearchParams } from "react-router-dom";
import { NUMBER_ITEM_PER_PAGE } from "../utils/constant";

const Pagination = ({ count }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currPage = searchParams.get("page") ? Number(searchParams.get("page")) : 1;
    const numberPages = Math.ceil(count / NUMBER_ITEM_PER_PAGE);

    const handleClickPage = (pageIndex) => {
        searchParams.set("page", pageIndex);
        setSearchParams(searchParams);
    }
    if (count <= NUMBER_ITEM_PER_PAGE) return null;

    return (
        <div className="flex justify-end items-center gap-2 mt-3">
            <h6 className="text-[16px]">Tổng <span className="font-[600]">{`${numberPages} `}</span>trang</h6>
            <ul className="flex gap-2 items-center">
                {[...Array(numberPages).keys()].map((i, index) => {
                    if (currPage === index + 1) {
                        return <li key={index} className="bg-main-color px-2.5 py-1.5 border border-main-color hover:bg-main-color text-[#fff]  cursor-not-allowed font-[500] text-[#000]">{index + 1}</li>
                    }
                    return <li
                        key={index}
                        className="px-2.5 py-1.5 border border-main-color hover:bg-main-color hover:text-[#fff]  cursor-pointer font-[500] text-[#000]"
                        onClick={() => { handleClickPage(index + 1) }}
                    >{index + 1}
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Pagination;