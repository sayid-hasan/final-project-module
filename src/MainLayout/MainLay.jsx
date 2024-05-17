import { Outlet } from "react-router-dom";
import Nav from "../Shared/Navbar/Nav";
import Footer from "../Shared/Footer/Footer";

const MainLay = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Nav></Nav>

        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLay;
