import { useGetCategories } from '../hooks/categoriesHook';
import { Link } from 'react-router-dom';

const HeaderButtom = () => {
    const { isLoading, categories } = useGetCategories();
    return (
        <div className="bg-main-color w-full">
            <ul
                className="2xl:max-w-[1500px] xl:max-w-[1200px] m-auto flex gap-x-6 gap-y-2 flex-wrap py-3 text-[#fff] text-[14px]
                font-[500] cursor-pointer
            "
            >
                {!isLoading &&
                    categories.map((category) => (
                        <li className="uppercase" key={category.id}>
                            <Link to={`category/${category.slug}`}>{category.name}</Link>
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default HeaderButtom;
