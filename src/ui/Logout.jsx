import { useState } from 'react';
import { useLogout } from '../hooks/authHook';
import Modal from './Modal';

const Logout = () => {
    const [showModal, setShowModal] = useState(false);
    const { logout, isLoading } = useLogout();

    const handleClickLogout = () => {
        setShowModal(true);
    };

    return (
        <>
            <div
                // className={`${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'} flex justify-center items-center bg-main-color text-white px-3 py-[10px] rounded-md`}
                onClick={handleClickLogout}
            >
                <span>{isLoading ? 'Đang đăng xuất' : 'Đăng xuất'}</span>
            </div>
            <Modal show={showModal} onShow={setShowModal} submit={logout}>
                <h3>Bạn có chắc muốn đăng xuất !</h3>
            </Modal>
        </>
    );
};

export default Logout;
