import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";



const Layout = () => {
    return (
        <div>
            <Header />
            {/* {location.pathname === '/' ? (
                <div>
                    <Outlet />
                </div>
            ) : (
                <div className='max-w-[1500px]'>
                    <Outlet />
                </div>
            )} */}
            <div className='2xl:max-w-[1500px] xl:max-w-[1200px] m-auto'>
                <Outlet />
            </div>

            <Footer />
        </div>
    )
}

export default Layout;