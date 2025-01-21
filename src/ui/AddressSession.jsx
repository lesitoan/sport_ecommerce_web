import AddressAndInfoForm from './AddressAndInfoForm';
import { useState } from 'react';
import { useDeleteAddress, useAddresses } from '../hooks/addressHook';
import Spinner from './Spinner';
import Button from './Button';
import { FaTrashAlt } from 'react-icons/fa';

const AddresssSession = () => {
    const [showEditForm, setShowEditForm] = useState(false);
    const { addresses, isLoading: addressesLoading } = useAddresses();
    const { deleteAddress, isLoading: isDeleting } = useDeleteAddress();

    if (addressesLoading) return <Spinner />;
    return (
        <div className="">
            <div className="mb-6">
                <h3 className="font-semibold text-xl sm:text-2xl xl:text-3xl mb-2 uppercase">THÔNG TIN GIAO HÀNG</h3>
                <div className="border-b border-white py-2">
                    {addresses.length === 0 ? (
                        <h4>Chưa có địa chỉ nhận hàng</h4>
                    ) : (
                        <ul>
                            {addresses.map((address) => (
                                <li
                                    key={address?.id}
                                    className="bg-slate-200 flex justify-between mb-2 p-2 sm:p-4 rounded-sm"
                                >
                                    <div>
                                        <p className="font-semibold text-green-500">{address.fullName}</p>
                                        <p>{address.phoneNumber}</p>
                                        <p>{`${address?.ward} - ${address?.district} - ${address?.province}`}</p>
                                        <p>{address?.addressDetail}</p>
                                    </div>
                                    <button
                                        className="flex gap-1 justify-center items-center bg-red-600 w-14 h-7 sm:w-16 lg:w-20 sm:h-9 text-white py-[2px]  cursor-pointer rounded-md hover:bg-red-500"
                                        onClick={() => deleteAddress(address?.id)}
                                        disabled={isDeleting}
                                    >
                                        <FaTrashAlt />
                                        <span>xóa</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="mt-4 flex justify-end">
                    <Button onClick={() => setShowEditForm((prev) => !prev)}>Thêm dịa chỉ</Button>
                </div>
            </div>
            {showEditForm && <AddressAndInfoForm />}
        </div>
    );
};

export default AddresssSession;
