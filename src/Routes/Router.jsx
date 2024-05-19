import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import MainLay from "../MainLayout/MainLay";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/OrderFood/Order";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLay></MainLay>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
