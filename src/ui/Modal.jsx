import { FaXmark } from 'react-icons/fa6';

const Modal = ({ show, onShow, submit, children }) => {
    return (
        <div
            className={`${
                !show && 'hidden'
            } text-[18px] fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 hover:text-black lowercase bg-black/50`}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
            {/* Modal Content */}
            <div className="relative py-1 px-5 max-w-[500px] bg-white rounded-sm shadow">
                <button
                    type="button"
                    className="text-[25px] absolute top-1 end-1 text-black hover:bg-red-600 rounded-md w-7 h-7 ms-auto inline-flex justify-center items-center hover:text-white"
                    onClick={() => onShow(false)}
                >
                    <FaXmark />
                </button>
                <div className="p-4 md:p-5 text-center font-[400]">
                    <div className="mb-3">{children}</div>

                    <button
                        type="button"
                        className="py-2 px-5  bg-slate-300 rounded-md hover:bg-slate-200 transition-all inline-flex items-center"
                        onClick={() => onShow(false)}
                    >
                        Thoát
                    </button>
                    <button
                        data-modal-hide="popup-modal"
                        type="button"
                        className="ms-3 text-white bg-main-color hover:bg-main-color-90 transition-all rounded-md inline-flex items-center px-5 py-2 text-center"
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
