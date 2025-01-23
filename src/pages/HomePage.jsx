import SlideShowImage from '../ui/SlideShowImage';
import { useGetProducts } from '../hooks/productsHooks';
import BoxProducts from '../ui/BoxProducts';
import Spinner from '../ui/Spinner';
import News from '../ui/News';

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
    console.log('aoBongDaCLB', aoBongDaCLB);
    console.log('aoBongDaTuyen', aoBongDaTuyen);

    return (
        <>
            <div className=" hidden lg:block w-[99vw] relative left-1/2 -translate-x-1/2">
                <SlideShowImage />
            </div>

            {aoBongDaCLBLoading ? (
                <Spinner size={'lg'} css={'w-full h-[20vh]'} />
            ) : (
                <>
                    <h3 className="font-semibold text-xl sm:text-2xl xl:text-3xl mb-2 uppercase mt-8">
                        {aoBongDaCLB?.products[0]?.categoryName}
                    </h3>
                    <BoxProducts products={aoBongDaCLB.products} boxBaner={true} limit={4} />
                </>
            )}

            {aoBongDaTuyenLoading ? (
                <Spinner size={'lg'} css={'w-full h-[20vh]'} />
            ) : (
                <>
                    <h3 className="font-semibold text-xl sm:text-2xl xl:text-3xl mb-2 uppercase">
                        {aoBongDaTuyen?.products[0]?.categoryName}
                    </h3>
                    <BoxProducts products={aoBongDaTuyen.products} boxBaner={true} limit={4} />
                </>
            )}
            <News />
        </>
    );
};

export default HomePage;
