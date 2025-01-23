import { Outlet } from 'react-router-dom';
import Header from '../ui/header/Header';
import Footer from './Footer';
import { useEffect, useRef, useState } from 'react';

const Layout = () => {
    const headerRef = useRef(null);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        const updateHeaderHeight = () => {
            if (headerRef.current) {
                setHeaderHeight(headerRef.current.offsetHeight);
            }
        };

        updateHeaderHeight();
        window.addEventListener('resize', updateHeaderHeight);

        return () => {
            window.removeEventListener('resize', updateHeaderHeight);
        };
    }, []);

    return (
        <div>
            <header ref={headerRef} className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
                <Header />
            </header>

            <div
                className="px-6 lg:px-8 xl:px-10 min-[1400px]:px-24 2xl:px-0 2xl:max-w-[1500px] m-auto"
                style={{ paddingTop: `${headerHeight}px` }}
            >
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
