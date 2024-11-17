import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../services/authApi";

export const useSignUp = () => {
    const { mutate: signUp, isLoading } = useMutation({
        mutationFn: signUpApi,
        onError: (error, variables, context) => {
            console.log("error");
            console.log(`rolling back optimistic update with id ${context.id}`)
        },
        onSuccess: (data, variables, context) => {
            console.log("success");
            console.log(data);
        },
    })
    return { signUp, isLoading };
}
