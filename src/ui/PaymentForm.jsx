import { useEffect, useReducer } from 'react';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { FaMoneyBill1Wave, FaTruckFast } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import Button from './Button';

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

const PaymentForm = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    const [state, dispatch] = useReducer(reducer, { provinces: [], districts: [], wards: [] });

    const onSubmit = (data) => {
        return;
    };

    useEffect(() => {
        getLocation({ type: 'provinces', code: 0, _dispatch: dispatch });
    }, []);

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
            <h3 className="font-[600] text-[22px] mb-1">THÔNG TIN GIAO HÀNG</h3>
            <div className="flex flex-wrap justify-between">
                {/* name */}
                <div className="md:col-span-5 w-[49%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Họ và tên *"
                        type="text"
                        name="fullName"
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
                        name="provinces"
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        {...register('provinces', { required: 'TỈnh/thành phố không được để trống*' })}
                    >
                        <option value="">Chọn tỉnh/thành phố *</option>
                        {state?.provinces?.length > 0 &&
                            state?.provinces.map((province) => (
                                <option key={province.code} value={province.code}>
                                    {province.name_with_type}
                                </option>
                            ))}
                    </select>
                    {errors?.provinces && (
                        <span className="text-red-700 italic text-[14px] py-10">{errors?.provinces?.message}</span>
                    )}
                </div>

                {/* districts */}
                <div className="md:col-span-5 w-[31.5%]">
                    <select
                        name="districts"
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        {...register('districts', { required: 'Quận/huyện không được để trống*' })}
                    >
                        <option value="">Chọn quân/huyện *</option>
                        {state?.districts?.length > 0 &&
                            state?.districts.map((district) => (
                                <option key={district.code} value={district.code}>
                                    {district.name_with_type}
                                </option>
                            ))}
                    </select>
                    {errors?.districts && (
                        <span className="text-red-700 italic text-[14px] py-10">{errors?.districts?.message}</span>
                    )}
                </div>

                {/* wards */}
                <div className="md:col-span-5 w-[31.5%]">
                    <select
                        name="wards"
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        {...register('wards', { required: 'Xã/phường không được để trống*' })}
                    >
                        <option value="">Chọn xã/phường *</option>
                        {state?.wards?.length > 0 &&
                            state?.wards.map((ward) => (
                                <option key={ward.code} value={ward.path_with_type}>
                                    {ward.name_with_type}
                                </option>
                            ))}
                    </select>
                    {errors?.wards && (
                        <span className="text-red-700 italic text-[14px] py-10">{errors?.wards?.message}</span>
                    )}
                </div>

                {/* specific address*/}
                <div className="md:col-span-5 w-[100%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Địa chỉ cụ thể *"
                        type="text"
                        name="address"
                        {...register('address', {
                            required: 'địa chỉ này không được để trống*',
                            maxLength: { value: 100, message: 'Vượt quá 100 kí tự' },
                        })}
                    />
                    {errors?.address && (
                        <span className="text-red-700 italic text-[14px] py-10">{errors.address?.message}</span>
                    )}
                </div>

                {/* description */}
                <div className="md:col-span-5 w-[100%]">
                    <textarea
                        className="min-h-[100px] py-1 h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black mb-1"
                        placeholder="Ghi chú"
                        type="text"
                        name="description"
                        {...register('description', { maxLength: { value: 100, message: 'Vượt quá 100 kí tự' } })}
                    />
                    {errors?.description && (
                        <span className="text-red-700 italic text-[14px] py-10">{errors.description?.message}</span>
                    )}
                </div>
            </div>

            <h3 className="font-[600] text-[22px] mb-2 mt-5">PHƯƠNG THỨC THANH TOÁN</h3>
            <div className="flex flex-wrap justify-between">
                <div className="flex justify-between items-center border-solid border-2 border-main-color p-2 gap-3 md:col-span-5 w-[49%] cursor-pointer hover:bg-main-color hover:text-white">
                    <FaTruckFast className="text-[45px] text-orange-400"></FaTruckFast>
                    <p>
                        <input
                            type="text"
                            name="paymentMethod"
                            className="hidden"
                            defaultValue="thanh_toan_khi_nhan_hang"
                            {...register('paymentMethod', { required: 'địa chỉ này không được để trống*' })}
                        />
                        <span className="font-[600] text-[16px]">Thanh toán khi nhận hàng </span>
                        <br />
                        <span className="text-[14px]">Quý khách sẽ thanh toán bằng tiền mặt khi nhận hàng</span>
                    </p>
                </div>
                <div className="flex justify-between items-center border-solid border-2 p-2 gap-3 md:col-span-5 w-[49%] cursor-not-allowed opacity-80">
                    <FaMoneyBill1Wave className="text-[45px] text-orange-400"></FaMoneyBill1Wave>
                    <p>
                        <span className="font-[600] text-[16px]">Thanh toán chuyển khoản</span>
                        <br />
                        <span className="text-[14px]">Thanh toán chuyển khoản qua số tài khoản ngân hàng</span>
                    </p>
                </div>
                <div className="md:col-span-5 w-[100%]">
                    <input
                        className="h-7 bg-gray-200 shadow-lg  text-[16px] focus:outline-0 border-solid border-1 border-sky-500 mt-3 px-1 w-full placeholder:italic placeholder:text-black"
                        value={`Quý khách sẽ thanh toán bằng tiền mặt khi nhận hàng`}
                        type="text"
                        name="full_name"
                        id="full_name"
                        onChange={() => ''}
                    />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
                <Button
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(-1);
                    }}
                >
                    <div className="flex items-center justify-center gap-2">
                        <FaArrowCircleLeft className="text-[25px]"></FaArrowCircleLeft>
                        Tiếp tục mua hàng
                    </div>
                </Button>
                <Button>HOÀN TẤT ĐƠN HÀNG</Button>
            </div>
        </form>
    );
};

export default PaymentForm;
