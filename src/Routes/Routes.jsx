import { createBrowserRouter } from "react-router-dom"; 
import PrivateRoute from "./PrivateRoutes";
import AllUsers from "../pages/dashboardPages/AllUsers";
import Profile from "../pages/dashboardPages/Profile";
import Messages from "../pages/dashboardPages/Messages";
import CreateMessage from "../pages/dashboardPages/CreateMessages";
import MessageDetails from "../pages/dashboardPages/MessageDetails";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../Pages/MainPages/HomePage";
import LoginPage from "../Pages/MainPages/LoginPage";
import RegisterPages from "../Pages/MainPages/RegisterPages";
import DashboardLayout from "../Layout/DashboardLayout";
import ErrorPage from "../Pages/MainPages/ErrorPage";
import CategoryPage from "../Pages/DashboardPages/CategoryPage";

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
    //   {
    //     path: "/private",
    //     element: (
    //       <PrivateRoute>
    //         <PrivatePage />
    //       </PrivateRoute>
    //     ),
    //   },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPages />,
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
        element: <AllUsers />,
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
        path: "Category",
        element: <CategoryPage />,
      },
      {
        path: "messages/:id",
        element: <MessageDetails />,
      },
      {
        path: "createMessage",
        element: <CreateMessage />,
      },
    ],
  },
]);

export default router;
