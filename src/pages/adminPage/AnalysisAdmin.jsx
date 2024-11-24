import ProductsSalesChart from '../../ui/adminUi/ProductsSalesChart';
import RemainingProductsBarChart from '../../ui/adminUi/RemainingProductsBarChart';
import UserRegisterLineChart from '../../ui/adminUi/UserRegisterLineChart';

const AnalysisAdmin = () => {
    return (
        <div>
            <h3 className="font-[600] text-[28px] uppercase">Thống kê</h3>
            <div className="w-[100%] h-[3px] bg-main-color mt-1 mb-6"></div>
            <ProductsSalesChart />
            <UserRegisterLineChart />
            <RemainingProductsBarChart />
        </div>
    );
};

export default AnalysisAdmin;
