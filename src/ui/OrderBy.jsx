import { useSearchParams } from 'react-router-dom';

const OrderBy = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const handleClickPage = (e) => {
        searchParams.set('order', e.target.value);
        setSearchParams(searchParams);
    };

    return (
        <select
            name="filter"
            id="filter"
            className="lg:w-1/4 block bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            onChange={handleClickPage}
        >
            <option className="bg-slate-200 truncate mb-2 px-4 py-2 rounded-sm" value="default">
                Sắp xếp theo mặc định
            </option>
            <option className="bg-slate-200 truncate mb-2 px-4 py-2 rounded-sm" value="price">
                Giá tăng dần
            </option>
            <option className="bg-slate-200 truncate mb-2 px-4 py-2 rounded-sm" value="price-desc">
                Giá giảm dần
            </option>
            <option className="bg-slate-200 truncate mb-2 px-4 py-2 rounded-sm" value="time">
                Hàng mới nhất
            </option>
            <option className="bg-slate-200 truncate mb-2 px-4 py-2 rounded-sm" value="time-desc">
                Hàng cũ nhất
            </option>
            <option className="bg-slate-200 truncate mb-2 px-4 py-2 rounded-sm" value="keyword">
                A - Z
            </option>
            <option className="bg-slate-200 truncate mb-2 px-4 py-2 rounded-sm" value="keyword-desc">
                Z - A
            </option>
        </select>
    );
};

export default OrderBy;
