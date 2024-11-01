import CardProdHorizontal from "../ui/CardProdHorizontal";
import PaymentForm from "../ui/PaymentForm";

const PaymentPage = () => {
    return (
        <div className="flex justify-between min-h-[80vh] mt-10 mb-10">
            <div className="w-[54%]">
                <PaymentForm />
            </div>
            <div className="w-[31%]">
                <h3 className="font-[600] text-[22px] mb-4">ĐƠN HÀNG CỦA BẠN</h3>
                <div className="flex flex-col justify-center gap-3">
                    <CardProdHorizontal />
                    <CardProdHorizontal />
                    <CardProdHorizontal />
                    <CardProdHorizontal />
                    <CardProdHorizontal />

                </div>
                <div className=" flex justify-between mt-2">
                    <h6 className="font-[400] text-[20px]">TỔNG CỘNG</h6>
                    <h6 className="font-[600] text-main-color text-[30px]">80.000 VNĐ</h6>
                </div>
                <span className="italic">Giá trên chưa bao gồm phí vận chuyển</span>
            </div>
        </div>
    )
}

export default PaymentPage;

