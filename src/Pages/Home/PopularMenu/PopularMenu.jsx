import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/UseMenu";
import ButtonwithBottomBorder from "../../../components/Buttons/ButtonwithBottomBorder";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <div className="mb-12">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subheading={"---Check it out---"}
      ></SectionTitle>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {popularItems?.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center">
        <ButtonwithBottomBorder
          btntext={"View full Menu"}
        ></ButtonwithBottomBorder>
      </div>
    </div>
  );
};

export default PopularMenu;
