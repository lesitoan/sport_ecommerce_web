import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import HomePage from './pages/HomePage';
import NotFound404Page from './pages/NotFound404Page';
import PaymentPage from './pages/PaymentPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductsPage from './pages/ProductsPage';
import FindProductsPage from './pages/FindProductsPage';
import AccountPage from './pages/AccountPage';

import Layout from './ui/Layout';
import Nav from './ui/adminUi/Nav';
import ProtectedRoute from './ui/ProtectedRoute';
import Spinner from './ui/Spinner';

import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import HomeAdmin from './pages/adminPage/HomeAdmin';
import ProductsAdmin from './pages/adminPage/ProductsAdmin';
import UsersAdmin from './pages/adminPage/UsersAdmin';
import AnalysisAdmin from './pages/adminPage/AnalysisAdmin';
import OrdersAdmin from './pages/adminPage/OrdersAdmin';
import AdminProtectedRoute from './ui/AdminProtectedRoute';

import { useAuth } from './context/AuthContext';

function App() {
    const { isLoading } = useAuth();
    if (isLoading)
        return (
            <div className="h-[80vh] flex items-center justify-center">
                <Spinner />
            </div>
        );

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="category/:categorySlug" element={<ProductsPage />} />
                        <Route path="products/:prodSlug" element={<ProductDetailPage />} />
                        <Route path="find/:prodSlug" element={<FindProductsPage />} />
                        <Route path="sign-up" element={<SignUpPage />} />
                        <Route path="sign-in" element={<SignInPage />} />
                        <Route path="reset-password" element={<ResetPasswordPage />} />
                        <Route path="*" element={<NotFound404Page />} />
                    </Route>

                    {/* auth router */}

                    <Route
                        path="/"
                        element={
                            <ProtectedRoute>
                                <Layout />
                            </ProtectedRoute>
                        }
                    >
                        <Route path="payment" element={<PaymentPage />} />
                        <Route path="my-account" element={<AccountPage />} />
                    </Route>

                    {/* admin router */}
                    <Route
                        path="/admin"
                        element={
                            <AdminProtectedRoute>
                                <Nav />
                            </AdminProtectedRoute>
                        }
                    >
                        <Route index element={<HomeAdmin />} />
                        <Route path="products" element={<ProductsAdmin />} />
                        <Route path="orders" element={<OrdersAdmin />} />
                        <Route path="users" element={<UsersAdmin />} />
                        <Route path="analysis" element={<AnalysisAdmin />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <ToastContainer
                limit={3}
                autoClose={2000}
                toastClassName={(context) => {
                    const baseClasses =
                        'mx-5 sm:mx-0 mt-5 relative flex items-center justify-between p-4 rounded-lg shadow-md';
                    const typeClasses = {
                        success: 'bg-green-500 text-white',
                        error: 'bg-red-500 text-white',
                        info: 'bg-blue-500 text-white',
                        warning: 'bg-yellow-500 text-black',
                    };

                    return `${baseClasses} ${typeClasses[context?.type || 'info']}`;
                }}
                bodyClassName="text-sm"
                progressClassName="bg-white h-1"
            />
        </>
    );
}

export default App;
