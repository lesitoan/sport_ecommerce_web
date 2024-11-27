const Option = ({ attributeType, handleSetAttributes, currentAttribute }) => {
    if (!attributeType || attributeType?.data?.length === 0) return null;
    const data = attributeType.data;

    return (
        <div className="w-[100%]">
            <h6 className="mb-1">
                Bạn đang chọn:{' '}
                <span className="font-[600]">{`${attributeType?.name} ${
                    currentAttribute?.name ? currentAttribute?.data.value : ''
                }`}</span>
            </h6>
            <ul className="flex justify-start flex-wrap gap-2 mb-4">
                {data.map((item, index) => (
                    <li
                        key={index}
                        className={`${
                            currentAttribute?.data.value === item.value &&
                            'bg-main-color !cursor-not-allowed !text-white'
                        } flex flex-col items-center justify-center rounded min-w-[100px] px-2 py-1 border border-main-color cursor-pointer hover:bg-blue-200`}
                        onClick={() => {
                            handleSetAttributes({
                                name: attributeType?.name,
                                data: {
                                    value: item?.value,
                                    price: item?.price,
                                    id: item?.id,
                                },
                            });
                        }}
                    >
                        <p>{item?.value}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Option;
