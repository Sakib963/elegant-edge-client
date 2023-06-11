import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { GrCheckboxSelected } from "react-icons/gr";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ total, courseId, selectedClassId, courseName }) => {
  const { user } = useContext(AuthContext);

  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (total > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: total })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
        });
    }
  }, []);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }
    console.log("card", card);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
    } else {
      setCardError("");
      console.log("[PaymentMethod]", paymentMethod);
    }

    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "anonymous",
            email: user.email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
    }
    console.log(paymentIntent);

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // Save Payment Information To Server
      const payment = {
        user: user.email,
        transactionId: paymentIntent.id,
        price: total,
        courseId,
        courseName: courseName,
        selectedClassId,
        date: new Date(),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.insertResult.insertedId) {
          // Display Confirm
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment Successful.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/selectedclasses");
        }
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="lg:w-2/3 lg:mx-auto mx-10 space-y-3 mt-10 border rounded-md p-5"
      >
        <CardElement
          className="border p-2"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        {cardError && (
          <p className="text-red-600 flex items-center gap-1">
            <BiErrorCircle /> {cardError}
          </p>
        )}
        {transactionId && (
          <p className="text-green-600 flex items-center gap-1">
            <GrCheckboxSelected /> Payment Successful with TransactionID:{" "}
            {transactionId}
          </p>
        )}
        <button
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          className="flex gap-2 justify-center items-center bg-[#CDC7F8] w-full py-2 text-center font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-[#A69BFB] duration-300"
        >
          <AiOutlineCreditCard className="text-lg" />
          Pay
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
