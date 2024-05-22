import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const [, refetch] = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const handleAddCart = () => {
    if (user && user.email) {
      //sent cart item in db
      const cartItem = {
        menuId: _id,
        email: user.email,
        price,
        image,
        name,
      };
      axiosSecure
        .post("/carts", cartItem)
        .then((res) => {
          if (res.data.insertedId) {
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to cart`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      Swal.fire({
        title: "you're not logged in",
        text: "Please Log in to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, log in!",
      }).then((result) => {
        if (result.isConfirmed) {
          // Swal.fire({
          //   title: "Deleted!",
          //   text: "Your file has been deleted.",
          //   icon: "success",
          // });
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
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
            <button
              onClick={handleAddCart}
              className="btn uppercase btn-ghost text-[#BB8506] hover:bg-black hover:border-b-white  h-auto px-8 py-5 rounded-lg border-0 border-b-[#BB8506] border-b-2"
            >
              {"Add to cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
