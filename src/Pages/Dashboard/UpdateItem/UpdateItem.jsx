import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const UpdateItem = () => {
  const item = useLoaderData();
  console.log(item);
  return (
    <div>
      <SectionTitle
        heading={"UPDATE ITEM"}
        subheading={"---Update anything---"}
      ></SectionTitle>
    </div>
  );
};

export default UpdateItem;
