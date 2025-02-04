import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../components/pages/homepage";
import AuthenticateLayout from "../layouts/authenticate/AuthenticateLayout";
import SignUp from "../components/pages/authenticate/sign-up";
import SignIn from "../components/pages/authenticate/sign-in";
import ProductsPage from "../components/pages/products";
import { mockProductData } from "../mock/mockProductCardTypeData";
import ProductDetails from "../components/pages/product-details";
import ShoppingCart from "../components/pages/user/cart";
import Checkout from "../components/pages/user/checkout";
import AdminLayoutCustom from "../layouts/admin/AdminLayout";
import Dashboard from "../components/pages/admin/dashboard";
import { mockAdminRouteData } from "../model/route";

import AdminProductsPage from "../components/pages/admin/products";

export const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "products",
        element: <ProductsPage />,
      },
      {
        path: "products/details",
        element: <ProductDetails {...mockProductData} />,
      },
      {
        path: "cart",
        element: <ShoppingCart />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayoutCustom routes={mockAdminRouteData} />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <AdminProductsPage />,
      },
      {
        path: "orders",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthenticateLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
