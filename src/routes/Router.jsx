import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LayOut from "../Layout/LayOut";
import HomePage from "../pages/HomePage";
import Loginpage from "../pages/LoginPage/Loginpage";
import Registration from "../pages/Registration";
import AuthRouter from '../pages/LoginPage/AuthRouter'
import Dashboard from '../pages/Dashboard'
import Signup from "../pages/Signup";
import Adminpage from '../components/Adminpage'
const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LayOut />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "login",
          element: <Loginpage />,
        },
        {
          path: "signup",
          element: <Signup />,
        },
        {
          element:<AuthRouter />,
          children:[
            {
              path:'/user/dashboard',
              element:<Dashboard/>
            }
          ]
        },
        {
          path:'admin',
          element:<Adminpage/>
        }
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
