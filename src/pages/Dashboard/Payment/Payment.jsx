import { AiOutlineRollback } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

// TODO: PROVIDE PUBLISHABLE KEY
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

const Payment = () => {
  const item = useLoaderData();
  console.log(item);

  const total = parseFloat(item.price.toFixed(2));
  console.log("total:", total);

  return (
    <div className="text-center mt-20 lg:mt-10">
      <h3 className="text-2xl lg:text-3xl font-bold">Process Payment</h3>
      <div className="mt-10 text-start mx-10 space-y-3 grid lg:grid-cols-2">
        <div className="space-y-3">
          <h3 className="text-2xl lg:text-3xl font-bold">
            Course Name: <span className="font-normal">{item.name}</span>
          </h3>
          <p className="text-xl lg:text-2xl font-bold">
            Instructor: <span className="font-normal">{item.instructor}</span>
          </p>
          <p className="text-xl lg:text-2xl font-bold">
            Price: $<span className="font-normal">{item.price}</span>
          </p>
        </div>
        <div className="flex justify-end">
          <Link to={"/dashboard/selectedclasses"}>
            <button className="flex gap-2 items-center bg-[#CDC7F8] px-3 py-2 font-semibold rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#A69BFB] duration-300">
              <AiOutlineRollback className="text-2xl" />
              Go Back
            </button>
          </Link>
        </div>
      </div>
      <Elements stripe={stripePromise}>
        <CheckoutForm
          total={total}
          courseId={item.classID}
          selectedClassId={item._id}
        />
      </Elements>
    </div>
  );
};

export default Payment;
