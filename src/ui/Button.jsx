const Button = ({ children, onClick, disable }) => {
    return (
        <button
            className={`${
                disable && 'cursor-not-allowed'
            } py-2 px-10 bg-main-color text-[#fff] font-[500] text-[18px] hover:bg-main-color-90 rounded-sm transition duration-300 ease-in-out`}
            onClick={onClick}
            disabled={disable}
        >
            {children}
        </button>
    );
};

export default Button;
