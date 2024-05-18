import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import MainLay from "../MainLayout/MainLay";
import Menu from "../Pages/Menu/Menu";

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
    ],
  },
]);

export default router;
