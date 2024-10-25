import { createBrowserRouter } from "react-router-dom"; 
import PrivateRoute from "./PrivateRoutes";

import Profile from "../pages/dashboardPages/Profile";

 
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/MainPages/HomePage";
import LoginPage from "../Pages/MainPages/LoginPage";
import RegisterPages from "../Pages/MainPages/RegisterPages";
import DashboardLayout from "../Layout/DashboardLayout";
import ErrorPage from "../Pages/MainPages/ErrorPage";
import CategoryPage from "../Pages/DashboardPages/CategoryPage";
import { backend_uri } from "../CommonResources";
import EditCategory from "../Pages/DashboardPages/EditCategory";
import EditUsers from "../Pages/DashboardPages/EditUsers";
import ProductPage from "../Pages/DashboardPages/ProductPage";
import EditProduct from "../Pages/DashboardPages/EditProduct";
import AllProducts from "../Pages/MainPages/AllProducts";
import ProductDetails from "../Pages/MainPages/ProductDetails";
import CategoryWiseProducts from "../Pages/MainPages/CategoryWiseProducts";
import ContactPage from "../Pages/MainPages/ContactPage";
import AboutPage from "../Pages/MainPages/AboutPage";
import AllUsersPage from "../Pages/DashboardPages/AllUsersPage";
import PurchaseHistory from "../Pages/DashboardPages/PurchaseHistory";
import Messages from "../Pages/DashboardPages/Messages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/products",
        element: <div>this is all products pages</div>,
      },
    
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/register",
        element: <RegisterPages />,
      },
      {
        path: "allproducts/:id",     
        element: <AllProducts/>,
        loader: ({params}) => fetch(`${backend_uri}/product/${params.id}`),
      },
      {
        path: "allproducts/",     
        element: <AllProducts/>,
        loader: () => fetch(`${backend_uri}/product/`),
      },

      {
        path: "categorywiseproduct/:id",       
        element: <CategoryWiseProducts/>,
        loader: ({params}) => fetch(`${backend_uri}/categorywiseproduct/${params.id}`),
        
      },


      {
        path: "/product_details/:id",    
        element: (
          <PrivateRoute>
            <ProductDetails />
          </PrivateRoute>
        ),   
         
        loader: ({params}) => fetch(`${backend_uri}/product/${params.id}`),
      },

    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout/>,
    children: [
      {
        path: "",
        element: <Profile />,
      },
      {
        path: "allUsers",
        element: <AllUsersPage />,
        loader: () => fetch(`${backend_uri}/user/`),
      },
      {
        path: "buy_product/:id",
        element: <PurchaseHistory />,
        //loader: ({params}) => fetch(`${backend_uri}/buy_product/${params.uid}`),
        
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "messages",
        element: <Messages />,
      },
      {
        path: "category", 
        element: <CategoryPage />,
        loader: () => fetch(`${backend_uri}/category`),
      },
      {
        path: "product", 
        element: <ProductPage />,
        loader: () => fetch(`${backend_uri}/product`),
      },
      
      
      {
        path: "category_edit/:id",     
        element: <EditCategory/>,
        loader: ({params}) => fetch(`${backend_uri}/category/${params.id}`),
      },

      {
        path: "user_edit/:id",     
        element: <EditUsers/>,
        loader: ({params}) => fetch(`${backend_uri}/user/${params.id}`),
      },



      {
        path: "product_edit/:id",     
        element: <EditProduct/>,
        loader: ({params}) => fetch(`${backend_uri}/product/${params.id}`),
      },
    ],
  },
]);

export default router;
