import ProductsSalesChart from '../../ui/adminUi/ProductsSalesChart';
import StatsCards from '../../ui/adminUi/StatsCards';

const HomeAdmin = () => {
    return (
        <div>
            <h3 className="font-[600] text-[28px] uppercase">Trang tổng quan</h3>
            <div className="w-[100%] h-[3px] bg-main-color mt-1 mb-6"></div>

            <StatsCards />
            <ProductsSalesChart />
        </div>
    );
};

export default HomeAdmin;
