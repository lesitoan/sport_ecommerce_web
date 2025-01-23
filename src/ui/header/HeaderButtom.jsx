import { FaBars } from 'react-icons/fa';
import { useGetCategories } from '../../hooks/categoriesHook';
import { Link } from 'react-router-dom';
import Search from '../Search';
import { useEffect, useRef, useState } from 'react';
import { FaXmark } from 'react-icons/fa6';

const HeaderButtom = () => {
    const { isLoading, categories } = useGetCategories();
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-main-color w-full min-h-12 flex items-center relative text-sm">
            <ul
                className="hidden md:flex px-6 lg:px-8 xl:px-10 min-[1400px]:px-24 2xl:px-0 2xl:max-w-[1500px] m-auto justify-start gap-x-6 gap-y-2 flex-wrap py-3 text-white
                font-normal cursor-pointer"
            >
                {categories &&
                    categories.map((category) => (
                        <li className="uppercase" key={category.id}>
                            <Link to={`category/${category.slug}`}>{category.name}</Link>
                        </li>
                    ))}
            </ul>

            <div className="md:hidden flex items-center justify-between w-full px-2 py-3 gap-4">
                {!showMenu && (
                    <FaBars className="text-2xl text-white ml-2" onClick={() => setShowMenu(!showMenu)}></FaBars>
                )}
                {showMenu && (
                    <FaXmark className="text-2xl text-white ml-2" onClick={() => setShowMenu(!showMenu)}></FaXmark>
                )}
                <Search />
            </div>

            {/* product nav */}
            <div className={`${!showMenu && 'hidden'} md:hidden w-full h-svh absolute z-40 top-14 bg-black/60`}>
                <ul className="w-3/4 h-svh bg-white pt-2 px-7 text-black font-medium" ref={menuRef}>
                    {categories &&
                        categories.map((category) => (
                            <li className="uppercase" key={category.id}>
                                <Link
                                    to={`category/${category.slug}`}
                                    onClick={() => setShowMenu(false)}
                                    className="block py-2 hover:bg-gray-100"
                                >
                                    {category.name}
                                </Link>
                                <hr className="border-t-2 border-main-color my-1 opacity-10" />
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};

export default HeaderButtom;
