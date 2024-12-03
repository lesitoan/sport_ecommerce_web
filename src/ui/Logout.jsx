import { useEffect, useState } from 'react';
import Modal from './Modal';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../hooks/authHook';

const Logout = () => {
    const nagigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const { logout, isLoading, isSuccess } = useLogout();
    const { setUser } = useAuth();

    useEffect(() => {
        if(isSuccess) {
            setUser(null);
            nagigate('/', { replace: true });
        }
    }, [isSuccess, nagigate, setUser]);
    
    return (
        <>
            <div
                // className={`${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'} flex justify-center items-center bg-main-color text-white px-3 py-[10px] rounded-md`}
                onClick={() => setShowModal(true)}
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
