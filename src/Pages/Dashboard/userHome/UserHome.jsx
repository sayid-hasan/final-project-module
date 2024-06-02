import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
  const { user } = useAuth();
  return (
    <div>
      <div>
        <h2 className="py-4 font-Inter uppercase font-normal border-y-2 border-[#E8E8E8] text-2xl md:text-4xl leading-[48px] text-center mb-4 md:mb-9">
          WelCome Back {user?.displayName ? user?.displayName : "back"}
        </h2>
      </div>
    </div>
  );
};

export default UserHome;
