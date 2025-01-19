import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import createSlug from '../utils/createSlug';

const Search = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        if (data.search) {
            const slug = createSlug(data.search);
            navigate(`/find/${slug}`);
            reset();
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center gap-1 w-full">
            <input
                className="focus:outline-0 rounded w-[100%] min-h-8 placeholder:pl-2"
                type="text"
                name="search"
                placeholder="Từ khóa tìm kiếm"
                {...register('search')}
            />
            <button className="-ml-8">
                <FaSearch />
            </button>
        </form>
    );
};

export default Search;
