const Option = ({ attrData, handleSetAttributes, currentAttribute }) => {
    if (!attrData) return null;
    const { type, data } = attrData;

    console.log(attrData);

    return (
        <div className="w-full text-sm md:text-base 2xl:text-lg my-4">
            <h6 className="mb-2">
                Bạn đang chọn:{' '}
                <span className="font-semibold">{`${type} ${
                    currentAttribute?.attrName ? currentAttribute?.attrValue : ''
                }`}</span>
            </h6>
            <ul className="flex justify-start flex-wrap gap-2 2xl:gap-4">
                {data.map((item, index) => (
                    <li
                        key={index}
                        className={`${
                            currentAttribute?.attrValue === item.attrValue &&
                            'bg-main-color !cursor-not-allowed !text-white'
                        } flex flex-col items-center justify-center rounded min-w-24 px-2 py-1 border border-main-color cursor-pointer hover:bg-main-color hover:text-white`}
                        onClick={() => {
                            handleSetAttributes({ ...item, attrName: type });
                        }}
                    >
                        <p>{item?.attrValue}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Option;
