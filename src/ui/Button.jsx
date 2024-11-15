const Button = ({ children, onClick }) => {
    return (
        <button
            className="py-2 px-10 bg-main-color text-[#fff] font-[500] text-[18px] hover:bg-[#fff] hover:text-main-color rounded-sm transition duration-300 ease-in-out"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;