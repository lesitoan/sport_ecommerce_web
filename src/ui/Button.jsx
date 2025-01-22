import Spinner from './Spinner';

const Button = ({ children, onClick, disable, isLoadinng }) => {
    return (
        <button
            className={`${
                disable && 'cursor-not-allowed'
            }text-center my-2 min-h-12 w-full bg-main-color text-white font-medium text-base lg:text-lg hover:bg-main-color-90 rounded-md transition duration-300 ease-in-out`}
            onClick={onClick}
            disabled={disable}
        >
            {isLoadinng ? <Spinner size={'sm'} /> : children}
        </button>
    );
};

export default Button;
