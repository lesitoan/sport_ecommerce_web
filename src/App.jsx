import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import NotFound404Page from "./pages/NotFound404Page"
import PaymentPage from "./pages/PaymentPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import ProductsPage from "./pages/ProductsPage"
import FindProductsPage from "./pages/FindProductsPage"

import Layout from "./ui/Layout";


const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/category/:categorySlug" element={<ProductsPage />} />
            <Route path="products/:prodName" element={<ProductDetailPage />} />
            <Route path="find/:prodSlug" element={<FindProductsPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="*" element={<NotFound404Page />} />
          </Route>

        </Routes>

      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={true} />
    </QueryClientProvider>
  )
}

export default App
