import supabase from '../config/supabase';

export const signUp = async ({ userName, email, password, passwordConfirm }) => {
    if (password !== passwordConfirm) return;

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                userName,
            },
        },
    });
    if (error) {
        throw new Error(error.message);
    }
    return data;
};

export const signIn = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
    if (error) {
        throw new Error(error.message);
    }
    return data;
};

export const getCurrentUser = async () => {
    const { data: session } = await supabase.auth.getSession();
    if (!session) return null;

    const { data, error } = await supabase.auth.getUser();
    if (error) {
        throw new Error(error.message);
    }
    return data?.user;
};

export const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
    localStorage.clear();
};

export const changePassword = async ({ newPassword }) => {
    if (!newPassword) return null;
    // const { data } = await supabase.auth.updateUser({
    //     data: {
    //         userName: "TOANDZ123"
    //     }
    // })
    const { error } = await supabase.auth.updateUser({ password: newPassword });
    if (error) throw new Error(error.message);
};

export const updateUser = async ({ addressOrder }) => {
    const { fullName, phoneNumber, address, addressDetail } = addressOrder;
    if (!fullName || !phoneNumber || !address || !addressDetail) return null;
    const { data, error } = await supabase.auth.updateUser({
        data: {
            fullName,
            phoneNumber,
            address,
            addressDetail,
        },
    });
    if (error) throw new Error(error.message);
};
