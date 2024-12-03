import supabase from '../config/supabase';

export const addShippingAddressByUserId = async ({ userId, address }) => {
    let { province, district, ward, addressDetail, fullName, phoneNumber } = address;
    province = 'Quảng Nam';
    district = 'Thăng Bình';
    ward = 'Bình Quế';
    if(address?.wards) {
        const newArrdess = address?.wards.split(', ');
        province = newArrdess[2];
        district = newArrdess[1];
        ward = newArrdess[0];
    }

    if (!province || !district || !ward || !userId || !addressDetail || !fullName || !phoneNumber) {
        throw new Error('không đủ thông tin, tạo địa chỉ thất bại !');
    }

    const { error } = await supabase
        .from('shippingAddresses')
        .insert([
            {
                phoneNumber: phoneNumber,
                fullName: fullName,
                userId: userId,
                province: province,
                district: district,
                ward: ward,
                addressDetail: addressDetail,
            },
        ])
        .select('id')
        .single();

    if (error) {
        throw new Error('addAddressByUserId err:  ', error.message);
    }
};

export const getShippingAddressesByUserId = async ({ userId }) => {
    const { data, error } = await supabase.from('shippingAddresses').select('*').eq('userId', userId);

    if (error) {
        throw new Error('getAddressByUserId err:  ', error.message);
    }

    return data;
};

export const deleteShippingAddressById = async ({ addressId }) => {
    if (!addressId) {
        throw new Error('không có id, xóa địa chỉ thất bại !');
    }
    const { error } = await supabase.from('shippingAddresses').delete().eq('id', addressId);

    if (error) {
        throw new Error('deleteAddressById err:  ', error.message);
    }
};
