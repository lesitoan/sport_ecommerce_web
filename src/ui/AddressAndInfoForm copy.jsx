import { useEffect, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import Button from './Button';
import { useAddAddress } from '../hooks/addressHook';

const getLocation = async ({ type, code, _dispatch }) => {
    // dispatchs({ type: "START_GET_DATA" })
    try {
        let url;
        if (!type || type === 'provinces') {
            url = 'https://vn-public-apis.fpo.vn/provinces/getAll?limit=-1';
        } else if (type === 'districts') {
            url = `https://vn-public-apis.fpo.vn/districts/getByProvince?provinceCode=${code}&limit=-1`;
        } else {
            url = `https://vn-public-apis.fpo.vn/wards/getByDistrict?districtCode=${code}&limit=-1`;
        }
        const response = await axios.get(url);
        if (!type || type === 'provinces') {
            _dispatch({ type: 'getProvinces', payload: { provinces: response?.data?.data?.data } });
        } else if (type === 'districts') {
            _dispatch({ type: 'getDistricts', payload: { districts: response?.data?.data?.data } });
        } else {
            _dispatch({ type: 'getWards', payload: { wards: response?.data?.data?.data } });
        }
    } catch (error) {
        console.error(error);
    }
};

const reducer = (state, action) => {
    try {
        switch (action.type) {
            case 'getProvinces':
                return { ...state, provinces: action.payload.provinces };
            case 'getDistricts':
                return { ...state, districts: action.payload.districts, wards: [] };
            case 'getWards':
                return { ...state, wards: action.payload.wards };
            default:
                throw new Error('Unkown');
        }
    } catch (err) {
        return state;
    }
};

const AddressAndInfoForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    const [state, dispatch] = useReducer(reducer, { provinces: [], districts: [], wards: [] });

    const { isLoading, addAddress } = useAddAddress();

    const onSubmit = (data) => {
        addAddress(data);
    };

    const startClickProvince = watch('fullName') ? true : false; //chỉ khi điền tên thì mới load api địa chỉ
    useEffect(() => {
        if (startClickProvince) {
            getLocation({ type: 'provinces', code: 0, _dispatch: dispatch });
        }
    }, [startClickProvince]);

    const selectedProvince = watch('provinces');
    useEffect(() => {
        if (selectedProvince) {
            getLocation({ type: 'districts', code: selectedProvince, _dispatch: dispatch });
        }
    }, [selectedProvince]);

    const selectDistricts = watch('districts');
    useEffect(() => {
        if (selectDistricts) {
            getLocation({ type: 'wards', code: selectDistricts, _dispatch: dispatch });
        }
    }, [selectDistricts]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-[600] text-[22px] mb-1">THÊM ĐỊA CHỈ GIAO HÀNG</h3>
            <div className="flex flex-wrap justify-between">
                {/* name */}
                <div className="md:col-span-5 w-[49%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Họ và tên *"
                        type="text"
                        name="fullName"
                        disabled={isLoading}
                        {...register('fullName', {
                            required: 'Họ và tên không được để trống*',
                            maxLength: { value: 50, message: 'Vượt quá 50 kí tự' },
                        })}
                    />
                    {errors?.fullName && (
                        <span className="text-red-700 italic text-[14px] py-10">{errors.fullName?.message}</span>
                    )}
                </div>

                {/* phone */}
                <div className="md:col-span-5 w-[49%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Số điện thoại *"
                        type="text"
                        name="phoneNumber"
                        disabled={isLoading}
                        {...register('phoneNumber', {
                            required: 'SĐT không được để trống*',
                            maxLength: { value: 10, message: 'Vượt quá 10 kí tự' },
                        })}
                    />
                    {errors?.phoneNumber && (
                        <span className="text-red-700 italic text-[14px] py-10">{errors.phoneNumber?.message}</span>
                    )}
                </div>

                {/* provinces */}
                <div className="md:col-span-5 w-[31.5%]">
                    <select
                        name="province"
                        disabled={isLoading}
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        {...register('province')}
                        // {...register('province', { required: 'TỈnh/thành phố không được để trống*' })}
                    >
                        <option value="">Chọn tỉnh/thành phố *</option>
                        {state?.provinces?.length > 0 &&
                            state?.provinces.map((province) => (
                                <option key={province.code} value={province.code}>
                                    {province.name_with_type}
                                </option>
                            ))}
                    </select>
                    {errors?.province && (
                        <span className="text-red-700 italic text-[14px] py-10">{errors?.province?.message}</span>
                    )}
                </div>

                {/* districts */}
                <div className="md:col-span-5 w-[31.5%]">
                    <select
                        name="district"
                        disabled={isLoading}
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        {...register('district')}
                        // {...register('district', { required: 'Quận/huyện không được để trống*' })}
                    >
                        <option value="">Chọn quân/huyện *</option>
                        {state?.districts?.length > 0 &&
                            state?.districts.map((district) => (
                                <option key={district.code} value={district.code}>
                                    {district.name_with_type}
                                </option>
                            ))}
                    </select>
                    {errors?.district && (
                        <span className="text-red-700 italic text-[14px] py-10">{errors?.district?.message}</span>
                    )}
                </div>

                {/* wards */}
                <div className="md:col-span-5 w-[31.5%]">
                    <select
                        name="ward"
                        disabled={isLoading}
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        {...register('ward')}
                        // {...register('ward', { required: 'Xã/phường không được để trống*' })}
                    >
                        <option value="">Chọn xã/phường *</option>
                        {state?.wards?.length > 0 &&
                            state?.wards.map((ward) => (
                                <option key={ward.code} value={ward.path_with_type}>
                                    {ward.name_with_type}
                                </option>
                            ))}
                    </select>
                    {errors?.ward && (
                        <span className="text-red-700 italic text-[14px] py-10">{errors?.ward?.message}</span>
                    )}
                </div>

                {/* specific address*/}
                <div className="md:col-span-5 w-[100%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Địa chỉ cụ thể *"
                        type="text"
                        name="addressDetail"
                        disabled={isLoading}
                        {...register('addressDetail', {
                            required: 'địa chỉ này không được để trống*',
                            maxLength: { value: 100, message: 'Vượt quá 100 kí tự' },
                        })}
                    />
                    {errors?.addressDetail && (
                        <span className="text-red-700 italic text-[14px] py-10">{errors.addressDetail?.message}</span>
                    )}
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Button disable={isLoading}>{!isLoading ? 'Lưu địa chỉ' : 'Đang thay đổi ...'}</Button>
            </div>
        </form>
    );
};

export default AddressAndInfoForm;
