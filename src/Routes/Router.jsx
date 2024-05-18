import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import MainLay from "../MainLayout/MainLay";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/OrderFood/Order";

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
        path: "/order",
        element: <Order></Order>,
      },
    ],
  },
]);

export default router;
