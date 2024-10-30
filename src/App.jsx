import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import NotFound404Page from "./pages/NotFound404Page"
import PaymentPage from "./pages/PaymentPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import ProductsPage from "./pages/ProductsPage"

import Layout from "./ui/Layout";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:prodName" element={<ProductDetailPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="*" element={<NotFound404Page />} />
        </Route>

      </Routes>

    </BrowserRouter>
  )
}

export default App
