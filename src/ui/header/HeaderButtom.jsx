import { FaBars } from 'react-icons/fa';
import { useGetCategories } from '../../hooks/categoriesHook';
import { Link } from 'react-router-dom';
import Search from '../Search';

const HeaderButtom = () => {
    const { isLoading, categories } = useGetCategories();
    return (
        <div className="bg-main-color w-full min-h-12 flex items-center">
            <ul
                className="hidden md:flex justify-start 2xl:max-w-[1500px] m-auto gap-x-6 gap-y-2 flex-wrap px-2 py-3 text-white
                font-[500] cursor-pointer text-sm
            "
            >
                {!isLoading &&
                    categories.map((category) => (
                        <li className="uppercase" key={category.id}>
                            <Link to={`category/${category.slug}`}>{category.name}</Link>
                        </li>
                    ))}
            </ul>
            <div className="md:hidden flex items-center justify-between w-full px-2 py-3 gap-4">
                <FaBars className="text-2xl text-white ml-2"></FaBars>
                <Search />
            </div>
        </div>
    );
};

export default HeaderButtom;
