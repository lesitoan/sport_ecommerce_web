import { useEffect, useReducer } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import Button from './Button';
import { useAddAddress } from '../hooks/addressHook';

const getLocation = async (url) => {
    try {
        const response = await axios.get(url);
        return response?.data?.data;
    } catch (error) {
        return null;
    }
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_PROVINCES':
            return { ...state, provinces: action.payload.provinces };
        case 'SET_DISTRICTS':
            return { ...state, districts: action.payload.districts };
        case 'SET_WARDS':
            return { ...state, wards: action.payload.wards };
        default:
            return state;
    }
};

const AddressAndInfoForm = ({ onShow }) => {
    const { isLoading, addAddress, isSuccess } = useAddAddress();

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        reset,
    } = useForm();

    const [addressesData, dispatch] = useReducer(reducer, { provinces: [], districts: [], wards: [] });

    const isChangeName = watch('fullName') ? true : false; //chỉ khi điền tên thì mới load api địa chỉ
    useEffect(() => {
        if (isChangeName) {
            getLocation('https://esgoo.net/api-tinhthanh/1/0.htm').then((data) => {
                dispatch({ type: 'SET_PROVINCES', payload: { provinces: data } });
            });
        }
    }, [isChangeName]);

    const provinceId = watch('province');
    useEffect(() => {
        if (provinceId) {
            getLocation(`https://esgoo.net/api-tinhthanh/2/${provinceId}.htm`).then((data) => {
                dispatch({ type: 'SET_DISTRICTS', payload: { districts: data } });
            });
        }
    }, [provinceId]);

    const districtId = watch('district');
    useEffect(() => {
        if (districtId) {
            getLocation(`https://esgoo.net/api-tinhthanh/3/${districtId}.htm`).then((data) => {
                dispatch({ type: 'SET_WARDS', payload: { wards: data } });
            });
        }
    }, [districtId]);

    const wardId = watch('ward');
    useEffect(() => {
        if (wardId) {
            getLocation(`https://esgoo.net/api-tinhthanh/5/${wardId}.htm`).then((data) => {});
        }
    }, [wardId]);

    const onSubmit = (data) => {
        getLocation(`https://esgoo.net/api-tinhthanh/5/${data.ward}.htm`).then((fullAddress) => {
            addAddress({ fullAddress, ...data });
        });
    };

    if (isSuccess) {
        reset();
        onShow(false);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-semibold text-xl lg:text-2xl  mb-3 uppercase">THÊM ĐỊA CHỈ GIAO HÀNG</h3>
            <div className="flex flex-wrap justify-between">
                {/* name */}
                <div className="w-full md:w-[49%] mb-4 text-sm sm:text-base">
                    <input
                        className="mb-1 px-3 py-2 bg-gray-200 shadow-lg focus:outline-0 border-solid border-1 border-sky-500 w-full placeholder:italic placeholder:text-gray-600 text-black rounded-md"
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
                        <span className="text-red-700 italic text-sm">{errors.fullName?.message}</span>
                    )}
                </div>

                {/* phone */}
                <div className="w-full md:w-[49%] mb-4 text-sm sm:text-base">
                    <input
                        className="mb-1 px-3 py-2 bg-gray-200 shadow-lg focus:outline-0 border-solid border-1 border-sky-500 w-full placeholder:italic placeholder:text-gray-600 text-black rounded-md"
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
                        <span className="text-red-700 italic text-sm">{errors.phoneNumber?.message}</span>
                    )}
                </div>

                {/* provinces */}
                <div className="w-full md:w-[31.5%] mb-4 text-sm sm:text-base">
                    <select
                        name="province"
                        disabled={isLoading}
                        className="mb-1 px-3 py-2 bg-gray-200 shadow-lg focus:outline-0 border-solid border-1 border-sky-500 w-full placeholder:italic placeholder:text-gray-600 text-black rounded-md"
                        {...register('province')}
                        // {...register('province', { required: 'TỈnh/thành phố không được để trống*' })}
                    >
                        <option value="">Chọn tỉnh/thành phố *</option>
                        {addressesData?.provinces?.length > 0 &&
                            addressesData?.provinces.map((province) => (
                                <option key={province.id} value={province.id}>
                                    {province.full_name}
                                </option>
                            ))}
                    </select>
                    {errors?.province && (
                        <span className="text-red-700 italic text-sm">{errors?.province?.message}</span>
                    )}
                </div>

                {/* districts */}
                <div className="w-full md:w-[31.5%] mb-4 text-sm sm:text-base">
                    <select
                        name="district"
                        disabled={isLoading}
                        className="mb-1 px-3 py-2 bg-gray-200 shadow-lg focus:outline-0 border-solid border-1 border-sky-500 w-full placeholder:italic placeholder:text-gray-600 text-black rounded-md"
                        {...register('district')}
                        // {...register('district', { required: 'Quận/huyện không được để trống*' })}
                    >
                        <option value="">Chọn quân/huyện *</option>
                        {addressesData?.districts?.length > 0 &&
                            addressesData?.districts.map((district) => (
                                <option key={district.id} value={district.id}>
                                    {district.full_name}
                                </option>
                            ))}
                    </select>
                    {errors?.district && (
                        <span className="text-red-700 italic text-sm">{errors?.district?.message}</span>
                    )}
                </div>

                {/* wards */}
                <div className="w-full md:w-[31.5%] mb-4 text-sm sm:text-base">
                    <select
                        name="ward"
                        disabled={isLoading}
                        className="mb-1 px-3 py-2 bg-gray-200 shadow-lg focus:outline-0 border-solid border-1 border-sky-500 w-full placeholder:italic placeholder:text-gray-600 text-black rounded-md"
                        {...register('ward')}
                        // {...register('ward', { required: 'Xã/phường không được để trống*' })}
                    >
                        <option value="">Chọn xã/phường *</option>
                        {addressesData?.wards?.length > 0 &&
                            addressesData?.wards.map((ward) => (
                                <option key={ward.id} value={ward.id}>
                                    {ward.full_name}
                                </option>
                            ))}
                    </select>
                    {errors?.ward && <span className="text-red-700 italic text-sm">{errors?.ward?.message}</span>}
                </div>

                {/* specific address*/}
                <div className=" w-full mb-4 text-sm sm:text-base">
                    <input
                        className="mb-1 px-3 py-2 bg-gray-200 shadow-lg focus:outline-0 border-solid border-1 border-sky-500 w-full placeholder:italic placeholder:text-gray-600 text-black rounded-md"
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
                        <span className="text-red-700 italic text-sm">{errors.addressDetail?.message}</span>
                    )}
                </div>
            </div>

            <Button disable={isLoading} isLoadinng={isLoading}>
                Lưu địa chỉ
            </Button>
        </form>
    );
};

export default AddressAndInfoForm;
