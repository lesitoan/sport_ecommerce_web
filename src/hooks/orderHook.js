import { useMutation, useQuery } from "@tanstack/react-query";
import { createOrder as createOrderApi, getOrders } from "../services/orderApi";
import { toast } from "react-toastify";

export const useCreateOrder = () => {
    const { mutate: createOrder, isPending: isLoading, isSuccess } = useMutation({
        mutationFn: createOrderApi,
        onError: (error) => {
            console.log(error);
            toast.error('Có lỗi xảy ra khi đặt hàng !', {
                position: "top-center"
            });
        },
        onSuccess: (data) => {
            toast.success(`Đặt hàng thành công !`, {
                position: "top-center"
            });
            localStorage.removeItem('shoppingCard');
        },
    })
    return { createOrder, isLoading, isSuccess };
}


export const useGetOrderByUserId = (userId) => {
    const { isPending: isLoading, isError, data, error } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => await getOrders({ userId }),
        // gcTime: 30 * 1000
    })
    if (isError) {
        console.log("Error: ", error.message);
        throw new Error(error.message);
    }
    const orders = data?.orders;
    return { isLoading, orders };
}