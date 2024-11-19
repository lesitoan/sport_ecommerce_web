import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Modal = ({ show, onShow, submit }) => {
    return (
        <div
            className={`${!show && 'hidden'} text-[18px] fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 hover:text-black lowercase bg-black/50`}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* Modal Content */}
            <div className="relative py-3 px-5 max-w-md bg-white rounded-md shadow">
                <button
                    type="button"
                    className="text-[25px] absolute top-1 end-1 text-black bg-transparent hover:bg-red-600 hover:text-gray-900 rounded-lg w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:text-white"
                    onClick={() => onShow(false)}
                >
                    <FaXmark />
                </button>
                <div className="p-4 md:p-5 text-center">
                    <h3 className="mb-5 font-normal">
                        bạn có chắc muốn đăng xuất?
                        {/* <Link to={"sign-in"} className="ml-1 text-main-color hover:underline hover:font-[500]">
                            Đăng nhập
                        </Link> */}
                    </h3>

                    <button
                        data-modal-hide="popup-modal"
                        type="button"
                        className="py-2.5 px-5 font-medium  bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white"
                        onClick={() => onShow(false)}
                    >
                        Thoát
                    </button>
                    <button
                        data-modal-hide="popup-modal"
                        type="button"
                        className="ms-3 text-white bg-main-color hover:bg-white hover:text-black transition-all font-medium rounded-lg inline-flex items-center px-5 py-2.5 text-center"
                        onClick={() => { if (submit) submit(); onShow(false) }}
                    >
                        Đồng ý
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Modal;