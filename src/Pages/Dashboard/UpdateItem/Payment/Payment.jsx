import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(import.meta.env.VITE_PUBLISH_KEY);
const Payment = () => {
  return (
    <div className="bg-[#F6F6F6]">
      <div className=" w-full">
        <SectionTitle
          heading={" Payment"}
          subheading={"procced to payment"}
          width="w-1/2"
        ></SectionTitle>
      </div>
      <div>
        <Elements stripe={stripePromise}>
          <CheckOut />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
