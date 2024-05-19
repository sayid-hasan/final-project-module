import { Link } from "react-router-dom";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import ButtonwithBottomBorder from "../../components/Buttons/ButtonwithBottomBorder";

const Menucategory = ({ items, title }) => {
  return (
    <>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center ">
        <Link to={`/order/${title}`}>
          <ButtonwithBottomBorder
            btntext={"ORDER YOUR FAVOURITE FOOD"}
          ></ButtonwithBottomBorder>
        </Link>
      </div>
    </>
  );
};

export default Menucategory;
