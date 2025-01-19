const Footer = () => {
    return (
        <div className="pl-12 bg-main-color py-6 text-white flex justify-center">
            <div className="2xl:max-w-[1500px] flex justify-start gap-x-8 lg:gap-x-16 gap-y-8 text-white flex-wrap">
                <div>
                    <h4 className="font-[500] text-[20px] mb-2">CHẤP NHẬN THANH TOÁN</h4>
                    <ul className="flex flex-col gap-y-1">
                        <li>CHuyển khoản ngân hàng</li>
                        <li>Visa, Master Card</li>
                        <li>Thanh toán khi nhận hàng</li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-[500] text-[20px] mb-2">HỖ TRỢ KHÁCH HÀNG</h4>
                    <ul className="flex flex-col gap-y-1">
                        <li>Giao hàng và trả hàng</li>
                        <li>Chính sách bảo hành</li>
                        <li>Bảo mật thông tin</li>
                        <li>Hệ thống chi nhánh</li>
                    </ul>
                </div>
                <div className="font-[500] text-[20px] mb-2">
                    <h4>FANPAGE FACEBOOK</h4>
                    <div className="mt-3">
                        <img src="/logo.png" alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
