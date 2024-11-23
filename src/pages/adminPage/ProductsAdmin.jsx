import AddProductForm from '../../ui/adminUi/AddProductForm';
import TableProducts from '../../ui/adminUi/TableProducts';

const ProductsAdmin = () => {
    return (
        <div className="min-h-[200vh]">
            <h3 className="font-[600] text-[28px] uppercase">Sản phẩm</h3>
            <div className="w-[100%] h-[3px] bg-main-color mt-1 mb-6"></div>
            <TableProducts />
            <AddProductForm />
        </div>
    );
};

export default ProductsAdmin;
