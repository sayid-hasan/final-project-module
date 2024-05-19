import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Shared/Navbar/Nav";
import Footer from "../Shared/Footer/Footer";

const MainLay = () => {
  const location = useLocation();
  const isLogin = location.pathname.includes("login");
  return (
    <div>
      <div className="container mx-auto">
        {isLogin || <Nav></Nav>}

        <div className="min-h-[300px]">
          <Outlet></Outlet>
        </div>
      </div>
      {isLogin || <Footer></Footer>}
    </div>
  );
};

export default MainLay;
