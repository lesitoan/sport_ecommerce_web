import { FaXmark } from 'react-icons/fa6';

const Modal = ({ show, onShow, submit, children }) => {
    return (
        <div
            className={`${
                !show && 'hidden'
            } text-sm sm:text-base fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full hover:text-black lowercase bg-black/60`}
        >
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
            {/* Modal Content */}
            <div className="relative py-1 px-5 w-full mx-6 max-w-96 bg-white rounded-lg">
                <button
                    type="button"
                    className="absolute top-1 end-1 text-black hover:bg-red-600 rounded-md w-7 h-7 inline-flex justify-center items-center hover:text-white"
                    onClick={() => onShow(false)}
                >
                    <FaXmark />
                </button>
                <div className="px-3 py-5 sm:py-3 text-center">
                    <div className="mb-3 min-h-24 flex justify-center items-center">{children}</div>

                    <button
                        type="button"
                        className="px-8 py-2 sm:px-5  bg-slate-300 rounded-md hover:bg-slate-100 transition-all inline-flex items-center"
                        onClick={() => onShow(false)}
                    >
                        Thoát
                    </button>
                    <button
                        type="button"
                        className="px-8 py-2 sm:px-5 ms-3 text-white bg-main-color hover:bg-blue-800 transition-all rounded-md inline-flex items-center  text-center"
                        onClick={() => {
                            if (submit) submit();
                            onShow(false);
                        }}
                    >
                        Đồng ý
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
