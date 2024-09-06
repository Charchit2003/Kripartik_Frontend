import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import Checkout from './pages/Checkout';
import ProductDetail from  './pages/ProductDetailPage'


import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
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
    path: "/cart",
    element: <CartPage></CartPage>,
  },
  {
    path: "/checkout",
    element: <Checkout></Checkout>,
  },
  {
    path: '/product-detail/:id',
    element: <ProductDetail></ProductDetail>
  }
]);


function App() {
  return (
    <div className="App">
      {/* <SignupPage></SignupPage> */}

      {/* Dynamic Routing */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
