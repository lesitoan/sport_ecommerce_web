import { useState } from 'react';
import AddProductForm from '../../ui/adminUi/AddProductForm';
import TableProducts from '../../ui/adminUi/TableProducts';
import Button from '../../ui/Button';
import AddCategoryForm from '../../ui/adminUi/AddCategoryForm';

const ProductsAdmin = () => {
    const [showProdsForm, setShowProdsForm] = useState(false);
    const [showCategoryForm, setShowCategoryForm] = useState(false);

    return (
        <div className="min-h-[200vh]">
            <h3 className="font-[600] text-[28px] uppercase">Sản phẩm</h3>
            <div className="w-[100%] h-[3px] bg-main-color mt-1 mb-6"></div>

            <TableProducts />

            <div className="flex justify-end gap-3 mt-10">
                <Button onClick={() => setShowCategoryForm((prev) => !prev)}>Thêm danh mục</Button>
                <Button onClick={() => setShowProdsForm((prev) => !prev)}>Thêm sản phẩm</Button>
            </div>

            {showCategoryForm && <AddCategoryForm />}
            {showProdsForm && <AddProductForm />}
        </div>
    );
};

export default ProductsAdmin;
