import MenuItem from "../../Shared/MenuItem/MenuItem";

const Menucategory = ({ items }) => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <MenuItem key={item._id} item={item}></MenuItem>
      ))}
    </div>
  );
};

export default Menucategory;
