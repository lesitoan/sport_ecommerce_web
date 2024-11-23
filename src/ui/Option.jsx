const Option = ({ types, onType, currType }) => {
    if (!types || types.length === 0) return null;
    if (typeof types === 'string') types = JSON.parse(types);

    const handClick = (type) => {
        if (type?.name === currType?.name) return;
        onType(type);
    };

    return (
        <div>
            <h6 className="mb-1">
                Bạn đang chọn: <span className="font-[600]">{currType?.name}</span>
            </h6>
            <ul className="flex justify-start gap-2 mb-4">
                {types.map((type, index) => (
                    <li
                        key={index}
                        className={`${
                            type?.name === currType?.name && 'bg-main-color !cursor-not-allowed !text-white'
                        } flex flex-col items-center justify-center rounded min-w-[100px] px-2 py-1 border border-main-color cursor-pointer hover:bg-blue-200`}
                        onClick={() => {
                            handClick(type);
                        }}
                    >
                        <p>{type?.name}</p>
                        {/* {Number(size?.addCharge) > 0 && <p className="font-[600] text-red-600">{size.addCharge}đ</p>} */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Option;
