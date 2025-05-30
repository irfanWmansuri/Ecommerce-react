import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ProductHome } from './Routes/ProductHome.jsx'
import ProductSingle from './Routes/ProductSingle.jsx'
import Checkout from './Routes/Checkout.jsx'
import { MyCart } from './Routes/MyCart.jsx'
import { CartProvider } from './context/CartContext.jsx'
// import { Maths } from './component/Maths.jsx'
import { Payment } from './Routes/Payment.jsx'
import { Layout } from './Routes/Layout.jsx'
import { MyAccount } from './Routes/MyAccount.jsx'
import Dashboard from './Routes/DashRoutes/Dashboard.jsx'
import Orders from './Routes/DashRoutes/Orders.jsx'
import { DashProducts } from './Routes/DashRoutes/DashProducts.jsx'
import Customers from  './Routes/DashRoutes/Customers.jsx'
import Reports from './Routes/DashRoutes/Reports.jsx'
import { DashboardLayout } from './Routes/DashboardLayout.jsx'
// import ProtectedRoutes from './component/ProtectedRoutes.jsx'
import { Add } from './Routes/DashRoutesChild/Add.jsx'
import { Edit } from './Routes/DashRoutesChild/Edit.jsx'
import ProductDetails from './Routes/ProductDetails.jsx' 
import { Toaster } from 'react-hot-toast'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
      <Toaster position="top-right" />
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<ProductHome />} />
            <Route path="/product/id/:itemId" element={<ProductSingle />} />
            <Route path="/product/slug/:slug" element={<ProductDetails />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/mycart' element={<MyCart />} />
            {/* <Route path='/maths' element={<Maths />} /> */}
            <Route path='/payment' element={<Payment />} />
            <Route path='/my-account' element={<MyAccount />} />
            <Route path='/' element={<DashboardLayout />}>
              {/* <Route path='/dashboard' element={
                <ProtectedRoutes><Dashboard /></ProtectedRoutes>
              } /> */}
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/orders' element={<Orders />} />
              <Route path='/products' element={<DashProducts />} />
              <Route path='/customers' element={<Customers />} />
              <Route path='/reports' element={<Reports />} />
              <Route path='/products/add-product' element={<Add />} />
              <Route path='/products/edit-product' element={<Edit />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </StrictMode>,
)
