const Option = ({ attrData, handleSetAttributes, currentAttribute }) => {
    if (!attrData) return null;
    const { type, data } = attrData;

    console.log(attrData);

    return (
        <div className="w-[100%]">
            <h6 className="mb-1">
                Bạn đang chọn:{' '}
                <span className="font-[600]">{`${type} ${
                    currentAttribute?.attrName ? currentAttribute?.attrValue : ''
                }`}</span>
            </h6>
            <ul className="flex justify-start flex-wrap gap-2 mb-4">
                {data.map((item, index) => (
                    <li
                        key={index}
                        className={`${
                            currentAttribute?.attrValue === item.attrValue &&
                            'bg-main-color !cursor-not-allowed !text-white'
                        } flex flex-col items-center justify-center rounded min-w-[100px] px-2 py-1 border border-main-color cursor-pointer hover:bg-blue-200`}
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
