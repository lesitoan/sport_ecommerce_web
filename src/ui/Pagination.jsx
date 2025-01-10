import { useSearchParams } from 'react-router-dom';
import { NUMBER_ITEM_PER_PAGE } from '../utils/constant';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';

const Pagination = ({ count }) => {
    count = 30;
    const [searchParams, setSearchParams] = useSearchParams();
    const currPage = searchParams.get('page') ? Number(searchParams.get('page')) : 1;
    const handleClickPage = (pageIndex) => {
        searchParams.set('page', pageIndex);
        setSearchParams(searchParams);
    };
    if (count <= NUMBER_ITEM_PER_PAGE) return null;

    return (
        <div className="flex gap-2 justify-center items-center">
            <span
                className="bg-main-color px-2.5 py-1.5 border border-main-color hover:bg-main-color text-[#fff] font-[500]"
                onClick={() => {
                    if (currPage === 1) return;
                    handleClickPage(currPage - 1);
                }}
            >
                <FaArrowAltCircleLeft />
            </span>
            <span className="bg-main-color px-2.5 py-1.5 border border-main-color hover:bg-main-color text-[#fff]  cursor-not-allowed font-[500]">
                {currPage}
            </span>
            <span
                className="bg-main-color px-2.5 py-1.5 border border-main-color hover:bg-main-color text-[#fff] font-[500]"
                onClick={() => {
                    handleClickPage(currPage + 1);
                }}
            >
                <FaArrowAltCircleRight />
            </span>
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
