import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetail from  './pages/ProductDetailPage'
import Protected from './features/auth/components/Protected';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import PageNotFound from './pages/404';
import OrderSuccessPage from './pages/OrderSuccessPage';
import UserOrdersPage from './pages/UserOrdersPage';
import UserProfilePage from './pages/UserProfilePage';
import { fetchLoggedInUserAsync } from './features/user/userSlice';
import Logout from './features/auth/components/Logout';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ProtectedAdmin from './features/auth/components/ProtectedAdmin';
import AdminHome from './pages/AdminHome';
import AdminProductDetailPage from './pages/AdminProductDetailPage';
import AdminProductFormPage from './pages/AdminProductFormPage';
import AdminOrdersPage from './pages/AdminOrdersPage';
import { positions, Provider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

import { createBrowserRouter, Link, RouterProvider } from 'react-router-dom';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: '/admin',
    element: (
      <ProtectedAdmin>
        <AdminHome></AdminHome>
      </ProtectedAdmin>
    ),
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>),
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout></Checkout>
      </Protected>),
  },
  {
    path: '/product-detail/:id',
    element: (
      <Protected>
        <ProductDetail></ProductDetail>
      </Protected>),
  },
  {
    path: '/order-success/:id',
    element: (
      <OrderSuccessPage></OrderSuccessPage>
    ),
  },
  {
    path: '/orders',
    element: (
      <Protected>
        <UserOrdersPage></UserOrdersPage>
      </Protected>
      // we will add Page later right now using component directly.
    ),
  },
  {
    path: '/profile',
    element: (
      <Protected> 
        <UserProfilePage></UserProfilePage>
      </Protected>
    ),
  },
  {
    path: '/logout',
    element: <Logout></Logout>,
  },
  {
    path: '/forgot-password',
    element: <ForgotPasswordPage></ForgotPasswordPage>,
  },
  {
    path: '/admin/product-detail/:id',
    element: (
      <ProtectedAdmin>
        <AdminProductDetailPage></AdminProductDetailPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-form',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/product-form/edit/:id',
    element: (
      <ProtectedAdmin>
        <AdminProductFormPage></AdminProductFormPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '/admin/orders',
    element: (
      <ProtectedAdmin>
        <AdminOrdersPage></AdminOrdersPage>
      </ProtectedAdmin>
    ),
  },
  {
    path: '*',
    element: (
      <PageNotFound></PageNotFound>
    ),
  }
]);


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    if (user) {
      dispatch(fetchItemsByUserIdAsync(user.id));
      dispatch(fetchLoggedInUserAsync(user.id));
    }
  },[dispatch, user]);
  
  return (
    <>
      <div className="App">
        {/* <SignupPage></SignupPage> */}
      
        <Provider template={AlertTemplate} {...options}>
        {/* Dynamic Routing */}
          <RouterProvider router={router} />
        </Provider>
        {/* Link must be inside the Provider */}
      </div>
    </>
  );
}

export default App;
