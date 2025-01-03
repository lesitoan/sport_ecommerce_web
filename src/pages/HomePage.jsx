import SlideShowImage from '../ui/SlideShowImage';
import { useGetProductsByCategory } from '../hooks/productsHooks';
import BoxProducts from '../ui/BoxProducts';
import Spinner from '../ui/Spinner';
import { useEffect } from 'react';
import { getCurrentUser } from '../services/authApi';

const HomePage = () => {
    const { isLoading: aoBongDaCLBLoading, data: aoBongDaCLB } = useGetProductsByCategory('ao_bong_da_clb');
    const { isLoading: aoBongDaTuyenLoading, data: aoBongDaTuyen } = useGetProductsByCategory('ao_bong_da_doi_tuyen');
    const { isLoading: giayBongDaLoading, data: giayBongDa } = useGetProductsByCategory('giay_bong_da');
    const { isLoading: phuKienBongDaLoading, data: phuKienBongDa } = useGetProductsByCategory('phu_kien_bong_da');
    const { isLoading: quanAoBongChuyenLoading, data: quanAoBongChuyen } =
        useGetProductsByCategory('quan_ao_bong_chuyen');

    useEffect(() => {
        (async () => {
            await getCurrentUser();
        })();
    }, []);

    return (
        <>
            <div className="w-[99vw] relative left-1/2 -translate-x-1/2">
                <SlideShowImage />
            </div>
            {aoBongDaCLBLoading ? (
                <Spinner />
            ) : (
                aoBongDaCLB?.products && (
                    <BoxProducts
                        products={aoBongDaCLB.products}
                        categoryName={aoBongDaCLB?.category?.categoryName}
                        limit={4}
                    />
                )
            )}
            {aoBongDaTuyenLoading ? (
                <Spinner />
            ) : (
                aoBongDaTuyen?.products && (
                    <BoxProducts
                        products={aoBongDaTuyen.products}
                        categoryName={aoBongDaTuyen?.category?.categoryName}
                        limit={4}
                    />
                )
            )}
            {giayBongDaLoading ? (
                <Spinner />
            ) : (
                giayBongDa?.products && (
                    <BoxProducts
                        products={giayBongDa.products}
                        categoryName={giayBongDa?.category?.categoryName}
                        limit={4}
                    />
                )
            )}
            {phuKienBongDaLoading ? (
                <Spinner />
            ) : (
                phuKienBongDa?.products && (
                    <BoxProducts
                        products={phuKienBongDa.products}
                        categoryName={phuKienBongDa?.category?.categoryName}
                        limit={4}
                    />
                )
            )}
            {quanAoBongChuyenLoading ? (
                <Spinner />
            ) : (
                quanAoBongChuyen?.products && (
                    <BoxProducts
                        products={quanAoBongChuyen.products}
                        categoryName={quanAoBongChuyen?.category?.categoryName}
                        limit={4}
                    />
                )
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
