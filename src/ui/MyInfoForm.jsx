import { useAuth } from '../context/AuthContext';

const MyInfoForm = () => {
    const { user } = useAuth();

    return (
        <form className="mb-10">
            <h3 className="font-semibold text-xl lg:text-2xl  mb-3 uppercase">THÔNG TIN CÁ NHÂN</h3>
            {/* email */}
            <div className="mb-4 text-sm sm:text-base font-semibold text-green-500">
                <input
                    className="mb-1 px-3 py-2 bg-gray-200 shadow-lg focus:outline-0 border-solid border-1 border-sky-500 w-full placeholder:italic  rounded-md"
                    disabled
                    value={user?.email}
                />
            </div>

            {/* userName */}
            <div className="mb-4 text-sm sm:text-base font-semibold text-green-500">
                <input
                    className="mb-1 px-3 py-2 bg-gray-200 shadow-lg focus:outline-0 border-solid border-1 border-sky-500 w-full placeholder:italic rounded-md"
                    value={user?.userName}
                    disabled
                />
            </div>
        </form>
    );
};

export default MyInfoForm;
