import Swal from "sweetalert2";
import useMenu from "../../../Hooks/UseMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Box, LinearProgress } from "@mui/material";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  if (loading) {
    return (
      <Box sx={{ width: "100%" }}>
        <LinearProgress />
      </Box>
    );
  }

  // delete item
  const handleDelete = (item) => {
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
          .delete(`/menu/${item._id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: `${item.name} has been deleted`,
                icon: "success",
              });
              refetch();
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
          heading={" MANAGE ALL ITEMS"}
          subheading={"---Hurry Up!---"}
          width="w-1/2"
        ></SectionTitle>
      </div>
      <div className="font-Cinzel font-bold flex items-center justify-between   ">
        <h2 className=" text-xs md:text-3xl  md:leading-[43px]">
          Total items: {menu.length}
        </h2>
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
                <th className="text-base uppercase font-semibold leading-[19px]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {menu.map((item, idx) => (
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
                  <td>
                    <Link to={`/dashboard/updateitem/${item._id}`}>
                      {" "}
                      <button
                        //   onClick={() => handleDelete(item._id)}
                        className="btn btn-ghost h-auto py-2 text-3xl bg-[#D1A054] text-white"
                      >
                        <FaEdit></FaEdit>
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost h-auto py-2 text-3xl bg-[#B91C1C] text-white"
                    >
                      <FaTrashAlt></FaTrashAlt>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
