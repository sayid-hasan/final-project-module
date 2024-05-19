import { Helmet } from "react-helmet-async";
import "./menu.css";
import Cover from "../../Shared/Cover/Cover";
import menuImage from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../Hooks/UseMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import Menucategory from "./Menucategory";

const Menu = () => {
  const [menu, loading] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  if (loading)
    return (
      <div className="flex justify-center pt-[100px]">
        <span className="loading loading-dots loading-lg text-[#BB8506]"></span>
      </div>
    );
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
      {/* offered */}
      <div className="my-7">
        <SectionTitle
          heading={`TODAY'S OFFER`}
          subheading={`---Don't miss---`}
        ></SectionTitle>
        <Menucategory items={offered} title={"drinks"}></Menucategory>
      </div>
      {/* DESSERT */}
      <div className="my-7">
        <Cover
          image={dessertImg}
          title={"DESSERTS"}
          subtitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          height={"600px"}
          mainmenu={false}
        ></Cover>
        <div className="my-8">
          <Menucategory items={dessert} title={"dessert"}></Menucategory>
        </div>
      </div>
      {/* Pizza */}
      <div className="my-7">
        <Cover
          image={pizzaImg}
          title={"PIZZA"}
          subtitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          height={"600px"}
          mainmenu={false}
        ></Cover>
        <div className="my-8">
          <Menucategory items={pizza} title={"pizza"}></Menucategory>
        </div>
      </div>
      {/* salad */}
      <div className="my-7">
        <Cover
          image={saladImg}
          title={"Salads"}
          subtitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          height={"600px"}
          mainmenu={false}
        ></Cover>
        <div className="my-8">
          <Menucategory items={salad} title={"salad"}></Menucategory>
        </div>
      </div>
      {/* soup */}
      <div className="my-7">
        <Cover
          image={soupImg}
          title={"soup"}
          subtitle={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
          height={"600px"}
          mainmenu={false}
        ></Cover>
        <div className="my-8">
          <Menucategory items={soup} title={"soup"}></Menucategory>
        </div>
      </div>
    </div>
  );
};

export default Menu;
