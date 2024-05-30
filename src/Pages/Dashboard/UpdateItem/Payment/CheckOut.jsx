import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOut = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  //

  // <form onSubmit={handleSubmit}>
  //   <CardElement
  //     options={{
  //       style: {
  //         base: {
  //           fontSize: "16px",
  //           color: "#424770",
  //           "::placeholder": {
  //             color: "#aab7c4",
  //           },
  //         },
  //         invalid: {
  //           color: "#9e2146",
  //         },
  //       },
  //     }}
  //   />
  //   <button type="submit" disabled={!stripe}>
  //     Pay
  //   </button>
  // </form>
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center  max-w-2xl mx-auto my-8"
    >
      <CardElement
        options={{
          iconStyle: "solid",
          style: {
            base: {
              iconColor: "#c4f0ff",
              color: "#454545",
              fontWeight: 500,
              fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
              fontSize: "16px",
              fontSmoothing: "antialiased",
              ":-webkit-autofill": {
                color: "#fce883",
              },
              "::placeholder": {
                color: "#87bbfd",
              },
            },
            invalid: {
              iconColor: "#ffc7ee",
              color: "#ffc7ee",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe}
        className="btn text-center my-8 h-auto px-[17px] text-xs md:text-xl py-[14px] bg-[#D1A054]  text-white"
      >
        Pay
      </button>
    </form>
  );
};

export default CheckOut;
