import TableUsers from '../../ui/adminUi/TableUsers';

const UsersAdmin = () => {
    return (
        <div>
            <h3 className="font-[600] text-[28px] uppercase">Khách hàng</h3>
            <div className="w-[100%] h-[3px] bg-main-color mt-1 mb-6"></div>
            <TableUsers />
        </div>
    );
};

export default UsersAdmin;
