import { createBrowserRouter } from "react-router-dom";

import Home from "../Pages/Home/Home";
import MainLay from "../MainLayout/MainLay";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLay></MainLay>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
]);

export default router;
