import { toast } from "react-toastify";
import { useReducer } from "react";

import CardProdHorizontal from "../ui/CardProdHorizontal";
import PaymentForm from "../ui/PaymentForm";

const reducer = (state, action) => {
    try {
        let products = [];
        switch (action.type) {
            case "increase":
                products = state.map(prod => {
                    if (prod.id !== action?.payload.id) return prod;
                    return { ...prod, quantity: prod.quantity + 1 }
                })
                break;
            case "decrease":
                products = state.map(prod => {
                    if (prod.id !== action?.payload.id || prod.quantity === 1) return prod;
                    return { ...prod, quantity: prod.quantity - 1 }
                })
                break;
            case "delete":
                console.log(action.payload);
                products = state.filter(prod => {
                    if (prod.id !== action?.payload.id) return true;
                    const checkType = prod?.type ? prod.type === action?.payload.type : 1;
                    const checkSize = prod?.size ? prod.size === action?.payload.size : 1;
                    const checkColor = prod?.color ? prod.color === action?.payload.color : 1;
                    console.log(checkType, checkSize, checkColor);
                    if (checkType && checkSize && checkColor) return false; // bị xóa
                    return true;
                });
                break;
            default:
                throw new Error("Unkown");

        }
        localStorage.setItem('shoppingCard', JSON.stringify(products));
        return products;
    } catch (err) {
        toast.error('Có lỗi xảy ra, vui lòng thử lại !', {
            position: "top-center"
        });
        console.log(err);
        return state;
    }
};

const PaymentPage = () => {
    const products = JSON.parse(localStorage.getItem("shoppingCard") || "[]");
    const [state, dispatch] = useReducer(reducer, products);
    const totalPrice = state.reduce((total, prod) => total + prod?.price * prod?.quantity || 0, 0);

    return (
        <div className="flex justify-between min-h-[80vh] mt-10 mb-10">
            <div className="w-[54%]">
                <PaymentForm />
            </div>
            <div className="w-[31%]">
                <h3 className="font-[600] text-[22px] mb-4">ĐƠN HÀNG CỦA BẠN</h3>
                <div className="flex flex-col justify-center gap-3">
                    {state.length === 0 ? <h4>Chưa có sản phẩm</h4> : (
                        state.map((prod, index) => (
                            <CardProdHorizontal
                                key={index}
                                product={prod}
                                dispatch={dispatch}
                            />
                        ))
                    )}
                </div>
                {state.length !== 0 && (
                    <>
                        <div className=" flex justify-between mt-2">
                            <h6 className="font-[400] text-[20px]">TỔNG CỘNG</h6>
                            <h6 className="font-[600] text-main-color text-[30px]">{totalPrice}&#8363;</h6>
                        </div>
                        <span className="italic">Giá trên chưa bao gồm phí vận chuyển</span>
                    </>
                )}
            </div>
        </div>
    )
}

export default PaymentPage;
