const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="card  bg-[#F3F3F3] shadow-xl">
        <figure className="">
          <div className="relative">
            <img
              src={image}
              alt="Shoes"
              className="rounded-xl object-cover  object-center"
            />
            <div className="absolute text-white font-bold  bg-black top-2 right-4 py-2 px-3 rounded-full">
              ${price}
            </div>
          </div>
        </figure>
        <div className="card-body font-Inter items-center text-center">
          <h2 className="card-title text-lg font-semibold">{name}</h2>
          <p className="min-h-[80px] text-sm font-normal">{recipe}</p>
          <div className="card-actions">
            <button className="btn uppercase btn-ghost text-[#BB8506] hover:bg-black hover:border-b-white  h-auto px-8 py-5 rounded-lg border-0 border-b-[#BB8506] border-b-2">
              {"Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
