const ButtonwithBottomBorder = ({ btntext }) => {
  return (
    <button className="btn btn-ghost hover:bg-black hover:border-b-white  h-auto px-8 py-5 rounded-lg border-0 border-b-black border-b-2">
      {btntext}
    </button>
  );
};

export default ButtonwithBottomBorder;
