import SlideShowImage from '../ui/SlideShowImage';
import { useGetProducts } from '../hooks/productsHooks';
import BoxProducts from '../ui/BoxProducts';
import Spinner from '../ui/Spinner';

const HomePage = () => {
    const { isLoading: aoBongDaCLBLoading, data: aoBongDaCLB } = useGetProducts(
        {
            category: 'ao_bong_da_clb',
            limit: 4,
        },
        true,
    );
    const { isLoading: aoBongDaTuyenLoading, data: aoBongDaTuyen } = useGetProducts(
        {
            category: 'ao_bong_da_doi_tuyen',
            limit: 4,
        },
        true,
    );

    return (
        <>
            <div className="w-[99vw] relative left-1/2 -translate-x-1/2">
                <SlideShowImage />
            </div>

            {aoBongDaCLBLoading ? (
                <Spinner />
            ) : (
                <>
                    <h3 className="font-[600] text-[30px] mb-2 mt-8 uppercase">
                        {aoBongDaCLB?.products[0]?.categoryName}
                    </h3>
                    <BoxProducts products={aoBongDaCLB.products} />
                </>
            )}

            {aoBongDaTuyenLoading ? (
                <Spinner />
            ) : (
                <>
                    <h3 className="font-[600] text-[30px] mb-2 uppercase">
                        {aoBongDaTuyen?.products[0]?.categoryName}
                    </h3>
                    <BoxProducts products={aoBongDaTuyen.products} />
                </>
            )}

            {/* cẩm nang thể thao */}
            <div className="mb-[40px] mt-[25px]">
                <hr className="border-t-2 border-main-color mb-2" />
                <h3 className="font-[600] text-[35px] mb-2">Cẩm nang thể thao</h3>
                <div className="grid grid-cols-4 grid-rows-2 gap-2 auto-cols-min auto-rows-min">
                    <div className="bg-amber-400 min-h-[200px] col-start-1 col-span-2 row-span-full overflow-hidden">
                        {/* <img className="w-[100%]" src="/messi/5.jfif" alt="photo" /> */}
                    </div>
                    <div className="bg-amber-400 h-[200px] overflow-hidden">
                        <img className="w-[100%]" src="/messi/1.jpg" alt="Ảnh sản phẩm" />
                    </div>
                    <div className="bg-amber-400 h-[200px] overflow-hidden">
                        <img className="w-[100%]" src="/messi/2.jfif" alt="Ảnh sản phẩm" />
                    </div>
                    <div className="bg-amber-400 h-[200px] overflow-hidden">
                        <img className="w-[100%]" src="/messi/3.webp" alt="Ảnh sản phẩm" />
                    </div>
                    <div className="bg-amber-400 h-[200px] overflow-hidden">
                        <img className="w-[100%]" src="/messi/4.webp" alt="Ảnh sản phẩm" />
                    </div>
                </div>
                <hr className="border-t-2 border-main-color mt-3" />
            </div>
        </>
    );
};

export default HomePage;
