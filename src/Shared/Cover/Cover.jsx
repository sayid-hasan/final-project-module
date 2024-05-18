import { Parallax } from "react-parallax";

const Cover = ({ image, title, subtitle, height, mainmenu }) => {
  return (
    <Parallax
      blur={{ min: -5, max: 5 }}
      bgImage={image}
      bgImageAlt={title}
      strength={500}
    >
      <section
        className=" flex justify-center items-center  bg-center bg-no-repeat"
        style={{
          height: `${height}`,
        }}
      >
        <div className="md:w-[1000px]">
          <div className="text-white max-w-5xl md:h-[450px] p-8 flex flex-col items-center justify-center gap-4  text-center   backdrop-brightness-50">
            <div>
              <h2
                className={`${
                  mainmenu ? `md:text-7xl` : `md:text-[45px]`
                } font-Cinzel text-4xl md:text-7xl font-bold leading-[119px] `}
              >
                {title}
              </h2>
              <p
                className={` ${
                  mainmenu ? `md:text-2xl` : `md:text-base`
                }font-Cinzel grow text-[#FFFFFF]  font-semibold text-lg leading-[32px]`}
              >
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div style={{ height: "200px" }} />
    </Parallax>
  );
};

export default Cover;
