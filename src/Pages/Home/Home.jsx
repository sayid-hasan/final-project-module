import PopularMenu from "./PopularMenu/PopularMenu";
import Banner from "./Banner/Banner";
import FeturedItem from "./FeturedItem/FeturedItem";
import Orderonline from "./Orderonline/Orderonline";
import Testimonials from "./Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <Orderonline></Orderonline>
      <PopularMenu></PopularMenu>
      <FeturedItem></FeturedItem>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
