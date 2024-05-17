const SectionTitle = ({ subheading, heading }) => {
  return (
    <div className="md:w-3/12 mx-auto">
      <p className="text-[#D99904] mb-10 font-Inter font-normal text-xl text-center">
        {subheading}
      </p>
      <h2 className=" py-4 font-Inter font-normal border-y-2 border-[#E8E8E8]  text-4xl leading-[48px] text-center mb-9">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
