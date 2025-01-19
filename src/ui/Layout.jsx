import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <div>
            <Header />

            <div className="2xl:max-w-[1500px] m-auto">
                <Outlet />
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
