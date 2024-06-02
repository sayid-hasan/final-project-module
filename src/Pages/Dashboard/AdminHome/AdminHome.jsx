import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: adminStat } = useQuery({
    queryKey: ["admin-stat"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  console.log(adminStat);
  return (
    <div>
      <h2 className="py-4 font-Inter uppercase font-normal border-y-2 border-[#E8E8E8] text-2xl md:text-4xl leading-[48px] text-center mb-4 md:mb-9">
        WelCome Back {user?.displayName ? user?.displayName : "back"}
      </h2>
    </div>
  );
};

export default AdminHome;
