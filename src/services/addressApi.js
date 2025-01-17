import axiosInstance from '../config/axios';
import { handleError } from '../utils/handleError';

export const getAddresses = async () => {
    try {
        const res = await axiosInstance.get('/addresses');
        return res.data?.addresses;
    } catch (error) {
        handleError(error, 'Lấy thông tin địa chỉ thất bại');
    }
};

export const deleteAddressById = async (addressId) => {
    try {
        if (!addressId) {
            throw new Error('Không có id địa chỉ');
        }
        const res = await axiosInstance.delete(`/addresses/${addressId}`);
        return res.data;
    } catch (error) {
        handleError(error, 'Xóa địa chỉ thất bại');
    }
};

export const addAddress = async (address) => {
    try {
        console.log(address);
        const { fullAddress, addressDetail, fullName, phoneNumber } = address;
        const ward = fullAddress.name.split(',')[0];
        const district = fullAddress.name.split(',')[1];
        const province = fullAddress.name.split(',')[2];

        const res = await axiosInstance.post('/addresses', {
            phoneNumber,
            fullName,
            province,
            district,
            ward,
            addressDetail,
        });
        return res.data;
    } catch (error) {
        handleError(error, 'Thêm địa chỉ thất bại');
    }
};
