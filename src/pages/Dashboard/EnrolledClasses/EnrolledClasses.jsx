import ClassRow from "./ClassRow";
import useEnrolledClass from "../../../hooks/useEnrolledClass";
import { BiErrorCircle } from "react-icons/bi";

const EnrolledClasses = () => {
  const [enrolledClass] = useEnrolledClass();

  const emptyClass = enrolledClass.length === 0;

  return (
    <div className="text-center mt-20 lg:mt-10">
      <h3 className="text-2xl lg:text-3xl font-bold">Enrolled Classes</h3>
      <div className="mt-10 lg:w-3/4 lg:mx-auto mx-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Class Details</th>
              <th>Instructor Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClass.map((singleClass, index) => (
              <ClassRow
                key={singleClass._id}
                singleClass={singleClass}
                index={index}
              ></ClassRow>
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
              Please Select A Class First.
            </h3>
          </div>
        )}
    </div>
  );
};

export default EnrolledClasses;
