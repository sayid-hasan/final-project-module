import { Helmet } from "react-helmet-async";
import "./menu.css";
import Cover from "../../Shared/Cover/Cover";
import menuImage from "../../assets/menu/banner3.jpg";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      {/* cover */}
      <Cover
        image={menuImage}
        title={"OUR MENU"}
        subtitle={"Would you like to try a dish?"}
        height={"700px"}
        mainmenu={true}
      ></Cover>
    </div>
  );
};

export default Menu;
