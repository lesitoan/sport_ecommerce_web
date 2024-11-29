import AddressAndInfoForm from './AddressAndInfoForm';
import { useState } from 'react';
import { useUser } from '../hooks/authHook';
import { useDeleteShippingAddressById, useGetShippingAddresses } from '../hooks/addressHook';
import Spinner from './Spinner';
import Button from './Button';
import { FaTrashAlt } from 'react-icons/fa';

// const fakeAddress = {
//     fullName: "Le Si Toan 1",
//     phone: "0353487438",
//     address: "Binh Que, Thang Binh, Quang Nam",
//     addressDetail: "To 14, Binh Phung, Binh Que, Thang Binh, Quang Nam",
// }

const AddresssSession = () => {
    const [showEditForm, setShowEditForm] = useState(false);
    const { user } = useUser();
    const { shippingAddresses, isLoading: addressesLoading } = useGetShippingAddresses(user?.id);
    const { deleteShippingAddressById, isLoading } = useDeleteShippingAddressById();

    if (addressesLoading) return <Spinner />;
    return (
        <div className="">
            <div className="mb-6">
                <h3 className="font-[600] text-[22px] mb-1">THÔNG TIN GIAO HÀNG</h3>
                {user?.user_metadata && (
                    <div className="text-[16px] border-b border-[#e1e1e1] py-2">
                        {shippingAddresses.length === 0 ? (
                            <h4>Chưa có địa chỉ nhận hàng</h4>
                        ) : (
                            <ul>
                                {shippingAddresses.map((address, index) => (
                                    <li
                                        key={index}
                                        className="bg-slate-200 flex justify-between mb-2 px-4 py-2 rounded-sm"
                                    >
                                        <div>
                                            <p>{address.fullName}</p>
                                            <p>{address.phoneNumber}</p>
                                            <p>{`${address?.ward} - ${address?.district} - ${address.province}`}</p>
                                            <p>{address.addressDetail}</p>
                                        </div>
                                        <button
                                            className="flex gap-1 justify-center items-center bg-red-600 w-[80px] h-[34px] text-white py-[2px]  cursor-pointer rounded-md hover:bg-red-500"
                                            onClick={() => deleteShippingAddressById({ addressId: address?.id })}
                                            disabled={isLoading}
                                        >
                                            <FaTrashAlt />
                                            <span>xóa</span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}
                <div className="mt-4 flex justify-end">
                    <Button onClick={() => setShowEditForm((prev) => !prev)}>Thêm dịa chỉ</Button>
                </div>
            </div>
            {showEditForm && <AddressAndInfoForm />}
        </div>
    );
};

export default AddresssSession;
