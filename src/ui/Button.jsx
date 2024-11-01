const Button = ({ children }) => {
    return (
        <button
            className="py-2 px-10 bg-main-color text-[#fff] font-[500] text-[18px] hover:bg-[#fff] hover:text-main-color rounded-sm"
        >
            {children}
        </button>
    )
}

export default Button;