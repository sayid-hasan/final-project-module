import PopularMenu from "../PopularMenu/PopularMenu";
import Banner from "./Banner/Banner";
import FeturedItem from "./FeturedItem/FeturedItem";
import Orderonline from "./Orderonline/Orderonline";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Orderonline></Orderonline>
      <PopularMenu></PopularMenu>
      <FeturedItem></FeturedItem>
    </div>
  );
};

export default Home;
