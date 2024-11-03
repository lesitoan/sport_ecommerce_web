import { useEffect } from "react";
import CardProduct from "../ui/CardProduct";
import SlideShowImage from "../ui/SlideShowImage";
import { getAllProducts } from "../services/productsApi";
import { useGetAllProducts, useGetProductsByCategory } from "../hooks/productsHooks";

const HomePage = () => {

    const [isLoading, products] = useGetProductsByCategory('ao_bong_da');
    if (isLoading) {
        console.log("...");
    } else {

        console.log("products: ", products);
    }

    return (
        <>
            <div className="w-[99vw] relative left-1/2 -translate-x-1/2">
                <SlideShowImage />
            </div>
            {/* CLB */}
            <div className="mb-[40px] mt-[25px]">
                <h3 className="font-[600] text-[35px] mb-2">Áo câu lạc bộ</h3>
                <div className="w-[100%] flex justify-between">
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
            </div>
            {/* CLB */}
            <div className="mb-[40px] mt-[25px]">
                <h3 className="font-[600] text-[35px] mb-2">Áo câu lạc bộ</h3>
                <div className="w-[100%] flex justify-between">
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
            </div>
            {/* CLB */}
            <div className="mb-[40px] mt-[25px]">
                <h3 className="font-[600] text-[35px] mb-2">Áo câu lạc bộ</h3>
                <div className="w-[100%] flex justify-between">
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
            </div>
            {/* CLB */}
            <div className="mb-[40px] mt-[25px]">
                <h3 className="font-[600] text-[35px] mb-2">Áo câu lạc bộ</h3>
                <div className="w-[100%] flex justify-between">
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
            </div>
            {/* CLB */}
            <div className="mb-[40px] mt-[25px]">
                <h3 className="font-[600] text-[35px] mb-2">Áo câu lạc bộ</h3>
                <div className="w-[100%] flex justify-between">
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                </div>
            </div>

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