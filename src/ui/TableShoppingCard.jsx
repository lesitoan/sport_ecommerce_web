import { toast } from "react-toastify";
import { useReducer } from "react";
import CardProdHorizontal from "./CardProdHorizontal";
import RowCard from "./RowCard";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const reducer = (state, action) => {
    try {
        let products = [];
        switch (action.type) {
            case "increase":
                products = state.map(prod => {
                    if (prod.id !== action?.payload.id) return prod;
                    const checkType = prod?.type ? prod.type === action?.payload.type : 1;
                    const checkSize = prod?.size ? prod.size === action?.payload.size : 1;
                    const checkColor = prod?.color ? prod.color === action?.payload.color : 1;
                    if (!checkType || !checkSize || !checkColor) return prod;
                    return { ...prod, quantity: prod.quantity + 1 }
                })
                break;
            case "decrease":
                products = state.map(prod => {
                    if (prod.id !== action?.payload.id || prod.quantity === 1) return prod;
                    const checkType = prod?.type ? prod.type === action?.payload.type : 1;
                    const checkSize = prod?.size ? prod.size === action?.payload.size : 1;
                    const checkColor = prod?.color ? prod.color === action?.payload.color : 1;
                    if (!checkType || !checkSize || !checkColor) return prod;
                    return { ...prod, quantity: prod.quantity - 1 }
                })
                break;
            case "delete":
                products = state.filter(prod => {
                    if (prod.id !== action?.payload.id) return true;
                    const checkType = prod?.type ? prod.type === action?.payload.type : 1;
                    const checkSize = prod?.size ? prod.size === action?.payload.size : 1;
                    const checkColor = prod?.color ? prod.color === action?.payload.color : 1;
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

const TableShoppingCard = () => {
    const navigate = useNavigate();
    const products = JSON.parse(localStorage.getItem("shoppingCard") || "[]");
    const [state, dispatch] = useReducer(reducer, products);
    const totalPrice = state.reduce((total, prod) => total + prod?.price * prod?.quantity || 0, 0);

    if (state.length == 0) return <h4>Chưa có sản phẩm</h4>
    return (
        <div className="">
            <table class="w-full text-[16px] text-left rtl:text-right">
                <thead class="text-xs">
                    <tr>
                        <th scope="col" class="pr-1 py-3">
                            Hình ảnh
                        </th>
                        <th scope="col" class="pr-10 py-3">
                            Tên sản phẩm
                        </th>
                        <th scope="col" class="pr-2 py-3">
                            Số lượng
                        </th>
                        <th scope="col" class="pr-2 py-3">
                            Tổng giá tiền
                        </th>
                        <th scope="col" class="py-3">
                            Hành động
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {state.length === 0 ? <h4>Chưa có sản phẩm</h4> : (
                        state.map((prod, index) => (
                            <RowCard
                                key={index}
                                product={prod}
                                dispatch={dispatch}
                            />
                        ))
                    )}
                </tbody>
            </table>
            {state.length !== 0 && (
                <>
                    <div className="flex items-center gap-2 mt-2">
                        <h6 className="font-[400] text-[20px]">TỔNG CỘNG:</h6>
                        <h6 className="font-[600] text-main-color text-[30px]">{totalPrice}&#8363;</h6>
                    </div>
                    <p className="italic">Giá trên chưa bao gồm phí vận chuyển</p>
                </>
            )}
            <div className="flex justify-center mt-5">
                <Button onClick={() => {
                    navigate('/payment')
                }}>HOÀN TẤT ĐƠN HÀNG</Button>
            </div>
        </div>
    )
}

export default TableShoppingCard;
