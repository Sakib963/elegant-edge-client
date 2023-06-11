import { BiErrorCircle } from "react-icons/bi";
import usePaidClass from "../../../hooks/usePaidClass";
import PaidClassRow from "./PaidClassRow";

const PaymentHistory = () => {
  const [paidClass] = usePaidClass();
  const emptyClass = paidClass.length === 0;
  return (
    <div className="text-center mt-20 lg:mt-10">
      <h3 className="text-2xl lg:text-3xl font-bold">Payment History</h3>
      <div className="mt-10 lg:w-3/4 lg:mx-auto mx-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Class Info</th>
              <th>Transaction ID</th>
              <th>Price</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {paidClass.map((singleClass, index) => (
              <PaidClassRow
                key={singleClass._id}
                singleClass={singleClass}
                index={index}
              ></PaidClassRow>
            ))}
          </tbody>
        </table>
      </div>
      {emptyClass && (
        <div className="text-center mx-auto mt-10 space-y-3">
          <iframe
            src="https://embed.lottiefiles.com/animation/85557"
            className="mx-auto"
          ></iframe>
          <h3 className="text-2xl lg:text-5xl font-semibold flex items-center justify-center gap-2">
            <BiErrorCircle className="text-red-600" />
            No Payment History Available.
          </h3>
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
