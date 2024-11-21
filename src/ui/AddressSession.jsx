import { FaPen } from "react-icons/fa6";
import AddressAndInfoForm from "./AddressAndInfoForm";
import { useState } from "react";
import { useUser } from "../hooks/authHook";

// const fakeAddress = {
//     fullName: "Le Si Toan 1",
//     phone: "0353487438",
//     address: "Binh Que, Thang Binh, Quang Nam",
//     addressDetail: "To 14, Binh Phung, Binh Que, Thang Binh, Quang Nam",
// }

const AddresssSession = () => {
    const [showEditForm, setShowEditForm] = useState(false);
    const { user } = useUser();

    return (
        <div className="">
            <div className="mb-6">
                <h3 className="font-[600] text-[22px] mb-1">THÔNG TIN GIAO HÀNG</h3>
                {
                    user?.user_metadata && (
                        <div className="flex items-center justify-between text-[16px] border-b border-[#e1e1e1] py-2">
                            <div>
                                <p className="">{user?.user_metadata?.fullName}</p>
                                <p className="">{user?.user_metadata?.phoneNumber}</p>
                                <p className="">{user?.user_metadata?.address}</p>
                                <p className="">{user?.user_metadata?.addressDetail}</p>
                            </div>
                            <div>
                                <button
                                    className="text-[18px] mr-3"
                                    onClick={() => setShowEditForm(prev => !prev)}
                                >{user?.user_metadata?.address ? <FaPen /> : <span className="text-white text-[16px] bg-main-color px-3 py-2 rounded-sm hover:bg-slate-200 hover:text-black transition-all">Thêm dịa chỉ</span>}</button>
                            </div>
                        </div>
                    )
                }
            </div>
            {showEditForm && <AddressAndInfoForm />}
        </div >
    )
}

export default AddresssSession;