import { MdDelete } from "react-icons/md";
import useCart from "../../../Hooks/useCart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
  const [carts, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const totalPrice = carts.reduce((accumulator, item) => {
    return accumulator + parseFloat(item.price);
  }, 0);
  // dlete operation
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/carts/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((err) => console.log(err));
      }
    });
  };
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
              <thead className="bg-[#D1A054] h-auto  py-3 md:py-6">
                <tr className="text-white h-auto rounded-t-2xl py-3 md:py-6 ">
                  <th className="py-4 md:py-6">#</th>
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
                          <div className="mask mask-squircle h-[75px] aspect-square">
                            <img
                              src={item.image}
                              className="h-[75px] aspect-square"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="text-[#737373] text-base py-3 md:py-6 ">
                      <span>{item.name}</span>
                    </td>
                    <td className="text-[#737373] text-base">${item.price}</td>
                    <th>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost text-3xl text-red-600"
                      >
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
