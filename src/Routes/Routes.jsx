import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Pages/Home/Home";
import Menu from "../components/Pages/Menu/Menu";
import OurShop from "../components/Pages/OurShop/OurShop";
import Login from "../components/Pages/Login/Login";
import SignUp from "../components/Pages/SignUp/SignUp";
import DashBoard from "../Layout/DashBoard";
import MyCart from "../components/Pages/Dashboard/MyCart/MyCart";



export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path: '/menu',
          element:<Menu></Menu>
        },
        {
          path: '/shop/:category',
          element: <OurShop></OurShop>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <DashBoard></DashBoard>,
      children:[
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        }
      ]
    }
  ]);