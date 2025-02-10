import { useSearchParams } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Pagination = ({ count }) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const currPage = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
    const handleClickPage = (pageIndex) => {
        searchParams.set('page', pageIndex);
        setSearchParams(searchParams);
    };
    if (!count || count === 1) return null;

    return (
        <div className="flex gap-2 justify-center items-center text-sm sm:text-base 2xl:text-lg">
            {currPage > 1 && (
                <span
                    className="flex justify-center items-center rounded-md bg-main-color h-8 px-2 border border-main-color hover:bg-main-color text-[#fff] font-[500]"
                    onClick={() => {
                        handleClickPage(currPage - 1);
                    }}
                >
                    <FaChevronLeft />
                </span>
            )}
            <span className="flex justify-center items-center rounded-md bg-main-color h-8 px-2 border border-main-color hover:bg-main-color text-[#fff]  cursor-not-allowed font-[500]">
                {`${currPage} trên ${count}`}
            </span>
            {currPage < count && (
                <span
                    className="flex justify-center items-center rounded-md bg-main-color h-8 px-2 border border-main-color hover:bg-main-color text-[#fff] font-[500]"
                    onClick={() => {
                        handleClickPage(currPage + 1);
                    }}
                >
                    <FaChevronRight />
                </span>
            )}
        </div>
    );

    // return (
    //     <div className="flex justify-end items-center gap-2 mt-3">
    //         <h6 className="text-[16px]">
    //             Tổng <span className="font-[600]">{`${numberPages} `}</span>trang
    //         </h6>
    //         <ul className="flex gap-2 items-center">
    //             {[...Array(numberPages).keys()].map((i, index) => {
    //                 if (currPage === index + 1) {
    //                     return (
    //                         <li
    //                             key={index}
    //                             className="bg-main-color px-2.5 py-1.5 border border-main-color hover:bg-main-color text-[#fff]  cursor-not-allowed font-[500] text-[#000]"
    //                         >
    //                             {index + 1}
    //                         </li>
    //                     );
    //                 }
    //                 return (
    //                     <li
    //                         key={index}
    //                         className="px-2.5 py-1.5 border border-main-color hover:bg-main-color hover:text-[#fff]  cursor-pointer font-[500] text-[#000]"
    //                         onClick={() => {
    //                             handleClickPage(index + 1);
    //                         }}
    //                     >
    //                         {index + 1}
    //                     </li>
    //                 );
    //             })}
    //         </ul>
    //     </div>
    // );
};

export default Pagination;
