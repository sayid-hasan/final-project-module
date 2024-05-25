import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  // handle admin
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure ?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Make admin",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
              title: "Success",
              text: "Succesfully made admin",
              icon: "success",
            });
          }
        });
      }
    });
  };
  // DELETE USER
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
          .delete(`/users/${id}`)
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
          heading={" MANAGE ALL USERS"}
          subheading={"---How many??---"}
          width="w-1/2"
        ></SectionTitle>
      </div>
      <div className="bg-white px-4 md:px-12 py-3 md:py-12">
        <div className="font-Cinzel font-bold flex items-center justify-between ">
          <h2 className=" text-xs md:text-3xl  md:leading-[43px]">
            Total Users: {users.length}
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
                    Name
                  </th>
                  <th className="text-base uppercase font-semibold leading-[19px]">
                    Email
                  </th>
                  <th className="text-base uppercase font-semibold leading-[19px]">
                    role
                  </th>
                  <th className="text-base uppercase font-semibold leading-[19px]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, idx) => (
                  <tr key={user._id}>
                    <th>{idx + 1}</th>
                    <td>
                      <div className="text-[#737373] text-base py-3 md:py-6 ">
                        <span>{user.name}</span>
                      </div>
                    </td>
                    <td className="text-[#737373] text-base py-3 md:py-6 ">
                      <span>{user.email}</span>
                    </td>
                    <td className="text-[#737373] text-base">
                      {user?.role ? (
                        `${user?.role}`
                      ) : (
                        <>
                          <button
                            onClick={() => handleMakeAdmin(user)}
                            className="btn btn-ghost text-3xl text-white flex justify-center items-center bg-[#D1A054]"
                          >
                            <FaUsers></FaUsers>
                          </button>
                        </>
                      )}{" "}
                    </td>
                    <th>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="btn btn-ghost text-3xl text-white flex justify-center items-center bg-red-700"
                      >
                        <FaTrashAlt></FaTrashAlt>
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

export default AllUsers;
