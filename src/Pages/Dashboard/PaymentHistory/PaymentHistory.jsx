import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user?.email}`);
      return res.data;
    },
  });
  console.log(payments);
  return (
    <div>
      <div className="bg-[#F6F6F6]">
        <div className=" w-full">
          <SectionTitle
            heading={"Payments"}
            subheading={"---Your Payments---"}
            width="w-1/2"
          ></SectionTitle>
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
                    transaction id
                  </th>
                  <th className="text-base uppercase font-semibold leading-[19px]">
                    Email
                  </th>
                  <th className="text-base uppercase font-semibold leading-[19px]">
                    PRICE
                  </th>
                  <th className="text-base uppercase font-semibold leading-[19px]">
                    status
                  </th>
                </tr>
              </thead>
              <tbody>
                {payments.map((item, idx) => (
                  <tr key={item._id}>
                    <th>{idx + 1}</th>
                    <td className="text-[#737373] text-base py-3 md:py-6 ">
                      <span>{item.transactionId}</span>
                    </td>
                    <td className="text-[#737373] text-base py-3 md:py-6 ">
                      <span>{item.email}</span>
                    </td>
                    <td className="text-[#737373] text-base">${item.price}</td>
                    <td className="text-[#737373] text-base">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};

export default PaymentHistory;
