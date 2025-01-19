import { Outlet } from 'react-router-dom';
import Header from '../ui/header/Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <div>
            <Header />

            <div className="px-6 lg:px-8 xl:px-10 min-[1450px]:px-16 2xl:max-w-[1500px] m-auto">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
