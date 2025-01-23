import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const NotFound404Page = () => {
    return (
        <main class="grid place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 min-h-screen">
            <div class="text-center">
                <p class="text-5xl font-semibold text-main-color">404</p>
                <h1 class="mt-4 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
                    Page not found
                </h1>
                <p class="mt-6 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                    Không tìm thấy địa chỉ URL bạn yêu cầu
                </p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <Button>
                        <Link to="/">về trang chủ</Link>
                    </Button>
                </div>
            </div>
        </main>
    );
};

export default NotFound404Page;
