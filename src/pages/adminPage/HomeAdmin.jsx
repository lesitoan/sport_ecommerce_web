import ProductsSalesChart from '../../ui/adminUi/ProductsSalesChart';
import StatsCarts from '../../ui/adminUi/StatsCarts';

const HomeAdmin = () => {
    return (
        <div>
            <h3 className="font-[600] text-[28px] uppercase">Tổng quan</h3>
            <div className="w-[100%] h-[3px] bg-main-color mt-1 mb-6"></div>

            <StatsCarts />
            <ProductsSalesChart />
        </div>
    );
};

export default HomeAdmin;
