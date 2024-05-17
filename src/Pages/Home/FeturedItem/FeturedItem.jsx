import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import "./featuredItem.css";
const FeturedItem = () => {
  return (
    <div>
      <div className="z-1 featured-item  ">
        <div className="z-20 featured-child md:py-[130px]">
          {" "}
          <SectionTitle
            heading={"FROM OUR MENU"}
            subheading={"---Check it out---"}
          ></SectionTitle>
          <div className=" flex flex-col md:flex-row gap-12 md:items-center">
            <div className="md:w-1/2 w-full flex justify-end">
              <img className="max-w-[450px] h-full" src={featured} alt="" />
            </div>
            <div className="md:w-1/2 w-full max-w-[500px] space-y-3">
              <div>
                {" "}
                <p className="text-xl">March 20, 2023</p>{" "}
                <h2 className="text-2xl">WHERE CAN I GET SOME?</h2>{" "}
                <p className="text-xl">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  voluptate facere, deserunt dolores maiores quod nobis quas
                  quasi. Eaque repellat recusandae ad laudantium tempore
                  consequatur consequuntur omnis ullam maxime tenetur.
                </p>
              </div>
              <div className="mt-6">
                <button className="btn btn-ghost hover:bg-black hover:border-b-white  h-auto px-8 py-5 rounded-lg border-0 border-b-black border-b-2">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeturedItem;
