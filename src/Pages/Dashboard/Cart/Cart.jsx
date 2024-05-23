import { MdDelete } from "react-icons/md";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Cart = () => {
  const [carts] = useCart();
  const totalPrice = carts.reduce((accumulator, item) => {
    return accumulator + parseInt(item.price);
  }, 0);
  return (
    <div className="bg-[#F6F6F6]">
      <div className=" w-full">
        <SectionTitle
          heading={" WANNA ADD MORE?"}
          subheading={"---My Cart---"}
          width="w-1/2"
        ></SectionTitle>
      </div>
      <div className="bg-white px-4 md:px-12 py-3 md:py-12">
        <div className="font-Cinzel font-bold flex items-center justify-between   ">
          <h2 className=" text-xs md:text-3xl  md:leading-[43px]">
            Total orders: {carts.length}
          </h2>
          <h2 className=" text-xs md:text-3xl md:leading-[43px]">
            total price: ${totalPrice}
          </h2>
          <button className="btn h-auto px-[17px] text-xs md:text-xl py-[14px] bg-[#D1A054]  text-white">
            pay
          </button>
        </div>
        {/* table */}

        <div>
          <div className="overflow-x-auto rounded-t-lg mt-3">
            <table className="table space-y-3 font-Inter rounded-t-lg">
              {/* head */}
              <thead className="bg-[#D1A054]  ">
                <tr className="text-white rounded-t-2xl py-3 md:py-6 ">
                  <th>#</th>
                  <th className="text-base uppercase font-semibold leading-[19px]">
                    ITEM IMAGE
                  </th>
                  <th className="text-base uppercase font-semibold leading-[19px]">
                    ITEM NAME
                  </th>
                  <th className="text-base uppercase font-semibold leading-[19px]">
                    PRICE
                  </th>
                  <th className="text-base uppercase font-semibold leading-[19px]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {carts.map((item, idx) => (
                  <tr key={item._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-[#737373] text-base ">
                      <span>{item.name}</span>
                    </td>
                    <td className="text-[#737373] text-base">${item.price}</td>
                    <th>
                      <button className="btn btn-ghost text-3xl text-red-600">
                        <MdDelete></MdDelete>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
