import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';

import ProtectedRoute from './ui/ProtectedRoute';

import Nav from './ui/adminUi/Nav';
import HomeAdmin from './pages/adminPage/HomeAdmin';
import ProductsAdmin from './pages/adminPage/ProductsAdmin';
import UsersAdmin from './pages/adminPage/UsersAdmin';
import AnalysisAdmin from './pages/adminPage/AnalysisAdmin';
import OrdersAdmin from './pages/adminPage/OrdersAdmin';

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<HomePage />} />
                        <Route path="/category/:categorySlug" element={<ProductsPage />} />
                        <Route path="products/:prodSlug" element={<ProductDetailPage />} />
                        <Route path="find/:prodSlug" element={<FindProductsPage />} />
                        <Route path="sign-up" element={<SignUpPage />} />
                        <Route path="sign-in" element={<SignInPage />} />
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
                    <Route path="/admin" element={<Nav />}>
                        <Route index element={<HomeAdmin />} />
                        <Route path="products" element={<ProductsAdmin />} />
                        <Route path="orders" element={<OrdersAdmin />} />
                        <Route path="users" element={<UsersAdmin />} />
                        <Route path="analysis" element={<AnalysisAdmin />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <ReactQueryDevtools initialIsOpen={true} />
            <ToastContainer limit={3} autoClose={1000} />
        </QueryClientProvider>
    );
}

export default App;
