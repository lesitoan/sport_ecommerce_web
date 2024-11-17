import supabase from '../config/supabase';

export const signUp = async ({ userName, email, password, passwordConfirm }) => {
    if (password !== passwordConfirm) return;

    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                userName,
            }
        }
    });
    if (error) {
        console.log(error);
        throw new Error(error.message);
    }
    return data;
}

export const signIn = async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })
    if (error) {
        console.log(error);
        throw new Error(error.message);
    }
    console.log(data)
    return data;
}