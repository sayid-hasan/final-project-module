const SectionTitle = ({ subheading, heading, width = "w-3/12" }) => {
  return (
    <div className={`w-full md:${width} mx-auto`}>
      <p className="text-[#D99904] mb-2 md:mb-10 font-Inter font-normal text-base md:text-xl text-center">
        {subheading}
      </p>
      <h2 className=" py-4 font-Inter uppercase font-normal border-y-2 border-[#E8E8E8] text-2xl md:text-4xl leading-[48px] text-center mb-4 md:mb-9">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
