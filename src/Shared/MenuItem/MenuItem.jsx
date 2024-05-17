const MenuItem = ({ item }) => {
  const { name, price, image, recipe } = item;
  return (
    <li className="flex flex-col py-6 mb-12 sm:flex-row sm:justify-between">
      <div className="flex w-full space-x-2 sm:space-x-4">
        <img
          style={{ borderRadius: "0 200px 200px 200px" }}
          className="flex-shrink-0 object-cover w-[100px] h-[100px] dark:border- rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
          src={image}
          alt=""
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-2">
              <h3 className="text-lg font-Cinzel text-[#151515] font-semibold uppercase leading-snug sm:pr-8">
                {name}-----------
              </h3>
              <p className="text-sm font-Inter text-[#737373] dark:text-gray-600">
                {recipe}
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-[#BB8506]">${price}</p>
              {/* <p className="text-sm line-through dark:text-gray-400">75.50€</p> */}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MenuItem;
