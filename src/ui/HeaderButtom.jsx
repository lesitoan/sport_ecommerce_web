import { useGetCategories } from '../hooks/categoriesHook'
import { Link } from 'react-router-dom';

const HeaderButtom = () => {
    const [isLoading, categories] = useGetCategories();

    return (
        <div className='bg-main-color w-full' >
            <ul
                className='w-[1500px] m-auto flex gap-x-6 gap-y-2 flex-wrap py-3 text-[#fff] text-[14px]
                font-[500] cursor-pointer
            '>
                {!isLoading && categories.map((category, index) => (
                    <li className='uppercase' key={index}>
                        <Link to={`category/${category.categorySlug}`}>{category.categoryName}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HeaderButtom;