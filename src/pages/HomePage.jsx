import SlideShowImage from "../ui/SlideShowImage";
import { useGetProductsByCategory } from "../hooks/productsHooks";
import BoxProducts from "../ui/BoxProducts";
import Spinner from "../ui/Spinner";

const HomePage = () => {

    const [aoBongDaCLBLoading, aoBongDaCLB] = useGetProductsByCategory('ao_bong_da_clb');
    const [aoBongDaTuyenLoading, aoBongDaTuyen] = useGetProductsByCategory('ao_bong_da_doi_tuyen');
    const [giayBongDaLoading, giayBongDa] = useGetProductsByCategory('giay_bong_da');
    const [phuKienBongDaLoading, phuKienBongDa] = useGetProductsByCategory('phu_kien_bong_da');
    const [quanAoBongChuyenLoading, quanAoBongChuyen] = useGetProductsByCategory('phu_kien_bong_chuyen');

    return (
        <>
            <div className="w-[99vw] relative left-1/2 -translate-x-1/2">
                <SlideShowImage />
            </div>
            {aoBongDaCLBLoading ? <Spinner /> : <BoxProducts productsCategory={aoBongDaCLB} numOfItems={5} />}
            {aoBongDaTuyenLoading ? <Spinner /> : <BoxProducts productsCategory={aoBongDaTuyen} numOfItems={5} />}
            {giayBongDaLoading ? <Spinner /> : <BoxProducts productsCategory={giayBongDa} numOfItems={5} />}
            {phuKienBongDaLoading ? <Spinner /> : <BoxProducts productsCategory={phuKienBongDa} numOfItems={5} />}
            {quanAoBongChuyenLoading ? <Spinner /> : <BoxProducts productsCategory={quanAoBongChuyen} numOfItems={5} />}


            {/* cẩm nang thể thao */}
            <div className="mb-[40px] mt-[25px]">
                <hr className="border-t-2 border-main-color mb-2" />
                <h3 className="font-[600] text-[35px] mb-2">Cẩm nang thể thao</h3>
                <div className="grid grid-cols-4 grid-rows-2 gap-2 auto-cols-min auto-rows-min">
                    <div className="bg-amber-400 min-h-[200px] col-start-1 col-span-2 row-span-full overflow-hidden">
                        {/* <img className="w-[100%]" src="/messi/5.jfif" alt="photo" /> */}
                    </div>
                    <div className="bg-amber-400 h-[200px] overflow-hidden">
                        <img className="w-[100%]" src="/messi/1.jpg" alt="photo" />
                    </div>
                    <div className="bg-amber-400 h-[200px] overflow-hidden">
                        <img className="w-[100%]" src="/messi/2.jfif" alt="photo" />
                    </div>
                    <div className="bg-amber-400 h-[200px] overflow-hidden">
                        <img className="w-[100%]" src="/messi/3.webp" alt="photo" />
                    </div>
                    <div className="bg-amber-400 h-[200px] overflow-hidden">
                        <img className="w-[100%]" src="/messi/4.webp" alt="photo" />
                    </div>
                </div>
                <hr className="border-t-2 border-main-color mt-3" />
            </div>
        </>
    )
}

export default HomePage;