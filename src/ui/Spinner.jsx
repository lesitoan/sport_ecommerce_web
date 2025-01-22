const Spinner = ({ size, css }) => {
    size = size || 'md';
    let height = '';
    if (size === 'sm') {
        height = 'h-6 lg:h-7';
    } else if (size === 'md') {
        height = 'h-9 md:h-10 lg:h-11';
    } else if (size === 'lg') {
        height = 'h-10 md:h-11 lg:h-12';
    } else if (size === 'xl') {
        height = 'h-40';
    }
    return (
        <div className={`flex justify-center items-center ${css}`}>
            <img
                class={`${height} w-auto animate-spin`}
                src="https://www.svgrepo.com/show/199956/loading-loader.svg"
                alt="Loading icon"
            />
        </div>
    );
};

export default Spinner;
